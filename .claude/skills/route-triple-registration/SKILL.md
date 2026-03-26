# SKILL: route-triple-registration

**Layer:** L2
**Depends on:** `axemytax-pattern-discovery`
**Trigger:** Adding any new route/page to the site. Always update all 3 files atomically.

---

## The 3-File Rule
Every new page requires changes to **exactly 3 files**. Missing any one breaks either routing, link generation, or the footer.

| File | Purpose | Contains |
|------|---------|---------|
| `src/routes.tsx` | React Router + Navbar | Component JSX, icons |
| `src/routeDict.ts` | URL lookup dictionary | Structure only — no components |
| `src/footer.routes.tsx` | Footer menu links | Uses `routeDict` for hrefs |

---

## `routes.tsx` — Adding a Simple Page (no dropdown)

```tsx
// 1. Add icon import
import NewPageIcon from "@mui/icons-material/SomeIcon";

// 2. Add data import
import { NewPageJsonData } from "assets/data/NewPage/index";

// 3. Add lazy import (for pages with async deps)
const NewPage = lazy(() => import("pages/NewPage/index"));

// 4. Add to routes array (position determines navbar order)
{
  name: "New Page",
  icon: <NewPageIcon />,
  route: "/new-page",
  component: (
    <PageContextProvider dict={{ name: "NewPage" }}>
      <Suspense fallback={<></>}>
        <NewPage jsonData={NewPageJsonData} />
      </Suspense>
    </PageContextProvider>
  ),
},
```

## `routes.tsx` — Adding a Dropdown (multiple sub-routes)

```tsx
{
  name: "Feature",
  icon: <FeatureIcon />,
  route: "",          // ← empty string = no direct link, dropdown only
  collapse: [
    {
      name: "Variant A",
      route: "/feature/variant-a",
      component: (
        <PageContextProvider dict={{ name: "Feature" }}>
          <Suspense fallback={<></>}>
            <FeaturePage jsonData={FeatureVariantA} />
          </Suspense>
        </PageContextProvider>
      ),
    },
    // { name: "Variant B", route: "/feature/variant-b", component: ... }
  ],
},
```

---

## `routeDict.ts` — Always Mirror routes.tsx Structure (without components)

```typescript
// Simple page:
{ name: "New Page", route: "/new-page" },

// Dropdown:
{
  name: "Feature",
  route: "",         // same empty string as routes.tsx
  collapse: [
    { name: "Variant A", route: "/feature/variant-a" },
  ],
},
```

**How `routeDict` resolves:**
- Simple page: `routeDict["New Page"]` → `"/new-page"`
- Dropdown child: `routeDict["Feature"]["Variant A"]` → `"/feature/variant-a"`
- Dropdown with target: if parent also has a non-empty `route`, it becomes `routeDict["Feature"]["target"]`

---

## `footer.routes.tsx` — Add Links Using routeDict

```typescript
// Simple page:
{ name: "new page", href: routeDict["New Page"] as string },

// Dropdown child:
{ name: "feature variant a", href: (routeDict["Feature"] as any)["Variant A"] as string },
```

Add to the appropriate menu (`"company"`, `"help & support"`, `"Services"`, `"legal"`).

---

## Checklist (run mentally after every route change)
- [ ] `routes.tsx` — route added with correct component, icon, PageContextProvider
- [ ] `routeDict.ts` — same structure as routes.tsx (no components)
- [ ] `footer.routes.tsx` — link added to correct menu section
- [ ] Navbar order makes sense (routes array order = navbar left→right)
- [ ] `route: ""` used for dropdown parents (not a real URL)
