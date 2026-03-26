# RULE: Route Consistency (Triple-File Update)

**Applies to:** Every change that adds, removes, or renames a route.

---

Routes are maintained across **3 files simultaneously**. Updating only one causes broken links, missing navbar entries, or dead footer links.

## The 3 Files — Always Update Together

| File | What It Controls |
|------|----------------|
| `src/routes.tsx` | React Router + Navbar display + page components |
| `src/routeDict.ts` | URL lookup dictionary used by footer and cross-links |
| `src/footer.routes.tsx` | Footer menu links (uses `routeDict` for hrefs) |

## Update Checklist
- [ ] `routes.tsx` — route entry added with correct name, icon, route, component
- [ ] `routeDict.ts` — mirrors the structure of `routes.tsx` (no components, no JSX)
- [ ] `footer.routes.tsx` — link added to the correct menu section via `routeDict`

## routeDict Resolution Rules
```typescript
// Simple page → routeDict["Page Name"] = "/path"
routeDict["About"]  // → "/about"

// Dropdown with children only (route: ""):
routeDict["Feature"]["2025"]  // → "/feature/2025"

// Dropdown with parent route AND children:
routeDict["Feature"]["target"]  // → "/feature"
routeDict["Feature"]["2025"]    // → "/feature/2025"
```

## Dropdown Parents Use `route: ""`
```typescript
// routes.tsx and routeDict.ts — dropdown parent
{ name: "Feature", route: "", collapse: [...] }
```
Empty string = no direct URL for the parent. Navbar shows it as hover-only dropdown.

## Renaming a Route
1. Update `name` in all 3 files
2. Update `routeDict` key (it uses `name` as the key)
3. Search footer.routes.tsx for any hardcoded references
4. Check if any component references `routeDict["Old Name"]`

## Why Separate routeDict.ts?
`footer.routes.tsx` imports `routeDict`. If it imported `routes.tsx` directly, it would create a circular dependency (routes.tsx → pages → components → footer.routes → routes). `routeDict.ts` breaks the cycle by containing only data (no JSX).
