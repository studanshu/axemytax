# RULE: Scalable Content Pattern

**Applies to:** Any content that changes over time (annually, quarterly, by version).

---

When content will be updated in future iterations, design for evolution from day one. The pattern isolates each variant so future additions require only new files — no component changes.

## The Pattern at a Glance

```
[Feature]/
  types.ts          ← stable interfaces (never changes across versions)
  2025.ts           ← variant A data (append-only after creation)
  2026.ts           ← variant B data (added when needed)
  index.ts          ← exports one config per variant (grows by one line per new variant)
```

Components receive one variant. Routes determine which variant is shown.

## Data File Rules
- **Each variant file is append-only** — historical data is never modified
- **Consistent shape** — each variant file exports data of the same type defined in `types.ts`
- **Named exports** — `export const data2025`, not `export default`
- **Shared config in aggregator** — hero text, contact form, colors defined once in `index.ts`

## Route/Navigation Rules
- Each variant gets its own route: `/feature/2025`, `/feature/2026`
- Navbar shows a dropdown — one item per variant
- Footer always links to the **latest** variant
- Components are keyed-variant-agnostic — they don't know which year they're showing

## Component Rules
- Components accept a single variant's data (e.g., `YearData`) — not an array of all years
- No year-selector state inside the component — the URL is the year selector
- Components automatically work for any variant without changes

## Adding a New Variant (e.g., 2026 Compliance Calendar)
1. Create `2026.ts` — copy structure from `2025.ts`, update data
2. `index.ts` — add one `export const Feature2026 = { Hero: heroJson, Data: data2026, Contact: DefaultContactJson }`
3. `routes.tsx` — add one collapse item: `{ name: "2026", route: "/feature/2026", component: ... }`
4. `routeDict.ts` — add one entry: `{ name: "2026", route: "/feature/2026" }`
5. `footer.routes.tsx` — update link to point to "2026"

**No component files change.**

## Why Not a Single File with All Years?
- Git blame is clean — each year's data is one commit
- No merge conflicts when two developers add different years
- Old data can't be accidentally modified when adding new years
- Bundle splitting works better — each year's data is a separate chunk
