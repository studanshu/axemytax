# RULE: Data Separation

**Applies to:** All components and pages.

---

Components in this project contain **zero hardcoded content**. All text, image paths, form configs, and structured data live exclusively in `src/assets/data/`.

## What Goes in Data Files
- Page titles, captions, descriptions
- Image imports
- Form field definitions
- Lists of items (services, deadlines, team members, clients)
- Category definitions and color mappings
- Any string that might change or be reused

## What Goes in Components
- Layout (Grid, Box, Container)
- Conditional rendering logic
- State management
- Event handlers
- Style/theme constants that are truly visual (not content)

## Violations to Avoid
```tsx
// ❌ WRONG — hardcoded in component
<SectionHeader caption="Stay ahead of deadlines" title="Compliance Calendar" />

// ✅ CORRECT — from jsonData prop
<SectionHeader caption={jsonData.caption} title={jsonData.title} />
```

```tsx
// ❌ WRONG — image imported in component
import heroImg from "assets/images/...";

// ✅ CORRECT — image path comes from data config
<LazyLoadImage src={jsonData.image} />
```

## Why
- Content editors can update data files without touching component logic
- Components are reusable with different content
- Single source of truth for all text/assets
