# RULE: MK* Components Over Raw MUI

**Applies to:** All UI code in this project.

---

This project uses Material Kit 2 React theme. Raw MUI components (`Box`, `Typography`, `Button`) don't inherit the custom theme's color palette, typography scale, or design tokens. Always use the MK* wrappers.

## Component Map

| Use This (MK*) | Instead Of | Located At |
|----------------|-----------|-----------|
| `MKBox` | `Box` | `components/MKBox` |
| `MKTypography` | `Typography` | `components/MKTypography` |
| `MKButton` | `Button` | `components/MKButton` |
| `MKInput` | `TextField` | `components/MKInput` |
| `MKBadge` | `Badge` | `components/MKBadge` |

## When Raw MUI is Acceptable
- `Container`, `Grid`, `Paper`, `Chip`, `Tabs`, `Tab`, `CircularProgress`, `Pagination`, `Stack` — these have no MK* equivalent and are used with `sx` props directly
- Layout-only components (`Grid`, `Container`) that don't render visible text or buttons

## Theme Colors in sx Props
Use theme-aware values:
```tsx
// ✅ Theme-aware
<MKTypography variant="h2" color="black">Title</MKTypography>
<MKTypography variant="body1" color="text">Body</MKTypography>
<MKTypography variant="caption" color="info">Caption</MKTypography>

// ❌ Avoid hardcoded colors in MKTypography
<MKTypography sx={{ color: "#333" }}>...</MKTypography>
```

For non-MK components (like `Paper`), use `sx` with explicit values:
```tsx
<Paper sx={{ borderLeft: `4px solid ${CATEGORY_COLORS[cat]}` }}>
```

## Typography Variants in This Project
| Variant | Usage |
|---------|-------|
| `h2` | Page/section main title |
| `h3` | Section title |
| `h5` | Card headers, date labels |
| `body1` | Paragraph text |
| `body2` | Card descriptions, secondary text |
| `caption` | Section captions (in info color) |
| `button` | Button labels |
