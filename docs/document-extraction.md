# Document extraction

The upload page at `/upload-documents` uses the existing Doc Extract v2 service.
Selection alone does not upload anything. The user chooses **Extract fields** per
file, which posts multipart field `file` to `/api/documents/extract`. The adapter
forwards that request to `${DOC_EXTRACT_URL}/extract` and returns the v2 envelope
unchanged. The default service is
`https://doc-extract-studanshus-projects.vercel.app`.

Set `DOC_EXTRACT_URL` as a server-side environment variable to use another instance.
It must expose the same v2 contract. No API key or LLM is used. This service is
public and currently has no authentication; the adapter does not add authentication.
Do not put credentials in this URL. Production account access/rate limiting needs
a separate implementation before operating this as a private client portal.

## Contract

Success: `success: true`, `api_version: "2.0"`, `document_type`,
`document_type_label`, `category`, `country`, `extraction_method`, `pages`,
`filename`, `fields`, `document_specific`, and `raw_text`.

Canonical groups in `fields`: `personal`, `contact`, `address`, `identifiers`,
`dates`, `issuer`, and `financial`. The extractor owns this schema; inspect its
`GET /schema` for the complete current key list. The UI preserves nulls and arrays
and displays `fields` and `document_specific` without reinterpreting them. Raw OCR
text is not displayed or written to browser storage. Results remain in React state
until removed, cleared, or the page is left; originals are represented by local
object URLs and revoked on removal/unmount. No extraction data is sent to analytics.

Errors use `success: false`, `api_version: "2.0"`,
`error: {code, message}`. The adapter adds 405/415/413/502/504 errors for method,
content type, size, upstream failures, and timeout. The UI exposes retry per file,
prevents duplicate in-flight extraction, and aborts requests on removal/unmount.

## Limits and coverage

The AxeMyTax adapter caps files at **4 MB**, below the hosting request payload
ceiling including multipart overhead. This is lower than the extractor's own
advertised 15 MB limit. Accepted UI formats: PDF, JPEG, PNG, up to ten selections.
Server timeout: 110 seconds. OCR output always requires user review.

The live `/document-types` endpoint was checked during implementation: 50 entries,
including Aadhaar, PAN, Indian passport, Form 16, ITR, and bank statements. Form 14,
Form 15 variants, AIS, and Form 26AS are not dedicated entries in that list.
Generic extraction is not a claim of specialized support for those forms.

Google Drive upload is **not connected**. The Save to Drive control stays disabled.
This change adds no persistence or verification of identity/document authenticity.

## Verification

Run `node --test tests/document-extraction.test.mjs` for adapter and client contract
checks. The tests use synthetic data and mocked upstream responses, no real PII.
Full OCR quality needs a separately labeled evaluation set of representative,
consented documents; recognizing a type is not an accuracy guarantee.
