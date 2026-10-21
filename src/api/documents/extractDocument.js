export default async function extractDocument(file, signal, documentType) {
  const body = new FormData();
  body.append("file", file);
  if (documentType) body.append("document_type", documentType);
  const baseUrl = (
    process.env.REACT_APP_DOC_EXTRACT_URL ||
    "https://doc-extract-studanshus-projects.vercel.app"
  ).replace(/\/$/, "");
  const response = await fetch(`${baseUrl}/extract`, {
    method: "POST",
    body,
    signal,
    credentials: "omit",
    cache: "no-store",
  });
  const result = await response.json();
  if (
    !response.ok ||
    !result.success ||
    result.api_version !== "3.0" ||
    !result.data ||
    typeof result.data !== "object" ||
    !Array.isArray(result.profile?.field_paths) ||
    !result.document_type
  ) {
    throw new Error("EXTRACTION_FAILED");
  }
  return result;
}

export async function getDocumentTypes(signal) {
  const baseUrl = (
    process.env.REACT_APP_DOC_EXTRACT_URL ||
    "https://doc-extract-studanshus-projects.vercel.app"
  ).replace(/\/$/, "");
  const response = await fetch(`${baseUrl}/document-types`, {
    signal,
    credentials: "omit",
    cache: "no-store",
  });
  const result = await response.json();
  if (
    !response.ok ||
    !result.success ||
    result.api_version !== "3.0" ||
    !Array.isArray(result.document_types)
  )
    throw new Error("CATALOGUE_FAILED");
  return result.document_types.filter(
    (item) =>
      item && typeof item.label === "string" && typeof item.type === "string",
  );
}
