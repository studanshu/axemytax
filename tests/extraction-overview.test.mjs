import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
const source = await readFile(
  new URL("../src/pages/DocumentUpload/extractionOverview.js", import.meta.url),
  "utf8",
);
const { extractionOverview } = await import(
  `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`
);
test("partial review separates supported, withheld and missing profile fields", () => {
  const overview = extractionOverview({
    document_type: "indian_passport",
    profile: {
      field_paths: [
        "personal.full_name",
        "identifiers.passport_number",
        "personal.spouse_name",
      ],
      required_paths: ["personal.full_name"],
    },
    validation: {
      field_status: {
        "personal.full_name": "extracted",
        "identifiers.passport_number": "invalid",
        "personal.spouse_name": "not_found",
        "identifiers.gstin": "extracted",
      },
      issues: [
        {
          field: "identifiers.passport_number",
          code: "identifier_not_in_source_quote",
        },
      ],
    },
  });
  assert.equal(overview.extracted, 1);
  assert.equal(overview.withheld, 1);
  assert.equal(overview.notFound, 1);
  assert.equal(overview.needsReview, true);
  assert.ok(
    overview.fields.every((field) => field.path !== "identifiers.gstin"),
  );
});
test("failure still exposes available OCR and model metadata without inventing values", () => {
  const overview = extractionOverview(undefined, {
    status: "failed",
    trace_id: "synthetic-id",
    steps: [
      {
        step: "text_extraction",
        status: "completed",
        summary: { pages: 2, method: "google_docs", characters: 100 },
      },
      {
        step: "extraction_model",
        title: "Extract fields",
        status: "failed",
        events: [
          {
            event: "model_request",
            provider: "groq",
            model_id: "test",
            schema_mode: "strict",
          },
        ],
      },
    ],
  });
  assert.equal(overview.extracted, 0);
  assert.equal(overview.needsReview, true);
  assert.equal(new Map(overview.metadata).get("Pages read"), 2);
  assert.equal(new Map(overview.metadata).get("Model"), "test");
  assert.equal(new Map(overview.metadata).get("Stopped at"), "Extract fields");
});
test("missing required fields need review even without a validation issue", () => {
  const overview = extractionOverview({
    profile: {
      field_paths: ["personal.full_name"],
      required_paths: ["personal.full_name"],
    },
    validation: { field_status: { "personal.full_name": "not_found" } },
  });
  assert.equal(overview.needsReview, true);
});
