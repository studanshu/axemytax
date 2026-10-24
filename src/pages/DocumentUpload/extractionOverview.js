export function extractionOverview(result, trace) {
  const documents = result?.documents?.length
    ? result.documents
    : result
      ? [result]
      : [];
  const fields = documents.flatMap((document) =>
    Object.entries(document.validation?.field_status || {})
      .filter(([path]) => (document.profile?.field_paths || []).includes(path))
      .map(([path, status]) => ({
        document: document.document_type_label || document.document_type,
        path,
        status,
        required: (document.profile?.required_paths || []).includes(path),
        reasons: (document.validation?.issues || [])
          .filter((issue) => issue.field === path)
          .map((issue) => issue.code),
      })),
  );
  const calls = (trace?.steps || [])
    .flatMap((step) => step.events || [])
    .filter((event) => event.event === "model_request");
  const model = result?.processing || {};
  const ocr = trace?.steps?.find((step) => step.step === "text_extraction");
  const profileSteps = (trace?.steps || []).filter(
    (step) => step.step.startsWith("profile_") && step.status === "completed",
  );
  const failed = trace?.steps?.find((step) => step.status === "failed");
  const extracted = fields.filter(
    (field) => field.status === "extracted",
  ).length;
  const withheld = fields.filter((field) => field.status === "invalid").length;
  const notFound = fields.filter(
    (field) => field.status === "not_found",
  ).length;
  const metadata = [
    [
      "Document type",
      [
        ...new Set(
          documents.map(
            (document) =>
              document.document_type_label || document.document_type,
          ),
        ),
      ].join(", ") ||
        profileSteps
          .map((step) => step.summary?.document_type)
          .filter(Boolean)
          .join(", "),
    ],
    ["Pages read", result?.pages ?? ocr?.summary?.pages],
    ["Text extraction", result?.extraction_method || ocr?.summary?.method],
    ["OCR characters", ocr?.summary?.characters],
    ["Provider", model.provider || calls[0]?.provider],
    ["Model", model.model_id || calls[0]?.model_id],
    [
      "Schema mode",
      model.schema_mode ||
        model.calls?.[0]?.schema_mode ||
        calls[0]?.schema_mode,
    ],
    ["Request ID", trace?.trace_id],
    ["Stopped at", failed?.title],
  ].filter(([, value]) => value != null && value !== "");
  return {
    fields,
    extracted,
    withheld,
    notFound,
    metadata,
    needsReview:
      trace?.status === "failed" ||
      !!withheld ||
      fields.some((field) => field.required && field.status !== "extracted") ||
      result?.extraction_status === "partial",
  };
}
