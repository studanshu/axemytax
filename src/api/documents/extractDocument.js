export default async function extractDocument(file, signal) {
  const body = new FormData();
  body.append("file", file);
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
    result.api_version !== "2.0" ||
    !result.fields ||
    typeof result.fields !== "object" ||
    !result.document_type
  ) {
    throw new Error("EXTRACTION_FAILED");
  }
  return result;
}
