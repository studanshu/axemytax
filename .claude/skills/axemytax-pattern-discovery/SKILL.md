# SKILL: axemytax-pattern-discovery

**Layer:** L0 (Foundation — no dependencies)
**Trigger:** Starting any new feature, page, or component in this codebase. Always run this first.

---

## What This Skill Teaches
The AxeMyTax codebase has strict, repeating patterns. Understanding them before coding prevents misalignment.

## Key Patterns to Internalize

### 1. Data-Driven Architecture
**Rule:** Components have zero hardcoded content. All text, images, and config live in `/src/assets/data/`.

```
src/assets/data/
  [PageName]/
    types.ts           ← TypeScript interfaces
    [entity].ts        ← actual data (one file per entity/year)
    index.ts           ← aggregator that composes and exports
```

### 2. Page Component Structure
Every page = **5 parts**:
```
TopLayout              ← Navbar (sticky) + WhatsApp floating button
  [Hero].tsx           ← TopLayout + SectionHeader + image, py={24}
  [MainSection].tsx    ← core content with state if needed
  [Contact].tsx        ← InlineForm wrapping DefaultContactJson
DefaultFooter          ← always inside MKBox pt={2} px={1}
```
All sections are lazy-loaded via `React.lazy() + Suspense`.

### 3. Component Hierarchy
```
MK* components     ← always use these, NOT raw MUI
  MKBox            → Box (theme-aware)
  MKTypography     → Typography (theme-aware)
  MKButton         → Button (theme-aware)

examples/          ← layout templates (Navbars, Footers, Cards)
components/Custom/ ← app-specific (SectionHeader, InlineForm, etc.)
pages/             ← page-level compositions
```

### 4. Route Registration (3-file system)
Every new route touches exactly 3 files:
- `src/routes.tsx` — component + icon + structure
- `src/routeDict.ts` — structure only (no components, used for links)
- `src/footer.routes.tsx` — footer menu links via `routeDict`

### 5. Context Providers
Page-level context identifies the current page for analytics:
```tsx
<PageContextProvider dict={{ name: "PageName" }}>
  <YourPage jsonData={...} />
</PageContextProvider>
```

### 6. Key Reusable Components
| Component | Path | Purpose |
|-----------|------|---------|
| `TopLayout` | `pages/utils/TopLayout.tsx` | Navbar + WhatsApp button |
| `SectionHeader` | `components/Custom/SectionHeader.tsx` | caption + title display |
| `InlineForm` | `components/Custom/InlineForm.tsx` | Contact form + image layout |
| `DefaultContactJson` | `assets/data/SubServicePage/DefaultContactJson.js` | Standard contact form config |
| `DefaultFooter` | `examples/Footers/DefaultFooter` | Footer |

## Quick Discovery Commands
```bash
# Find all data config files for a page
find src/assets/data/[PageName] -type f

# Find existing page patterns
ls src/pages/

# Understand a route file
cat src/routes.tsx
cat src/routeDict.ts
```
