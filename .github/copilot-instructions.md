# Copilot Instructions for AxeMyTax Project

## Project Overview
**AxeMyTax** is a tax consultancy and professional services website built with React. It provides information about various tax services, accounting, auditing, and business incorporation services for individuals, SMEs, corporates, and NRIs.

**Author:** Hemanshu Bahety  
**Company:** Bahety & Goenka  
**Repository:** https://github.com/studanshu/axemytax

---

## Technology Stack

### Core Framework
- **React:** 18.3.1
- **React Router DOM:** 6.0.2 (for routing)
- **React Scripts:** 5.0.1 (Create React App based)

### UI Framework
- **Material-UI (MUI):** 5.14.0
  - @mui/material, @mui/icons-material, @mui/styled-engine-sc, @mui/styles
  - Custom Material Kit 2 React theme (based on Creative Tim's template)
- **Emotion:** For CSS-in-JS styling (@emotion/react, @emotion/styled)

### State Management & Data Fetching
- **React Query (TanStack):** 5.59.0 (for async state management)
- **React Hook Form:** 7.53.0 (form handling)
- **Zod:** 3.23.8 (schema validation with @hookform/resolvers)

### Additional Libraries
- **Axios:** 1.7.7 (HTTP requests)
- **React Slick:** 0.30.2 (carousels)
- **React CountUp:** 6.1.0 (animated counters)
- **React Lazy Load Image Component:** 1.6.2 (image optimization)
- **Flatpickr:** 4.6.9 (date picker)
- **Chroma-js:** 2.1.2 (color manipulation)

### Build Requirements
- **Node:** >=18.x
- **NPM:** >=8

---

## Project Structure

### Root Directory
```
axemytax/
├── public/              # Static assets (index.html, manifest, robots.txt)
├── src/                 # Source code
│   ├── api/            # API layer (constants, HTTP requests, DTOs)
│   ├── assets/         # Static assets (data, images, theme)
│   ├── components/     # Reusable components (MK* components, Custom)
│   ├── examples/       # Example components (Cards, Footers, Navbars)
│   ├── pages/          # Page components
│   ├── providers/      # Context providers
│   ├── routes/         # Service-specific route definitions
│   ├── App.js          # Main app component
│   ├── routes.js       # Main route configuration
│   └── footer.routes.js # Footer configuration
├── jsconfig.json       # Path aliases configuration
└── package.json        # Dependencies and scripts
```

### Key Directories

#### `/src/assets/`
- **`data/`**: JSON-like JavaScript objects containing page content
  - `About/`, `Blog/`, `ContactUs/`, `LandingPage/`, `ServicePage/`, `SubServicePage/`, `Form/`
  - Each service/page has dedicated data files for Hero, FAQ, Testimonials, etc.
- **`images/`**: Image assets organized by page/component
- **`theme/`**: Material Kit 2 React theme customization
  - `base/`: colors, typography, borders, breakpoints, shadows
  - `components/`: MUI component style overrides
  - `functions/`: Helper functions (pxToRem, rgba, linearGradient, etc.)

#### `/src/components/`
- **`MK*` Components**: Styled wrapper components for Material-UI (MKBox, MKButton, MKTypography, MKInput, etc.)
- **`Custom/`**: Application-specific reusable components
  - `InlineForm.jsx`, `FaqButton.jsx`, `SectionHeader.jsx`, `CheckboxGridDisplay.jsx`
  - `Form/`: Form components (CustomForm, RenderTextField, RenderDropdown, CustomSnackbar)

#### `/src/pages/`
- **`LandingPage/`**: Home page with sections (Hero, Counters, Services, Team, Blogs, etc.)
- **`ServicePage/`**: Template for service category pages (Direct Taxation, GST, etc.)
- **`SubServicePage/`**: Template for individual service pages (ITR Filing, PAN Services, etc.)
- **`BlogContent/`**: Blog article pages
- **`BlogOverview/`**: Blog listing page
- **`About/`**: About page sections
- **`ContactUs/`**: Contact page with form
- **`utils/`**: Shared page utilities (TopLayout, ContactIcon)

#### `/src/routes/`
Service-specific route configuration files:
- `DirectTaxationRoutes.js`
- `IndirectTaxationRoutes.js`
- `BusinessIncorporationRoutes.js`
- `AuditingRoutes.js`
- `BookKeepingRoutes.js`
- `CertificationsRoutes.js`
- `TDSRoutes.js`
- `DigitalSignaturesRoutes.js`
- `InvestmentAdvisoryRoutes.js`
- `ConsultingRoutes.js`
- `OthersRoutes.js`

---

## Architecture Patterns

### 1. **Data-Driven Pages**
All page content is separated from components and stored in `/src/assets/data/` as JavaScript objects. Components receive content via `jsonData` props.

**Example:**
```javascript
import DirectTaxationServiceJsonData from "assets/data/ServicePage/DirectTaxationService";

<ServicePage jsonData={DirectTaxationServiceJsonData} />
```

### 2. **Route Configuration**
Routes are defined hierarchically in `/src/routes.js` and individual service route files.

**Structure:**
```javascript
{
  name: "Service Name",
  route: "/services/service-name",
  component: <ServicePage />,
  collapse: [/* sub-routes */]
}
```

Routes support:
- `route`: URL path
- `component`: React component to render
- `collapse`: Nested routes (for dropdowns)
- `name`: Display name (used in navigation)
- `icon`: Icon for navigation

### 3. **Context-Based State**
Three contexts manage service/page state:
- **`ServiceContext`**: Current service category (e.g., "Direct Taxation")
- **`SubServiceContext`**: Current sub-service (e.g., "Fresh ITR Filing")
- **`PageContext`**: Current page name (e.g., "About", "Contact")

Wrapped via providers:
- `ServiceContextProvider`
- `SubServiceContextProvider`
- `PageContextProvider`

### 4. **Lazy Loading & Code Splitting**
Components are lazy-loaded using React's `lazy()` and `Suspense`:
```javascript
const Hero = lazy(() => import("./Hero"));
<Suspense fallback={<></>}>
  <Hero {...props} />
</Suspense>
```

### 5. **Form Handling**
- **React Hook Form** for form state
- **Zod** for validation schemas
- **Custom DTO transformation** in `formDto.jsx`
- **React Query** for submission mutations

Form flow:
1. Schema creation from JSON config (`CreateSchema.jsx`)
2. Form rendering (`CustomForm.jsx`, `RenderTextField.jsx`, `RenderDropdown.jsx`)
3. Data transformation (`formDto.jsx`)
4. API submission (`useFormSubmit.jsx`, `httpRequests.jsx`)

### 6. **Theme System**
Material Kit 2 React theme with customizations:
- **Colors**: Defined in `assets/theme/base/colors.js`
- **Typography**: Fonts (Noto Sans SC, Inter), sizes, weights in `typography.js`
- **Breakpoints**: Custom responsive breakpoint helpers
- **Components**: MUI component overrides in `assets/theme/components/`

---

## Routing Architecture

### Main Routes (`routes.js`)
- `/` - Landing Page
- `/about` - About Page
- `/blogs` - Blog Overview
- `/contact` - Contact Page
- Services (dropdown with 11 categories)

### Service Routes Pattern
```
/services/{service-category}
/services/{service-category}/{sub-service}
```

**Example:**
- `/services/direct-taxation`
- `/services/direct-taxation/fresh-itr-filing`
- `/services/indirect-taxation/gst-registration`

### Blog Routes
```
/blog/{category}/{relatedType}/{contentId}
```

### Route Dictionary (`routeDict`)
Programmatically generated dictionary for dynamic route access:
```javascript
routeDict["Services"]["Direct Taxation"]["target"]
routeDict["About"]
routeDict["Contact"]
```

---

## API Integration

### Form Submission Endpoint
- **Environment Variable:** `REACT_APP_GAS_URL`
- **Method:** POST
- **Mode:** no-cors
- **Content-Type:** application/json

### Form Data Transformation
Forms include:
- User inputs (name, email, phone, query, etc.)
- Service/sub-service context (auto-populated)
- Source tracking (page or service-based)
- Metadata (environment, custom fields)

**DTO Transformations:**
- Business type mapping (Individual/SME/Corporate)
- Budget range mapping
- Meta field stringification

### React Query Integration
- `QueryClientProvider` wraps the app
- `useMutation` for form submissions
- Status tracking: `isPending`, `isSuccess`, `isError`

---

## Component Patterns

### MK* Components
Styled wrappers around Material-UI components with theme integration:
- **MKBox** → Box
- **MKButton** → Button
- **MKTypography** → Typography
- **MKInput** → TextField
- **MKAlert, MKAvatar, MKBadge, MKProgress, etc.**

Usage:
```javascript
<MKTypography variant="h2" color="primary">
  Title
</MKTypography>
```

### Custom Components

#### **InlineForm**
Form with image, used across pages
- Props: `FormJson`, `flexDirection`
- Renders: SectionHeader + CustomForm + Image

#### **CustomForm**
Dynamic form builder
- Generates Zod schema from JSON
- Supports text, textarea, dropdown fields
- Auto-tracks service context
- Integrated with React Hook Form

#### **SectionHeader**
Reusable section title component
- Props: `caption`, `title`, `variant`, `color`

#### **FaqButton/FaqQuestion**
Accordion-style FAQ components

---

## Important Conventions

### File Naming
- **Components:** PascalCase (e.g., `CustomForm.jsx`)
- **Pages:** PascalCase folders with `index.js`
- **Routes:** PascalCase with "Routes" suffix (e.g., `DirectTaxationRoutes.js`)
- **Data:** PascalCase with descriptive names (e.g., `DirectTaxationServiceJsonData`)

### Import Aliases
Base URL configured in `jsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

Use absolute imports from `src/`:
```javascript
import MKBox from "components/MKBox";
import theme from "assets/theme";
```

### PropTypes
All components use PropTypes for type checking:
```javascript
ComponentName.propTypes = {
  jsonData: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};
```

### Default Props
Components provide sensible defaults:
```javascript
ComponentName.defaultProps = {
  flexDirection: "row",
};
```

---

## Key Design Decisions

1. **Separation of Content & Code:** All content in data files, not hardcoded in components
2. **JSON-Driven UI:** Forms, pages, and sections configured via JSON objects
3. **Context for Service Tracking:** Automatically populate service/sub-service in forms
4. **Lazy Loading:** Performance optimization via code splitting
5. **Material-UI Theming:** Consistent design system via centralized theme
6. **React Query:** Modern async state management for forms
7. **Zod Validation:** Type-safe form validation

---

## Common Tasks

### Adding a New Service
1. Create data file in `assets/data/ServicePage/` or `SubServicePage/`
2. Create route file in `routes/` (e.g., `NewServiceRoutes.js`)
3. Import and add to `routes.js` collapse array
4. Use `ServicePage` or `SubServicePage` template components

### Adding a New Page Section
1. Create component in `pages/{PageName}/`
2. Add data to `assets/data/{PageName}/`
3. Import and add to page's component array

### Modifying Theme
1. Edit `assets/theme/base/` for global styles (colors, typography)
2. Edit `assets/theme/components/` for component-specific styles
3. Changes auto-apply via ThemeProvider

### Adding Form Fields
1. Update data file with new input definition
2. Schema auto-generates from input config
3. Optionally update `CreateSchema.jsx` for custom validation
4. Update `formDto.jsx` if transformation needed

---

## Environment Variables
Required:
- `REACT_APP_GAS_URL`: Google Apps Script deployment URL for blog CMS and form submission

Optional:
- `NODE_ENV`: Auto-set by React Scripts (development/production)
- `REACT_APP_GA_TRACKING_ID`: Google Analytics tracking ID (G-XXXXXXXXXX for GA4)

---

## Analytics Integration

### Architecture
The project uses a context-based Google Analytics implementation with automatic event tracking:

**Core Components:**
- **AnalyticsProvider** (`src/providers/AnalyticsProvider.tsx`): Initializes gtag.js and provides tracking functions
- **EventTrackingProvider** (`src/providers/EventTrackingProvider.tsx`): Automatically tracks contextual events based on Service/SubService/Page context
- **useAnalytics** (`src/hooks/useAnalytics.ts`): Core hook for tracking functions
- **useFormTracking** (`src/hooks/useFormTracking.ts`): Specialized hook for form event tracking
- **useBlogTracking** (`src/hooks/useBlogTracking.ts`): Specialized hook for blog event tracking
- **useInteractionTracking** (`src/hooks/useInteractionTracking.ts`): Specialized hook for user interaction tracking

### Automatic Tracking
The following events are automatically tracked:
1. **Page Views**: All route changes with contextual titles (service/subservice/page names)
2. **Service Navigation**: When users view service or subservice pages
3. **Form Events**: View, start, submit (success/error) for all contact forms
4. **FAQ Interactions**: When users expand FAQ questions
5. **WhatsApp Contact**: When users click the floating WhatsApp button (with source page)

### Manual Tracking Usage
Use specialized hooks for additional tracking:

```typescript
// Form tracking
const { trackFormSubmit, trackFormStart } = useFormTracking();

// Blog tracking
const { trackBlogView, trackCategoryFilter } = useBlogTracking();

// Interaction tracking
const { trackButtonClick, trackServiceCardClick } = useInteractionTracking();
```

### Debug Mode
- Enabled automatically in development (`NODE_ENV === 'development'`)
- All events logged to console
- No actual data sent to Google Analytics in development

### Event Categories
- **Navigation**: Page views, service views, subservice views
- **Form**: View, start, submit_success, submit_error, field_interaction
- **Blog**: View, share, filter_category, related_post_click
- **User Interaction**: Button clicks, link clicks, FAQ expansion
- **Service Selection**: Service card clicks
- **Contact**: WhatsApp, phone, email clicks
- **Outbound Link**: External link clicks

---

## Build & Deploy

### Development
```bash
npm start
```

### Production Build
```bash
npm run build
```
Note: `CI=false` in build script to ignore warnings as errors

### Testing
```bash
npm test
```

### Code Analysis
```bash
npm run analyze
```
Uses `source-map-explorer` to analyze bundle size

---

## Coding Best Practices

1. **Use provided MK* components** instead of raw MUI components
2. **Store content in data files**, not in component files
3. **Use context providers** for service/page tracking
4. **Implement PropTypes** for all components
5. **Lazy load** page sections for performance
6. **Follow existing naming conventions** (PascalCase, descriptive names)
7. **Use absolute imports** from `src/`
8. **Leverage theme functions** (pxToRem, rgba, linearGradient)
9. **Use React Hook Form + Zod** for forms
10. **Test responsive design** with theme breakpoint helpers

---

## Footer Configuration
Footer links and social media configured in `footer.routes.js`:
- Brand logo and route
- Social media links (LinkedIn, Facebook, Twitter, YouTube)
- Menu sections (Company, Services, Help & Support, Legal)
- Copyright notice

---

## Navigation
Configured in `routes.js`:
- Top-level routes appear in navbar
- `collapse` creates dropdown menus
- `columns` and `rowsPerColumn` control dropdown layout
- Icons from `@mui/icons-material`

---

## Testing
- **Jest** (via React Scripts)
- **React Testing Library**
- **User Event Testing**

---

## Linting & Code Quality
- **ESLint:** Airbnb config with Prettier integration
- **Prettier:** Code formatting
- **Babel:** Latest JS features, module resolver

---

## Performance Optimizations
1. **Lazy loading** with React.lazy()
2. **Image lazy loading** with react-lazy-load-image-component
3. **Code splitting** via dynamic imports
4. **Memoization** with React.useMemo (see BlogContent)
5. **Bundle analysis** available via `npm run analyze`

---

## Accessibility
- Semantic HTML structure
- ARIA labels where needed (jsx-a11y plugin)
- Keyboard navigation support via MUI
- Focus management

---

## Known Patterns to Follow

### Page Component Structure
```javascript
const PageName = ({ jsonData }) => {
  const components = [
    { component: lazy(() => import("./Section1")), props: { jsonData: jsonData.Section1 } },
    { component: lazy(() => import("./Section2")), props: { jsonData: jsonData.Section2 } },
  ];

  return (
    <>
      {components.map(({ component: Component, props }, index) => (
        <Suspense key={index}>
          <Component {...props} />
        </Suspense>
      ))}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
```

### Route Definition Structure
```javascript
const ServiceRoutes = {
  name: "Service Name",
  route: "/services/service-name",
  component: (
    <ServiceContextProvider dict={{ name: "Service Name" }}>
      <ServicePage jsonData={ServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [/* sub-routes */],
};
```

### Form Component Structure
```javascript
const FormComponent = ({ jsonData }) => {
  const schema = z.object(createSchema(jsonData.inputs));
  const methods = useForm({ resolver: zodResolver(schema) });
  const { submitForm, isSubmitting } = useFormSubmit();
  
  const onSubmit = async (data) => {
    await submitForm(data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* render fields */}
      </Form>
    </FormProvider>
  );
};
```

---

## Summary
This is a well-structured React application with:
- Clear separation of concerns (data, components, routing)
- Modern React patterns (hooks, context, lazy loading)
- Material-UI theming
- Form handling with React Hook Form + Zod
- React Query for async state
- Performance optimizations
- Scalable architecture for adding new services/pages

When making changes, **always**:
1. Check for existing patterns to follow
2. Update data files, not component logic
3. Use provided components and utilities
4. Test across breakpoints (responsive design)
5. Maintain PropTypes and default props
