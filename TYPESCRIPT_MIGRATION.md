# TypeScript Migration Plan - AxeMyTax

**Status:** In Progress (57% Complete - 8 of 14 phases)  
**Started:** January 11, 2026  
**Target Completion:** TBD

---

## Phase 1: Setup & Configuration ⚙️

### 1.1 Install TypeScript Dependencies
- [x] Install TypeScript (`typescript`)
- [x] Install type definitions for React (`@types/react`, `@types/react-dom`)
- [x] Install type definitions for React Router (`@types/react-router-dom`)
- [x] Install type definitions for Node (`@types/node`)
- [x] Install type definitions for Jest (`@types/jest`)
- [x] Install type definitions for Material-UI (included in @mui packages)
- [x] Install additional type packages as needed

### 1.2 Create TypeScript Configuration
- [x] Create `tsconfig.json` with appropriate settings
- [x] Configure `include` and `exclude` paths
- [x] Set up path aliases (matching `jsconfig.json`)
- [x] Configure strict mode settings
- [x] Set up JSX configuration for React

### 1.3 Update Build Configuration
- [x] Verify Create React App supports TypeScript (already included in react-scripts 5.0.1)
- [x] Update `package.json` scripts if needed
- [x] Test that build process works with TS files

---

## Phase 2: Type Definitions & Interfaces 📝

### 2.1 Create Core Type Definitions
- [x] Create `src/types/` directory
- [x] Define theme types (`theme.types.ts`)
- [x] Define route types (`route.types.ts`)
- [x] Define component prop types (`component.types.ts`)
- [x] Define API/form types (`api.types.ts`)
- [x] Define context types (`context.types.ts`)

### 2.2 Material-UI Theme Types
- [x] Create type definitions for custom theme extensions
- [x] Type the Material Kit 2 React theme structure
- [x] Create types for theme functions (pxToRem, rgba, etc.)

---

## Phase 3: Utility & Helper Migration 🔧

### 3.1 Theme Functions (Priority: High - used everywhere)
- [x] `src/assets/theme/functions/boxShadow.js` → `.ts`
- [x] `src/assets/theme/functions/hexToRgb.js` → `.ts`
- [x] `src/assets/theme/functions/linearGradient.js` → `.ts`
- [x] `src/assets/theme/functions/pxToRem.js` → `.ts`
- [x] `src/assets/theme/functions/rgba.js` → `.ts`
- [x] `src/assets/theme/functions/gradientChartLine.js` → `.ts`

### 3.2 Theme Base Files
- [x] `src/assets/theme/base/borders.js` → `.ts`
- [x] `src/assets/theme/base/boxShadows.js` → `.ts`
- [x] `src/assets/theme/base/breakpoints.js` → `.ts`
- [x] `src/assets/theme/base/colors.js` → `.ts`
- [x] `src/assets/theme/base/globals.js` → `.ts`
- [x] `src/assets/theme/base/typography.js` → `.ts`

### 3.3 Theme Component Overrides (54 files)

**Status:** ✅ COMPLETE

**Note:** All component override files have been migrated to TypeScript with proper MUI type imports.

#### Root Level Components (15 files)
- [x] `src/assets/theme/components/appBar.js` → `.ts`
- [x] `src/assets/theme/components/avatar.js` → `.ts`
- [x] `src/assets/theme/components/breadcrumbs.js` → `.ts`
- [x] `src/assets/theme/components/buttonBase.js` → `.ts`
- [x] `src/assets/theme/components/container.js` → `.ts`
- [x] `src/assets/theme/components/divider.js` → `.ts`
- [x] `src/assets/theme/components/flatpickr.js` → `.ts`
- [x] `src/assets/theme/components/icon.js` → `.ts`
- [x] `src/assets/theme/components/iconButton.js` → `.ts`
- [x] `src/assets/theme/components/linearProgress.js` → `.ts`
- [x] `src/assets/theme/components/link.js` → `.ts`
- [x] `src/assets/theme/components/popover.js` → `.ts`
- [x] `src/assets/theme/components/slider.js` → `.ts`
- [x] `src/assets/theme/components/svgIcon.js` → `.ts`
- [x] `src/assets/theme/components/tooltip.js` → `.ts`

