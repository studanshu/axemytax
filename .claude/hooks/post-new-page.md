# HOOK: post-new-page

**Trigger:** After completing any new page scaffold (components + data + routes).
**Type:** Verification checklist — run manually after `new-page-scaffold` skill completes.

---

## Checklist

### Data Layer
- [ ] `types.ts` — all interfaces exported, no data/imports
- [ ] Entity file (e.g., `2025.ts`) — named export, correct shape per types
- [ ] `index.ts` — exports composed config (Hero + Data + Contact)
- [ ] `DefaultContactJson` used for Contact unless a custom form was needed

### Page Components
- [ ] `index.tsx` — all sections lazy-loaded, footer rendered with `<MKBox pt={2} px={1}>`
- [ ] `Hero.tsx` — starts with `<TopLayout />`, uses `py={24} px={4}` spacing
- [ ] Main section — uses `<MKBox component="section" py={8}>` wrapper
- [ ] `Contact.tsx` — wraps `<InlineForm>` in `<Container sx={{ my: 24 }}>`
- [ ] All components use `MKBox`/`MKTypography` (not raw MUI `Box`/`Typography`)

### Route Registration
- [ ] `routes.tsx` — route added, `PageContextProvider` wrapping, icon imported
- [ ] `routeDict.ts` — mirrors routes.tsx structure (no JSX, no components)
- [ ] `footer.routes.tsx` — link added to correct menu, uses `routeDict` for href

### Navigation Sanity
- [ ] Navbar order makes sense (check position in `routes` array)
- [ ] Dropdown parent uses `route: ""` (not a real URL)
- [ ] Footer link points to the correct route

### Build Check
```bash
# Run from project root (requires node_modules installed)
npm run build

# Or type-check only
node_modules/.bin/react-scripts build --dry 2>&1 | head -30
```

---

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| `TopLayout` missing in Hero | Add `<TopLayout />` as first child |
| Footer missing from shell | Add `<MKBox pt={2} px={1}><DefaultFooter /></MKBox>` |
| `routeDict.ts` not updated | routeDict will return undefined for the new page |
| Footer link broken | Check the `routeDict` key path matches the route name exactly |
| `PageContextProvider` missing | Analytics won't track the page correctly |
| Hero image hardcoded in component | Move image import to data config file |
