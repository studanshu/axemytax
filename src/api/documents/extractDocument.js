export default async function extractDocument(
  file,
  signal,
  documentType,
  includeTrace = false,
) {
  const body = new FormData();
  body.append("file", file);
  if (documentType) body.append("document_type", documentType);
  if (includeTrace) body.append("include_trace", "true");
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

export async function getProfileCatalogue(signal) {
  const baseUrl = (
    process.env.REACT_APP_DOC_EXTRACT_URL ||
    "https://doc-extract-studanshus-projects.vercel.app"
  ).replace(/\/$/, "");
  const [profilesResponse, schemaResponse] = await Promise.all([
    fetch(`${baseUrl}/document-profiles`, {
      signal,
      credentials: "omit",
      cache: "no-store",
    }),
    fetch(`${baseUrl}/schema`, {
      signal,
      credentials: "omit",
      cache: "no-store",
    }),
  ]);
  const [profiles, schema] = await Promise.all([
    profilesResponse.json(),
    schemaResponse.json(),
  ]);
  if (
    !profilesResponse.ok ||
    !schemaResponse.ok ||
    !profiles.success ||
    !schema.success ||
    profiles.api_version !== "3.0" ||
    schema.api_version !== "3.0" ||
    !Array.isArray(profiles.profiles) ||
    !schema.fields ||
    typeof schema.fields !== "object" ||
    Array.isArray(schema.fields)
  )
    throw new Error("PROFILE_CATALOGUE_FAILED");
  return { profiles: profiles.profiles, fields: schema.fields };
}
