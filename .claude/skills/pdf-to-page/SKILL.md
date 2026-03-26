# SKILL: pdf-to-page

**Layer:** L4
**Depends on:** `pdf-content-extraction`, `new-page-scaffold`
**Trigger:** "Create a page from this PDF", "Turn this document into a page", user uploads a PDF with structured data.

---

## Full Workflow

### Phase 1 — Extract PDF Content
Follow `pdf-content-extraction` skill:
1. Install poppler if needed
2. Try `pdftotext` first (text-based PDFs)
3. If output is garbled → render pages to PNG with `pdftoppm`, read visually
4. Read 3–6 pages in parallel, note the repeating structure early

**Key questions while reading:**
- What is the primary data structure? (monthly, categorical, tabular?)
- What are the distinct fields/properties? (date, category, description, etc.)
- What categories/groups exist? (define these as TypeScript union types)
- What colors/visual groupings are used? (map to UI color constants)

---

### Phase 2 — Map to TypeScript Types

Convert the visual structure to interfaces before writing any data:
```typescript
// Identify the category type first
export type Category = "Income Tax" | "GST" | "PF/ESI" | "ROC";

// Identify the atomic unit
export interface Item {
  day: number;
  category: Category;
  description: string;
}

// Identify the grouping (month, section, etc.)
export interface GroupData {
  name: string;
  items: Item[];
}

// Identify the top-level container (year, version, etc.)
export interface EntityData {
  year: number;
  groups: GroupData[];
}
```

---

### Phase 3 — Transcribe Data to Entity File

Create the entity file with all data from the PDF. Tips:
- Go through the PDF in order — one group at a time
- Sort items within each group (e.g., by day number)
- Use Unicode escape sequences for special chars: `\u2013` (–), `\u2019` (')
- Double-check date/number accuracy against the PDF images

---

### Phase 4 — Build Page

Follow `new-page-scaffold` skill:
1. Complete data layer (types.ts, entity.ts, index.ts)
2. Create page components (index.tsx, Hero.tsx, [MainSection].tsx, Contact.tsx)
3. Register routes in all 3 files

**Specific to PDF-sourced content:**
- Design MainSection to mirror the PDF's visual grouping (e.g., monthly tabs for a calendar)
- Use the PDF's color coding → define as `CATEGORY_COLORS` constant alongside types
- Add a `CategoryLegend` component if the PDF has a color legend

---

### Phase 5 — Verify & Checklist

Run the `post-new-page` hook.

Additional PDF-specific checks:
- [ ] All data points from PDF are transcribed (spot-check 3 random months/sections)
- [ ] Category colors match PDF's visual intent
- [ ] Content is accurate (no OCR errors from image rendering)

---

## Lessons from Compliance Calendar Implementation
- Monthly calendars → MUI Tabs with `variant="scrollable"` for mobile
- Color-coded categories → `Paper` with `borderLeft: "4px solid {color}"` + `Chip` badges
- Ordinal dates → helper function `toOrdinal(n)` for "7th", "11th", "31st"
- Same hero image can be reused across multiple pages (reduces asset requirements)
