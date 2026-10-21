const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const source = fs.readFileSync(
  path.join(__dirname, "../src/pages/DocumentUpload/reviewData.js"),
  "utf8",
);
const modulePromise = import(
  `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);

test("passport review excludes an injected GSTIN and bank account", async () => {
  const { selectProfileData } = await modulePromise;
  assert.deepEqual(
    selectProfileData({
      data: {
        personal: { full_name: "TEST USER" },
        identifiers: { passport_number: "Z1234567", gstin: "29ABCDE1234F1Z5" },
        banking: { account_number: "123456" },
      },
      profile: {
        field_paths: ["personal.full_name", "identifiers.passport_number"],
      },
    }),
    {
      personal: { full_name: "TEST USER" },
      identifiers: { passport_number: "Z1234567" },
    },
  );
});
test("banking profile retains transaction rows", async () => {
  const { selectProfileData } = await modulePromise;
  const rows = [{ description: "TEST PAYMENT" }];
  assert.deepEqual(
    selectProfileData({
      data: { banking: { transactions: rows } },
      profile: { field_paths: ["banking.transactions"] },
    }),
    { banking: { transactions: rows } },
  );
});
test("missing profile never falls back to displaying every field", async () => {
  const { selectProfileData } = await modulePromise;
  assert.deepEqual(
    selectProfileData({ data: { identifiers: { gstin: "unexpected" } } }),
    {},
  );
});
test("rejects prototype paths supplied in an invalid contract", async () => {
  const { selectProfileData } = await modulePromise;
  assert.deepEqual(
    selectProfileData({
      data: {},
      profile: { field_paths: ["__proto__.polluted"] },
    }),
    {},
  );
  assert.equal({}.polluted, undefined);
});

test("client sends selected document type and accepts v3 contract", async () => {
  const src = fs.readFileSync(
    path.join(__dirname, "../src/api/documents/extractDocument.js"),
    "utf8",
  );
  const { default: extractDocument } = await import(
    `data:text/javascript;base64,${Buffer.from(src).toString("base64")}`
  );
  const previous = global.fetch;
  let submitted;
  global.fetch = async (_, options) => {
    submitted = options.body;
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
  };
  try {
    const result = await extractDocument(
      new Blob(["synthetic"]),
      undefined,
      "indian_passport",
    );
    assert.equal(submitted.get("document_type"), "indian_passport");
    assert.equal(result.api_version, "3.0");
  } finally {
    global.fetch = previous;
  }
});
