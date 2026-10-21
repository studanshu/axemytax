import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const source = await readFile(
  new URL("../src/api/documents/extractDocument.js", import.meta.url),
  "utf8",
);
const { default: extractDocument } = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);
const file = new File(["synthetic"], "synthetic.pdf", {
  type: "application/pdf",
});

test("browser uploads directly to Doc Extract with no credentials", async (t) => {
  const expected = {
    success: true,
    api_version: "2.0",
    document_type: "pan_card",
    fields: {},
  };
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(
      url,
      "https://doc-extract-studanshus-projects.vercel.app/extract",
    );
    assert.equal(options.body.get("file").name, "synthetic.pdf");
    assert.equal(options.credentials, "omit");
    return { ok: true, json: async () => expected };
  });
  assert.deepEqual(await extractDocument(file), expected);
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
        api_version: "2.0",
        document_type: "pan_card",
        fields: {},
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