#### Button Components (5 files)
- [x] `src/assets/theme/components/button/index.js` → `.ts`
- [x] `src/assets/theme/components/button/contained.js` → `.ts`
- [x] `src/assets/theme/components/button/outlined.js` → `.ts`
- [x] `src/assets/theme/components/button/root.js` → `.ts`
- [x] `src/assets/theme/components/button/text.js` → `.ts`

#### Card Components (3 files)
- [x] `src/assets/theme/components/card/index.js` → `.ts`
- [x] `src/assets/theme/components/card/cardContent.js` → `.ts`
- [x] `src/assets/theme/components/card/cardMedia.js` → `.ts`

#### Dialog Components (5 files)
- [x] `src/assets/theme/components/dialog/index.js` → `.ts`
- [x] `src/assets/theme/components/dialog/dialogActions.js` → `.ts`
- [x] `src/assets/theme/components/dialog/dialogContent.js` → `.ts`
- [x] `src/assets/theme/components/dialog/dialogContentText.js` → `.ts`
- [x] `src/assets/theme/components/dialog/dialogTitle.js` → `.ts`

#### Form Components (11 files)
- [x] `src/assets/theme/components/form/autocomplete.js` → `.ts`
- [x] `src/assets/theme/components/form/checkbox.js` → `.ts`
- [x] `src/assets/theme/components/form/formControlLabel.js` → `.ts`
- [x] `src/assets/theme/components/form/formLabel.js` → `.ts`
- [x] `src/assets/theme/components/form/input.js` → `.ts`
- [x] `src/assets/theme/components/form/inputLabel.js` → `.ts`
- [x] `src/assets/theme/components/form/inputOutlined.js` → `.ts`
- [x] `src/assets/theme/components/form/radio.js` → `.ts`
- [x] `src/assets/theme/components/form/select.js` → `.ts`
- [x] `src/assets/theme/components/form/switchButton.js` → `.ts`
- [x] `src/assets/theme/components/form/textField.js` → `.ts`

#### List Components (3 files)
- [x] `src/assets/theme/components/list/index.js` → `.ts`
- [x] `src/assets/theme/components/list/listItem.js` → `.ts`
- [x] `src/assets/theme/components/list/listItemText.js` → `.ts`

#### Menu Components (2 files)
- [x] `src/assets/theme/components/menu/index.js` → `.ts`
- [x] `src/assets/theme/components/menu/menuItem.js` → `.ts`

#### Stepper Components (5 files)
- [x] `src/assets/theme/components/stepper/index.js` → `.ts`
- [x] `src/assets/theme/components/stepper/step.js` → `.ts`
- [x] `src/assets/theme/components/stepper/stepConnector.js` → `.ts`
- [x] `src/assets/theme/components/stepper/stepIcon.js` → `.ts`
- [x] `src/assets/theme/components/stepper/stepLabel.js` → `.ts`

#### Table Components (3 files)
- [x] `src/assets/theme/components/table/tableCell.js` → `.ts`
- [x] `src/assets/theme/components/table/tableContainer.js` → `.ts`
- [x] `src/assets/theme/components/table/tableHead.js` → `.ts`

#### Tabs Components (2 files)
- [x] `src/assets/theme/components/tabs/index.js` → `.ts`
- [x] `src/assets/theme/components/tabs/tab.js` → `.ts`

**Total: 54/54 files migrated** ✅

### 3.4 Main Theme File
- [x] `src/assets/theme/index.js` → `.ts`

---

## Phase 4: API Layer Migration 🌐 ✅

### 4.1 API Constants & Configuration
- [x] `src/api/constant.jsx` → `.ts`
- [x] Create API response types
- [x] Create API request types

### 4.2 Form API
- [x] `src/api/form/formDto.jsx` → `.ts`
- [x] `src/api/form/httpRequests.jsx` → `.ts`
- [x] `src/api/form/useFromSubmit.jsx` → `.tsx`
- [x] Type form data transformations
- [x] Type API responses

---

## Phase 5: Context Providers Migration 🔄 ✅

### 5.1 Context Files
- [x] `src/providers/Context.js` → `.ts`
- [x] `src/providers/PageContextProvider.jsx` → `.tsx`
- [x] `src/providers/ServiceContextProvider.jsx` → `.tsx`
- [x] `src/providers/SubServiceContextProvider.jsx` → `.tsx`
- [x] Create context type definitions
- [x] Type context values and provider props

