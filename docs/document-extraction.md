# Frontend document extraction

AxeMyTax is frontend-only. There are no server/API handlers in this repository.
`src/api/documents/extractDocument.js` is a browser HTTP client.

Selecting a file keeps it local. Choosing **Extract fields** sends multipart field
`file` directly to the separate Doc Extract backend. Configure its public base URL
with `REACT_APP_DOC_EXTRACT_URL`; the default is
`https://doc-extract-studanshus-projects.vercel.app`. Never put secrets in frontend
environment variables.

The `studanshu/document-extractor` repository owns OCR, parsing, the v2 response
schema, and server configuration. Its CORS allowlist permits the AxeMyTax origin.
Browser requests send no cookies or authentication credentials.

The UI preserves `fields` and `document_specific` in a review panel. Results stay
in React state; no extraction data is sent to analytics or persistent browser
storage. It accepts PDF/JPEG/PNG files up to 4 MB, ten selections, and aborts
extraction on removal/unmount or after 115 seconds. Users must review OCR output.

Form coverage is owned by the backend's `/document-types` endpoint. Parser updates
and recognition of new tax forms deploy independently from this frontend.

Google Drive storage remains pending. Future storage endpoints and credentials
belong in the document-extractor backend. Save to Drive stays disabled meanwhile.

Run `node --test tests/document-extraction.test.mjs` for browser client checks.
