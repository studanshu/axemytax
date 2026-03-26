# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start              # Dev server
npm run build          # Production build (CI=false — warnings don't fail)
npm test               # Run Jest tests
npm run analyze        # Bundle size analysis
npm run install:clean  # Clean reinstall
```

No separate lint script — ESLint runs via CRA during build/test. Prettier is configured but must be run manually.

## Environment

Copy `.env.example` to `.env.local`:
- `REACT_APP_GAS_URL` — Google Apps Script URL for form submissions
- `REACT_APP_GA_TRACKING_ID` — GA4 tracking ID

## Architecture

**AxeMyTax** is a tax consultancy website (React 18 + CRA + Material-UI 5 / Material Kit 2 theme).

### Data-Driven Content

All page content lives in `/src/assets/data/` as plain JS objects. Page components are generic templates that accept a `jsonData` prop — they have no hardcoded content. To add/update a service page, edit or add a data file, not the component.

```javascript
import DirectTaxationServiceJsonData from "assets/data/ServicePage/DirectTaxationService";
<ServicePage jsonData={DirectTaxationServiceJsonData} />
```

### Routing

Routes are defined in two layers:
- `/src/routes.tsx` — top-level routes (Landing, About, Blogs, Contact, plus 11 service categories as dropdowns)
- `/src/routes/*.tsx` — per-service route files (one file per service category, each listing sub-service pages)

URL pattern: `/services/{category}/{sub-service}` and `/blog/{category}/{relatedType}/{contentId}`.

`routeDict` is a programmatically generated dictionary built from `routes.tsx` for dynamic route lookups:
```javascript
routeDict["Services"]["Direct Taxation"]["target"]  // → route path
```

### Component Layers

- **`MK*` components** (`MKBox`, `MKButton`, `MKTypography`, etc.) — styled wrappers around MUI components that integrate with the Material Kit 2 theme. Use these instead of raw MUI components.
- **`/src/examples/`** — layout-level template components (Navbars, Footers, Cards, Breadcrumbs).
- **`/src/components/Custom/`** — app-specific reusable components (forms, section headers, FAQ).
- **`/src/pages/`** — page templates (`ServicePage`, `SubServicePage`, `BlogContent`, etc.) that compose examples and custom components.

### Context Providers

Three contexts track navigation state (used for analytics and form source attribution):
- `ServiceContext` — current service category
- `SubServiceContext` — current sub-service
- `PageContext` — current page name (About, Contact, etc.)

These are set in page components and consumed by form components to auto-populate submission metadata.

### Form System

Forms are fully config-driven:
1. JSON config in `/src/assets/data/Form/` defines fields (type, label, validation rules)
2. `CreateSchema.jsx` auto-generates a Zod schema from the config
3. `CustomForm.jsx` renders fields via `RenderTextField` / `RenderDropdown`
4. `formDto.jsx` transforms form values before submission (maps business types, budget ranges, etc.)
5. `useFormSubmit.jsx` uses React Query `useMutation` to POST to `REACT_APP_GAS_URL` in `no-cors` mode (response is always opaque — success is assumed if no network error)

### Analytics

Custom hooks in `/src/hooks/` wrap GA4 via `useAnalytics.ts`. Key hooks:
- `usePageTracking` — page view events
- `useFormTracking` — form interaction events
- `useBlogTracking` — blog read events
- `useInteractionTracking` — button/CTA clicks

### Path Aliases

Configured in both `tsconfig.json` and `.babelrc` (module-resolver):
```
assets/*      → src/assets/
components/*  → src/components/
pages/*       → src/pages/
api/*         → src/api/
providers/*   → src/providers/
routes/*      → src/routes/
```

Always use these aliases for imports, not relative paths.

### Deploy

CI/CD runs via GitHub Actions (`.github/workflows/deploy_vercel.yml`) deploying to Vercel on push to main.

---

## Project SDLC Knowledge Base

Accumulated skills, rules, and hooks are stored in `.claude/`. Always consult these before implementing anything — they encode proven patterns and prevent repeated mistakes.

### Skills (`.claude/skills/`)

Skills are hierarchical — higher layers depend on lower ones. Apply them in order.

```
L0 — Foundation (always read first)
  pdf-content-extraction      How to extract/read PDFs in this environment
  axemytax-pattern-discovery  This codebase's data, component, and routing patterns

L1 — Building blocks (depend on L0)
  data-config-layer           types.ts + entity files + index.ts aggregator pattern
  page-component-layer        index.tsx shell + Hero + Section + Contact structure

L2 — Composition (depend on L1)
  route-triple-registration   Updating routes.tsx + routeDict.ts + footer.routes.tsx together
  scalable-keyed-data         Year/version-keyed data for content that evolves over time

L3 — Full workflows (depend on L1 + L2)
  new-page-scaffold           Complete workflow: data → components → routes

L4 — End-to-end (depend on L0 + L3)
  pdf-to-page                 Convert a PDF document into a full page
```

**When to invoke a skill:**
| Task | Skill |
|------|-------|
| Reading a PDF | `pdf-content-extraction` |
| Starting any new work | `axemytax-pattern-discovery` |
| Adding a data config | `data-config-layer` |
| Creating page components | `page-component-layer` |
| Adding any route | `route-triple-registration` |
| Content that updates yearly | `scalable-keyed-data` |
| Building a complete new page | `new-page-scaffold` |
| PDF → page end-to-end | `pdf-to-page` |

### Rules (`.claude/rules/`)

Hard constraints to enforce in every session:

| Rule | Summary |
|------|---------|
| `data-separation` | No hardcoded content in components — everything from `jsonData` prop |
| `page-structure` | Every page: TopLayout + lazy sections + Contact + Footer |
| `route-consistency` | Always update all 3 route files: routes.tsx + routeDict.ts + footer.routes.tsx |
| `mk-components` | Use MKBox/MKTypography/MKButton — not raw MUI Box/Typography/Button |
| `scalable-content` | Time-varying content → one file per variant, append-only historical files |

### Hooks (`.claude/hooks/`)

Checklists to run at key lifecycle points:

| Hook | When |
|------|------|
| `post-new-page` | After completing any new page scaffold |
| `pre-data-update` | Before modifying any file in `src/assets/data/` |