---

## Phase 6: MK* Components Migration 🎨 ✅

### 6.1 Core MK Components (High Priority - used everywhere) ✅
- [x] `src/components/MKBox/` → TypeScript (index.tsx + MKBoxRoot.ts)
- [x] `src/components/MKTypography/` → TypeScript (index.tsx + MKTypographyRoot.ts)
- [x] `src/components/MKButton/` → TypeScript (index.tsx + MKButtonRoot.ts)
- [x] `src/components/MKInput/` → TypeScript (index.tsx + MKInputRoot.ts)

### 6.2 Additional MK Components ✅
- [x] `src/components/MKAlert/` → TypeScript (index.tsx + MKAlertRoot.ts + MKAlertCloseIcon.ts)
- [x] `src/components/MKAvatar/` → TypeScript (index.tsx + MKAvatarRoot.ts)
- [x] `src/components/MKBadge/` → TypeScript (index.tsx + MKBadgeRoot.ts)
- [x] `src/components/MKDatePicker/` → TypeScript (index.tsx)
- [x] `src/components/MKPagination/` → TypeScript (index.tsx + MKPaginationItemRoot.ts)
- [x] `src/components/MKProgress/` → TypeScript (index.tsx + MKProgressRoot.ts)
- [x] `src/components/MKSocialButton/` → TypeScript (index.tsx + MKSocialButtonRoot.ts)

---

## Phase 7: Custom Components Migration 🧩 ✅

**Status:** COMPLETE  
**Files Migrated:** 14

### 7.1 Form Components (Priority: High) ✅
- [x] `src/components/Custom/Form/CreateSchema.jsx` → `.ts`
- [x] `src/components/Custom/Form/CustomForm.jsx` → `.tsx`
- [x] `src/components/Custom/Form/CustomSnackbar.jsx` → `.tsx`
- [x] `src/components/Custom/Form/RenderDropdown.jsx` → `.tsx`
- [x] `src/components/Custom/Form/RenderTextField.jsx` → `.tsx`
- [x] `src/components/Custom/Form/utils.js` → `.tsx`
- [x] Type Zod schemas
- [x] Type form props and handlers

### 7.2 Other Custom Components ✅
- [x] `src/components/Custom/CheckboxGridDisplay.jsx` → `.tsx`
- [x] `src/components/Custom/CustomSlider.jsx` → `.tsx`
- [x] `src/components/Custom/FaqButton.jsx` → `.tsx`
- [x] `src/components/Custom/FaqQuestion.jsx` → `.tsx`
- [x] `src/components/Custom/HeroContent.jsx` → `.tsx`
- [x] `src/components/Custom/InlineForm.jsx` → `.tsx`
- [x] `src/components/Custom/ReasonCards.jsx` → `.tsx`
- [x] `src/components/Custom/SectionHeader.jsx` → `.tsx`

**Key Achievements:**
- React Hook Form + Zod integration properly typed
- FormInput interface exported for reuse
- SnackbarHandle for imperative ref methods
- All PropTypes removed

---

## Phase 8: Example Components Migration 📦 ✅

**Status:** COMPLETE  
**Files Migrated:** 19

### 8.1 Card Examples ✅
- [x] `src/examples/Cards/BlogCards/TransparentBlogCard.js` → `.tsx`
- [x] `src/examples/Cards/BlogCards/CenteredBlogCard.js` → `.tsx`
- [x] `src/examples/Cards/BlogCards/BackgroundBlogCard.js` → `.tsx`
- [x] `src/examples/Cards/CounterCards/DefaultCounterCard.js` → `.tsx`
- [x] `src/examples/Cards/InfoCards/FilledInfoCard.js` → `.tsx`
- [x] `src/examples/Cards/InfoCards/DefaultInfoCard.js` → `.tsx`
- [x] `src/examples/Cards/ReviewCards/DefaultReviewCard.js` → `.tsx`
- [x] `src/examples/Cards/RotatingCard/index.js` → `.tsx`
- [x] `src/examples/Cards/RotatingCard/RotatingCardFront.js` → `.tsx`
- [x] `src/examples/Cards/RotatingCard/RotatingCardBack.js` → `.tsx`
- [x] `src/examples/Cards/TeamCards/HorizontalTeamCard.js` → `.tsx`
- [x] `src/examples/Cards/TeamCards/VerticalTeamCard.js` → `.tsx`

