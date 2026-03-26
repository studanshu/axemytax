# SKILL: data-config-layer

**Layer:** L1
**Depends on:** `axemytax-pattern-discovery`
**Trigger:** Creating data config files for a new page, section, or feature.

---

## The 3-File Pattern
Every data feature creates exactly 3 file types:

```
src/assets/data/[FeatureName]/
  types.ts          ← TypeScript interfaces only (no data)
  [entity].ts       ← actual data (one file per entity, e.g., 2025.ts, directTaxation.ts)
  index.ts          ← aggregator: imports entity files, exports composed config objects
```

## Step-by-Step

### 1. Create `types.ts`
Define all interfaces. Export everything. No data here.
```typescript
export type CategoryType = "A" | "B" | "C";

export interface ItemData {
  id: string;
  category: CategoryType;
  label: string;
}

export interface FeatureJsonData {
  Hero: HeroJson;
  Items: ItemData[];
  Contact: any;
}
```

### 2. Create entity data file(s) (e.g., `2025.ts`, `directTaxation.ts`)
Import the types. Export named constants (not default).
```typescript
import { FeatureData } from "./types";

export const data2025: FeatureData = {
  year: 2025,
  items: [
    { id: "1", category: "A", label: "First Item" },
  ],
};
```

### 3. Create `index.ts` aggregator
Compose the full config objects that page components consume. One export per variant.
```typescript
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";
import { DefaultContactJson } from "assets/data/SubServicePage/DefaultContactJson";
import { data2025 } from "./2025";
import { FeatureJsonData } from "./types";

const heroJson = { caption: "...", title: "...", description: "...", image: HeroImage };

export const Feature2025: FeatureJsonData = {
  Hero: heroJson,
  Items: data2025,
  Contact: DefaultContactJson,
};
```

## Rules
- **Never import images in `types.ts`** — types only, no assets
- **Named exports in entity files** — `export const data2025`, not `export default`
- **Default export in `index.ts`** is fine for single-variant; named exports for multi-variant (e.g., per year)
- **Always reuse `DefaultContactJson`** from `assets/data/SubServicePage/DefaultContactJson.js` for the Contact section unless the feature needs a custom form
- **Always reuse the hero image** from an existing service unless a dedicated one is created

## Scalability Pattern
When the feature evolves over time (e.g., yearly compliance data):
- Each year = one entity file: `2025.ts`, `2026.ts`
- `index.ts` exports: `Feature2025`, `Feature2026`
- Components receive single-entity data — they don't know about other variants
- See `scalable-keyed-data` skill for the full pattern
