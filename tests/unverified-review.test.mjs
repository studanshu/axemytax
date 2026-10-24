import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const source = await readFile(
  new URL("../src/pages/DocumentUpload/unverifiedReview.js", import.meta.url),
  "utf8",
);
const { editDistance, suggestFields, reviewedResult } = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);
test("suggestions recognize a wrong namespace and a misspelled key", () => {
  const allowed = [
    "personal.date_of_birth",
    "document.place_of_birth",
    "personal.full_name",
    "personal.given_names",
  ];
  assert.equal(editDistance("given_namrs", "given_names"), 1);
  assert.equal(
    suggestFields("personal.place_of_birth", allowed)[0].key,
    "document.place_of_birth",
  );
  assert.equal(
    suggestFields("personal.given_namrs", allowed)[0].key,
    "personal.given_names",
  );
  assert.deepEqual(suggestFields("anything", []), []);
});
test("only explicit decisions merge and provenance remains unverified", () => {
  const accepted = { personal: { full_name: "SOURCE NAME" } };
  const allowed = ["personal.full_name", "document.place_of_birth"];
  assert.deepEqual(reviewedResult(accepted, {}, allowed).data, accepted);
  const result = reviewedResult(
    accepted,
    {
      "personal.full_name": {
        value: "REVIEWED NAME",
        originalPath: "personal.name",
      },
      "document.place_of_birth": {
        value: "EXAMPLE",
        originalPath: "personal.place_of_birth",
      },
      "identifiers.gstin": { value: "IGNORED", originalPath: "gst" },
    },
    allowed,
  );
  assert.equal(accepted.personal.full_name, "SOURCE NAME");
  assert.equal(result.data.personal.full_name, "REVIEWED NAME");
  assert.equal(result.data.document.place_of_birth, "EXAMPLE");
  assert.equal(
    result.field_reviews["personal.full_name"].source_check,
    "unverified",
  );
  assert.equal(
    result.field_reviews["personal.full_name"].review_status,
    "user_accepted",
  );
  assert.equal(result.data.identifiers, undefined);
});
test("review merge refuses prototype paths even if supplied by an invalid schema", () => {
  const result = reviewedResult({}, { "__proto__.polluted": { value: true } }, [
    "__proto__.polluted",
  ]);
  assert.deepEqual(result.data, {});
  assert.equal({}.polluted, undefined);
});
