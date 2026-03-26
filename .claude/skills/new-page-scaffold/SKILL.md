# SKILL: new-page-scaffold

**Layer:** L3
**Depends on:** `data-config-layer`, `page-component-layer`, `route-triple-registration`
**Trigger:** "Add a new page", "Create a page for X", "We need a page that shows Y".

---

## Execution Order

Always follow this order — later steps depend on earlier ones.

```
1. Data Layer        → types.ts, entity files, index.ts
2. Page Components   → index.tsx, Hero.tsx, [Section].tsx, Contact.tsx
3. Route Registration → routes.tsx, routeDict.ts, footer.routes.tsx
```

---

## Step 1 — Data Layer

Follow `data-config-layer` skill. Key decisions:
- What are the TypeScript types for this content?
- Does content evolve over time? → use `scalable-keyed-data` pattern
- What hero image to reuse? (check `src/assets/images/SubServicePage/DirectTaxation/hero.png` as default)
- Always end with `Contact: DefaultContactJson` in the composed config

**Output:**
```
src/assets/data/[PageName]/
  types.ts
  [entity].ts
  index.ts
```

---

## Step 2 — Page Components

Follow `page-component-layer` skill. Key decisions:
- What state does the main section need? (tabs, filters, selected items)
- Is the main section purely display or interactive?
- Are there multiple distinct sections? (add one `.tsx` file per section)

**Output:**
```
src/pages/[PageName]/
  index.tsx        ← shell
  Hero.tsx
  [MainSection].tsx
  Contact.tsx
```

---

## Step 3 — Route Registration

Follow `route-triple-registration` skill. Key decisions:
- Is this a simple page (`/path`) or a keyed dropdown (`/path/2025`, `/path/2026`)?
- Which MUI icon fits? (import from `@mui/icons-material/`)
- Which footer menu does it belong to? (company / Services / help & support / legal)
- What navbar position? (in `routes` array, order = display order)

**Output:** 3 files modified — `routes.tsx`, `routeDict.ts`, `footer.routes.tsx`

---

## Quick Reference — PageContextProvider Name
Use a camelCase version of the page: `About`, `BlogOverview`, `ComplianceCalendar`, `Contact`. This flows into analytics events.

## Quick Reference — Which Hero Image to Use
| Scenario | Image path |
|----------|-----------|
| Default (no dedicated image) | `assets/images/SubServicePage/DirectTaxation/hero.png` |
| Tax-related | `assets/images/SubServicePage/DirectTaxation/hero.png` |
| Service-specific | `assets/images/ServicePage/[ServiceName]/hero.png` |

## Verification After Scaffold
Run the `post-new-page` hook (`.claude/hooks/post-new-page.md`).