### 8.2 Navigation Examples ✅
- [x] `src/examples/Navbars/DefaultNavbar/index.js` → `.tsx`
- [x] `src/examples/Navbars/DefaultNavbar/DefaultNavbarDropdown.js` → `.tsx`
- [x] `src/examples/Navbars/DefaultNavbar/DefaultNavbarMobile.js` → `.tsx`
- [x] `src/examples/Breadcrumbs/index.js` → `.tsx`

### 8.3 Footer Examples ✅
- [x] `src/examples/Footers/CenteredFooter/index.js` → `.tsx`
- [x] `src/examples/Footers/DefaultFooter/index.js` → `.tsx`
- [x] `src/examples/Footers/SimpleFooter/index.js` → `.tsx`

**Key Achievements:**
- Extended Route types with `href` property for external links
- Typed navbar dropdown state and event handlers
- Created images.d.ts for PNG/JPG/SVG imports
- All card action objects properly typed
- Footer links support both internal routes and external hrefs

---
- [ ] `src/examples/Footers/CenteredFooter/` → TypeScript
- [ ] `src/examples/Footers/DefaultFooter/` → TypeScript
- [ ] `src/examples/Footers/SimpleFooter/` → TypeScript

---

## Phase 9: Page Components Migration 📄

### 9.1 Landing Page
- [ ] `src/pages/LandingPage/index.js` → `.tsx`
- [ ] All LandingPage sections → TypeScript

### 9.2 Service Pages
- [ ] `src/pages/ServicePage/index.js` → `.tsx`
- [ ] All ServicePage sections → TypeScript

### 9.3 Sub-Service Pages
- [ ] `src/pages/SubServicePage/index.js` → `.tsx`
- [ ] All SubServicePage sections → TypeScript

### 9.4 About Page
- [ ] `src/pages/About/index.js` → `.tsx`
- [ ] `src/pages/About/Hero.jsx` → `.tsx`
- [ ] `src/pages/About/Mission.jsx` → `.tsx`
- [ ] `src/pages/About/Team.jsx` → `.tsx`
- [ ] `src/pages/About/Clients.jsx` → `.tsx`
- [ ] `src/pages/About/Contact.jsx` → `.tsx`

### 9.5 Blog Pages
- [ ] `src/pages/BlogOverview/index.js` → `.tsx`
- [ ] All BlogOverview sections → TypeScript
- [ ] `src/pages/BlogContent/` → TypeScript (all blog article pages)

### 9.6 Contact Page
- [ ] `src/pages/ContactUs/index.js` → `.tsx`
- [ ] All ContactUs sections → TypeScript

### 9.7 Other Pages
- [ ] `src/pages/NotFound/index.js` → `.tsx`
- [ ] `src/pages/utils/` → TypeScript

---

## Phase 10: Routes & Configuration Migration 🛣️

### 10.1 Route Files
- [ ] `src/routes.js` → `.ts`
- [ ] `src/footer.routes.js` → `.ts`
- [ ] Type route configuration objects

### 10.2 Service Route Files
- [ ] `src/routes/DirectTaxationRoutes.js` → `.ts`
- [ ] `src/routes/IndirectTaxationRoutes.js` → `.ts`
- [ ] `src/routes/BusinessIncorporationRoutes.js` → `.ts`
- [ ] `src/routes/AuditingRoutes.js` → `.ts`
- [ ] `src/routes/BookKeepingRoutes.js` → `.ts`
- [ ] `src/routes/CertificationsRoutes.js` → `.ts`
- [ ] `src/routes/TDSRoutes.js` → `.ts`
- [ ] `src/routes/DigitalSignaturesRoutes.js` → `.ts`
- [ ] `src/routes/InvestmentAdvisoryRoutes.js` → `.ts`
- [ ] `src/routes/ConsultingRoutes.js` → `.ts`
- [ ] `src/routes/OthersRoutes.js` → `.ts`

---

## Phase 11: Data Files Migration 📊

### 11.1 Landing Page Data
- [ ] Convert `src/assets/data/LandingPage/` files to `.ts`
- [ ] Type all data structures

