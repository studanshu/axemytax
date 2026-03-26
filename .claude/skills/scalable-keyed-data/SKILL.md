# SKILL: scalable-keyed-data

**Layer:** L2
**Depends on:** `data-config-layer`
**Trigger:** Creating content that will evolve over time (yearly compliance data, versioned content, time-series data).

---

## The Pattern
When content changes periodically (annually, quarterly, by version), isolate each variant in its own file. The aggregator exports one composed object per variant. Components are oblivious to other variants — they receive exactly what they need.

```
src/assets/data/[Feature]/
  types.ts           ← shared interfaces (YearData, ItemData, etc.)
  2025.ts            ← export const data2025: YearData = { ... }
  2026.ts            ← export const data2026: YearData = { ... }
  index.ts           ← export const Feature2025, Feature2026
```

---

## `index.ts` Aggregator Pattern

The aggregator holds shared config (hero, contact) and wires it with each year's data:

```typescript
import HeroImage from "assets/images/...";
import { DefaultContactJson } from "assets/data/SubServicePage/DefaultContactJson";
import { data2025 } from "./2025";
// import { data2026 } from "./2026";    ← uncomment when ready
import { FeatureJsonData } from "./types";

const heroJson = {
  caption: "...",
  title: "...",
  description: "...",
  image: HeroImage,
};

export const Feature2025: FeatureJsonData = {
  Hero: heroJson,
  Data: data2025,
  Contact: DefaultContactJson,
};

// export const Feature2026: FeatureJsonData = {
//   Hero: heroJson,
//   Data: data2026,
//   Contact: DefaultContactJson,
// };
```

---

## Route Structure for Keyed Variants

Each key (year) = its own route. The navbar shows a dropdown per key.

**`routes.tsx`:**
```tsx
{
  name: "Feature",
  icon: <FeatureIcon />,
  route: "",    // dropdown only — no direct page
  collapse: [
    {
      name: "2025",
      route: "/feature/2025",
      component: (
        <PageContextProvider dict={{ name: "Feature" }}>
          <Suspense fallback={<></>}>
            <FeaturePage jsonData={Feature2025} />
          </Suspense>
        </PageContextProvider>
      ),
    },
    // { name: "2026", route: "/feature/2026", component: <FeaturePage jsonData={Feature2026} /> }
  ],
},
```

**`routeDict.ts`:**
```typescript
{
  name: "Feature",
  route: "",
  collapse: [
    { name: "2025", route: "/feature/2025" },
    // { name: "2026", route: "/feature/2026" },
  ],
},
```

**`footer.routes.tsx`** — always link to the latest key:
```typescript
{ name: "feature", href: (routeDict["Feature"] as any)["2025"] as string },
```
When 2026 is added, update footer to point to "2026".

---

## Adding a New Key (e.g., 2026)

1. Create `src/assets/data/[Feature]/2026.ts` — same shape as `2025.ts`, new data
2. In `index.ts` — uncomment `import { data2026 }` and `export const Feature2026`
3. In `routes.tsx` — uncomment the "2026" collapse entry (or add new one)
4. In `routeDict.ts` — uncomment the "2026" entry
5. Update footer link to point to "2026"

**Zero component changes needed** — all components are key-agnostic.

---

## Design Principles
- **Each variant file is append-only** — never modify historical data files
- **Component receives one variant** — the component never knows about other years
- **Dropdown is the navigation** — URL is the source of truth for which year is shown
- **Shared config in aggregator** — hero, contact, colors defined once
