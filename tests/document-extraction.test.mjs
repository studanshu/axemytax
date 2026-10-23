import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const source = await readFile(
  new URL("../src/api/documents/extractDocument.js", import.meta.url),
  "utf8",
);
const {
  default: extractDocument,
  getDocumentTypes,
  getProfileCatalogue,
} = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);
const file = new File(["synthetic"], "synthetic.pdf", {
  type: "application/pdf",
});

test("browser uploads directly to Doc Extract with no credentials", async (t) => {
  const expected = {
    success: true,
    api_version: "3.0",
    document_type: "pan_card",
    data: {},
    profile: { field_paths: [] },
  };
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(
      url,
      "https://doc-extract-studanshus-projects.vercel.app/extract",
    );
    assert.equal(options.body.get("file").name, "synthetic.pdf");
    assert.equal(options.credentials, "omit");
    assert.equal(options.body.has("include_trace"), false);
    return { ok: true, json: async () => expected };
  });
  assert.deepEqual(await extractDocument(file), expected);
});

test("diagnostics and selected profile are explicitly requested", async (t) => {
  t.mock.method(globalThis, "fetch", async (_url, options) => {
    assert.equal(options.body.get("include_trace"), "true");
    assert.equal(options.body.get("document_type"), "indian_passport");
    return {
      ok: true,
      json: async () => ({
        success: true,
        api_version: "3.0",
        document_type: "indian_passport",
        data: {},
        profile: { field_paths: [] },
      }),
    };
  });
  await extractDocument(file, undefined, "indian_passport", true);
});

test("field guide loads profile requirements and global definitions", async (t) => {
  const controller = new AbortController();
  const profiles = [
    {
      document_type: "indian_passport",
      field_paths: ["personal.full_name"],
      required_paths: ["personal.full_name"],
    },
  ];
  const fields = { "personal.full_name": { json_schema: { type: "string" } } };
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(options.credentials, "omit");
    assert.equal(options.signal, controller.signal);
    return {
      ok: true,
      json: async () => ({
        success: true,
        api_version: "3.0",
        ...(url.endsWith("/schema") ? { fields } : { profiles }),
      }),
    };
  });
  assert.deepEqual(await getProfileCatalogue(controller.signal), {
    profiles,
    fields,
  });
});

test("field guide rejects incompatible schema responses", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) => ({
    ok: true,
    json: async () => ({
      success: true,
      api_version: url.endsWith("/schema") ? "1.0" : "3.0",
      profiles: [],
      fields: {},
    }),
  }));
  await assert.rejects(getProfileCatalogue(), /PROFILE_CATALOGUE_FAILED/);
});
test("configured endpoint and cancellation signal pass through", async (t) => {
  const old = process.env.REACT_APP_DOC_EXTRACT_URL;
  process.env.REACT_APP_DOC_EXTRACT_URL = "https://extract.example.test/";
  t.after(() => {
    if (old === undefined) delete process.env.REACT_APP_DOC_EXTRACT_URL;
    else process.env.REACT_APP_DOC_EXTRACT_URL = old;
  });
  const controller = new AbortController();
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "https://extract.example.test/extract");
    assert.equal(options.signal, controller.signal);
    return {
      ok: true,
      json: async () => ({
        success: true,
        api_version: "3.0",
        document_type: "pan_card",
        data: {},
        profile: { field_paths: [] },
      }),
    };
  });
  await extractDocument(file, controller.signal);
});
test("client rejects incompatible extraction responses", async (t) => {
  t.mock.method(globalThis, "fetch", async () => ({
    ok: true,
    json: async () => ({ success: true, api_version: "1.0" }),
  }));
  await assert.rejects(extractDocument(file), /EXTRACTION_FAILED/);
});

test("document catalogue exposes passports and corporate returns", async (t) => {
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(
      url,
      "https://doc-extract-studanshus-projects.vercel.app/document-types",
    );
    assert.equal(options.credentials, "omit");
    return {
      ok: true,
      json: async () => ({
        success: true,
        api_version: "3.0",
        document_types: [
          { type: "indian_passport", label: "Indian Passport" },
          { type: "itr_6", label: "ITR-6" },
          null,
        ],
      }),
    };
  });
  assert.equal((await getDocumentTypes()).length, 2);
});

test("failed API responses retain trace, diagnostics and status for the review screen", async (t) => {
  const trace = {
    trace_id: "synthetic-trace",
    status: "failed",
    steps: [
      { step: "text_extraction", status: "completed" },
      {
        step: "extraction_model",
        status: "failed",
        error: { reason: "invalid_model_schema" },
      },
    ],
  };
  t.mock.method(globalThis, "fetch", async () => ({
    ok: false,
    status: 422,
    json: async () => ({
      success: false,
      api_version: "3.0",
      trace,
      error: {
        code: "model_output_requires_review",
        message: "Output could not be verified.",
        diagnostics: { stage: "extraction_model" },
      },
    }),
  }));
  await assert.rejects(extractDocument(file), (error) => {
    assert.equal(error.httpStatus, 422);
    assert.deepEqual(error.trace, trace);
    assert.equal(error.diagnostics.stage, "extraction_model");
    assert.equal(error.userMessage, "Output could not be verified.");
    return true;
  });
});

test("gateway errors preserve HTTP status without pretending to have a server trace", async (t) => {
  t.mock.method(globalThis, "fetch", async () => ({
    ok: false,
    status: 504,
    json: async () => {
      throw new SyntaxError("HTML gateway page");
    },
  }));
  await assert.rejects(extractDocument(file), (error) => {
    assert.equal(error.httpStatus, 504);
    assert.equal(error.trace, undefined);
    return true;
  });
});
