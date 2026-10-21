// Server-side adapter: keeps the public OCR service independent of browser CORS.
export const config = { api: { bodyParser: false }, maxDuration: 120 };
const MAX_BODY = 4 * 1024 * 1024 + 64 * 1024;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const fail = (status, code, message) =>
    res.status(status).json({
      success: false,
      api_version: "2.0",
      error: { code, message },
    });
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return fail(405, "METHOD_NOT_ALLOWED", "Use POST with a multipart file.");
  }
  const contentType = req.headers["content-type"] || "";
  if (
    !contentType.startsWith("multipart/form-data;") ||
    !contentType.includes("boundary=")
  ) {
    return fail(
      415,
      "UNSUPPORTED_MEDIA_TYPE",
      "A multipart file upload is required.",
    );
  }
  if (Number(req.headers["content-length"]) > MAX_BODY) {
    return fail(413, "UPLOAD_TOO_LARGE", "Choose a file no larger than 4 MB.");
  }
  try {
    let size = 0;
    const chunks = [];
    for await (const chunk of req) {
      size += chunk.length;
      if (size > MAX_BODY)
        return fail(
          413,
          "UPLOAD_TOO_LARGE",
          "Choose a file no larger than 4 MB.",
        );
      chunks.push(chunk);
    }
    const service = (
      process.env.DOC_EXTRACT_URL ||
      "https://doc-extract-studanshus-projects.vercel.app"
    ).replace(/\/$/, "");
    const response = await fetch(`${service}/extract`, {
      method: "POST",
      headers: { "Content-Type": contentType },
      body: Buffer.concat(chunks),
      signal: AbortSignal.timeout(110000),
    });
    const result = await response.json();
    if (result.api_version !== "2.0" || typeof result.success !== "boolean") {
      return fail(
        502,
        "INVALID_UPSTREAM_RESPONSE",
        "The extraction service returned an unexpected response.",
      );
    }
    return res.status(response.ok ? 200 : response.status).json(result);
  } catch (error) {
    return fail(
      error.name === "TimeoutError" ? 504 : 502,
      "EXTRACTION_UNAVAILABLE",
      "Document extraction is unavailable. Please try again.",
    );
  }
}
