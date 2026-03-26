# RULE: Page Structure

**Applies to:** Every page component in `src/pages/`.

---

Every page follows this exact structure. Deviation breaks consistency in navbar, analytics, and footer rendering.

## Required Structure

```tsx
// 1. Page shell (index.tsx) — lazy-loads sections
const Hero = lazy(() => import("./Hero"));
const [Section] = lazy(() => import("./[Section]"));
const Contact = lazy(() => import("./Contact"));

return (
  <>
    <Suspense fallback={<></>}><Hero jsonData={jsonData.Hero} /></Suspense>
    <Suspense fallback={<></>}><[Section] ... /></Suspense>
    <Suspense fallback={<></>}><Contact jsonData={jsonData.Contact} /></Suspense>
    <MKBox pt={2} px={1}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </>
);
```

```tsx
// 2. Hero section — ALWAYS starts with TopLayout
const Hero = ({ jsonData }) => (
  <>
    <TopLayout />   {/* ← NEVER omit this */}
    <Container>
      <Box py={24} px={4}>...</Box>
    </Container>
  </>
);
```

```tsx
// 3. Contact section — ALWAYS uses InlineForm
const Contact = ({ jsonData }) => (
  <Container sx={{ my: 24 }}>
    <Box px={4}>
      <InlineForm FormJson={jsonData} flexDirection="row" />
    </Box>
  </Container>
);
```

## Spacing Standards
| Element | Spacing |
|---------|---------|
| Hero section | `py={24} px={4}` |
| Content sections | `py={8}` |
| Contact section | `my={24}` |
| Footer wrapper | `pt={2} px={1}` |

## Context Provider
Every page registered in routes.tsx must be wrapped in `PageContextProvider`:
```tsx
<PageContextProvider dict={{ name: "PageName" }}>
  <YourPage jsonData={...} />
</PageContextProvider>
```
The `name` value flows into analytics tracking.

## Why
- `TopLayout` renders the sticky navbar and WhatsApp button — omitting it leaves pages without navigation
- Lazy loading prevents large bundle sizes
- Consistent spacing creates visual cohesion across pages