### 11.2 Service Page Data
- [ ] Convert `src/assets/data/ServicePage/` files to `.ts`
- [ ] Type all data structures

### 11.3 Sub-Service Page Data
- [ ] Convert `src/assets/data/SubServicePage/` files to `.ts`
- [ ] Type all data structures

### 11.4 Other Data Files
- [ ] Convert `src/assets/data/About/` files to `.ts`
- [ ] Convert `src/assets/data/Blog/` files to `.ts`
- [ ] Convert `src/assets/data/ContactUs/` files to `.ts`
- [ ] Convert `src/assets/data/Form/` files to `.ts`

---

## Phase 12: Root Files Migration 🌳

### 12.1 Main Application Files
- [ ] `src/App.js` → `.tsx`
- [ ] `src/index.js` → `.tsx`
- [ ] Update imports throughout

### 12.2 Configuration Files
- [x] Remove `jsconfig.json` (replaced by tsconfig.json)
- [ ] Update `.eslintrc` for TypeScript
- [ ] Add TypeScript-specific linting rules

---

## Phase 13: Testing & Validation ✅

### 13.1 Build & Compile
- [ ] Fix all TypeScript compilation errors
- [ ] Resolve type conflicts
- [ ] Ensure no `any` types (or minimal usage with justification)

### 13.2 Functionality Testing
- [ ] Test all pages load correctly
- [ ] Test all forms work (submission, validation)
- [ ] Test navigation and routing
- [ ] Test theme and styling
- [ ] Test responsive design

### 13.3 Type Safety Verification
- [ ] Review prop types are correctly typed
- [ ] Verify context types work correctly
- [ ] Check API types match backend responses
- [ ] Validate form schemas match types

---

## Phase 14: Cleanup & Documentation 🧹

### 14.1 Remove Old Files
- [ ] Delete all `.jsx` files (after migration)
- [ ] Delete all `.js` files (keep config files needed)
- [ ] Remove PropTypes dependencies
- [ ] Clean up unused imports

### 14.2 Documentation
- [ ] Update README with TypeScript info
- [ ] Document custom types and interfaces
- [ ] Add inline type documentation where helpful
- [ ] Create type usage examples

### 14.3 Final Verification
- [ ] Run full build
- [ ] Run all tests
- [ ] Check bundle size
- [ ] Performance check
- [ ] Git commit final migration

---

## Notes & Decisions 📌

### Migration Strategy
- **Incremental approach:** Migrate one phase at a time
- **Bottom-up:** Start with utilities/types, end with pages/app
- **Test frequently:** Build after each phase
- **Keep backups:** Git commits after each major phase

### TypeScript Configuration Choices
- **Strict mode:** TBD (recommend `true`)
- **Target:** ES2020 or later
- **Module:** ESNext
- **JSX:** react-jsx (React 18)
- **Allow JS:** Initially `true`, then `false` after migration

### Type Safety Goals
- Minimize `any` usage
- Prefer interfaces over types for objects
- Use strict null checks
- Leverage type inference where possible
- Create shared types for common patterns

---

## Migration Progress Tracking

**Total Phases:** 14  
**Completed Phases:** 6 (Setup, Types, Theme, API, Context, MK Components - 100% Complete)  
**Current Phase:** Phase 7 - Custom Components Migration  
**Estimated Files to Migrate:** ~300+  
**Estimated Time:** 50-80 hours

**Progress:** 43% Complete

---

## Quick Reference

### File Extension Changes
- `.js` → `.ts` (utilities, configs, non-React)
- `.jsx` → `.tsx` (React components)

### Import Changes
- PropTypes removed → TypeScript interfaces
- `.jsx` extensions → `.tsx` in imports
- Type imports: `import type { Type } from './types'`

### Common Patterns
```typescript
// Props interface
interface ComponentProps {
  title: string;
  optional?: number;
  children?: React.ReactNode;
}

// Component with typed props
const Component: React.FC<ComponentProps> = ({ title, optional, children }) => {
  return <div>{title}</div>;
};

// Context with types
interface ContextValue {
  value: string;
  setValue: (value: string) => void;
}

const Context = createContext<ContextValue | undefined>(undefined);
```

---

**Last Updated:** January 11, 2026
