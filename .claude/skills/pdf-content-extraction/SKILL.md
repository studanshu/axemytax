# SKILL: pdf-content-extraction

**Layer:** L0 (Foundation — no dependencies)
**Trigger:** User provides a PDF file and wants its content converted to structured data.

---

## Problem
PDFs in this project are often image-based (scanned documents). `pdftotext` returns empty/garbled output. The Read tool requires `pdftoppm` which may not be installed.

## Procedure

### Step 1 — Check if poppler is installed
```bash
which pdftoppm && pdftoppm -v 2>&1
```
If not found:
```bash
brew install poppler
```

### Step 2 — Try text extraction first (fast path for text-based PDFs)
```bash
pdftotext "/path/to/file.pdf" /tmp/output.txt && wc -l /tmp/output.txt
```
Read `/tmp/output.txt`. If it contains mostly whitespace/empty lines → the PDF is image-based. Skip to Step 3.

### Step 3 — Render PDF pages to images (for image-based PDFs)
```bash
# Render specific page range at 150dpi
pdftoppm -r 150 -png "/path/to/file.pdf" /tmp/prefix -f 1 -l 5
ls /tmp/prefix*.png
```
Then use the `Read` tool to view each image file visually.

### Step 4 — Batch through pages
- Read 3–6 pages at a time in parallel using the `Read` tool
- Extract content as you read (don't wait for all pages)
- Note the repeating structure early (e.g., monthly pages → same layout every page)

## Key Notes
- PDFs with lots of visual design (calendars, brochures) are always image-based
- `pdftoppm` path on macOS with Homebrew: `/opt/homebrew/bin/pdftoppm` — always in PATH after `brew install poppler`
- Use `-r 150` resolution: high enough to read text, low enough to be fast
- The Read tool sees images natively — trust it to read text from rendered PNGs

## Output
A structured understanding of the PDF's content, ready to be mapped to TypeScript data types.
