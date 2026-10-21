import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const source = await readFile(
  new URL("../api/documents/extract.js", import.meta.url),
  "utf8",
);
const { default: handler } = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);
const clientSource = await readFile(
  new URL("../src/api/documents/extractDocument.js", import.meta.url),
  "utf8",
);
const { default: extractDocument } = await import(
  `data:text/javascript;base64,${Buffer.from(clientSource).toString("base64")}`
);

function request(method = "POST", body = Buffer.from("synthetic multipart")) {
  return {
    method,
    headers: { "content-type": "multipart/form-data; boundary=testing" },
    async *[Symbol.asyncIterator]() {
      yield body;
    },
  };
}
function response() {
  return {
    headers: {},
    statusCode: 200,
    setHeader(k, v) {
      this.headers[k] = v;
    },
    status(n) {
      this.statusCode = n;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
}
test("rejects wrong methods and malformed multipart before calling OCR", async () => {
  const res = response();
  await handler(request("GET"), res);
  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.Allow, "POST");
  const req = request();
  req.headers["content-type"] = "application/json";
  const bad = response();
  await handler(req, bad);
  assert.equal(bad.statusCode, 415);
});
test("bounds streamed payloads even without a Content-Length header", async () => {
  const res = response();
  await handler(request("POST", Buffer.alloc(5 * 1024 * 1024)), res);
  assert.equal(res.statusCode, 413);
  assert.equal(res.body.error.code, "UPLOAD_TOO_LARGE");
});
test("preserves the v2 envelope and never caches document data", async (t) => {
  const expected = {
    success: true,
    api_version: "2.0",
    document_type: "pan_card",
    fields: { personal: { full_name: "SYNTHETIC TEST" } },
  };
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(new URL(url).pathname, "/extract");
    assert.equal(
      options.headers["Content-Type"],
      "multipart/form-data; boundary=testing",
    );
    return { ok: true, json: async () => expected };
  });
  const res = response();
  await handler(request(), res);
  assert.deepEqual(res.body, expected);
  assert.equal(res.headers["Cache-Control"], "no-store");
});
test("rejects incompatible upstream output and handles timeouts", async (t) => {
  t.mock.method(globalThis, "fetch", async () => ({
    ok: true,
    json: async () => ({ hello: "world" }),
  }));
  const res = response();
  await handler(request(), res);
  assert.equal(res.statusCode, 502);
  globalThis.fetch = async () => {
    const error = new Error();
    error.name = "TimeoutError";
    throw error;
  };
  const timeout = response();
  await handler(request(), timeout);
  assert.equal(timeout.statusCode, 504);
});
test("client uses a multipart file and validates the canonical response", async (t) => {
  const expected = {
    success: true,
    api_version: "2.0",
    document_type: "pan_card",
    fields: {},
  };
  t.mock.method(globalThis, "fetch", async (url, options) => {
    assert.equal(url, "/api/documents/extract");
    assert.equal(options.body.get("file").name, "synthetic.pdf");
    return { ok: true, json: async () => expected };
  });
  const file = new File(["synthetic"], "synthetic.pdf", {
    type: "application/pdf",
  });
  assert.deepEqual(await extractDocument(file), expected);
  globalThis.fetch = async () => ({
    ok: true,
    json: async () => ({ success: true, api_version: "1.0" }),
  });
  await assert.rejects(extractDocument(file), /EXTRACTION_FAILED/);
});
