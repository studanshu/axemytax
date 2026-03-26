# HOOK: pre-data-update

**Trigger:** Before modifying any file in `src/assets/data/`.
**Type:** Pre-flight checklist — run before making data changes.

---

## Checklist

### Understand Impact
- [ ] Which pages/components consume this data? (search for the data import)
- [ ] Is this data used by `routeDict`? (changes to names → update `routeDict` keys)
- [ ] Is this a scalable-keyed data file? → **never modify historical files** (e.g., `2025.ts`). Add a new file instead.

### Type Safety
- [ ] Do interface changes in `types.ts` require updates to entity files?
- [ ] Are new required fields added? (will cause TypeScript errors in entity files)
- [ ] Are fields renamed? (search for all usages in components)

### Aggregator Sync
- [ ] If adding a new entity file → add the export to `index.ts`
- [ ] If removing an entity file → remove the export from `index.ts` and the route in `routes.tsx`

### Quick Impact Search
```bash
# Find all files that import from the data directory
grep -r "assets/data/[FeatureName]" src/ --include="*.tsx" --include="*.ts" -l

# Find all usages of a specific exported constant
grep -r "Feature2025" src/ --include="*.tsx" --include="*.ts"
```

---

## Data Modification Rules

| File | Can It Be Modified? |
|------|-------------------|
| `types.ts` | Yes — but check all entity files for compatibility |
| `index.ts` (aggregator) | Yes — adding new exports is always safe |
| Historical entity file (e.g., `2025.ts`) | **No** — treat as append-only after release |
| Current/active entity file (in-progress) | Yes — until it goes live |

## Why Historical Files Are Immutable
- SEO and bookmarks expect stable content at `/feature/2025`
- Analytics comparisons assume consistent historical data
- Git blame stays clean (one commit per year's data)
