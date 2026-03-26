# SKILL: page-component-layer

**Layer:** L1
**Depends on:** `axemytax-pattern-discovery`
**Trigger:** Creating React page components for a new page.

---

## File Structure
Every page lives in `src/pages/[PageName]/` and has:
```
index.tsx           ← page shell (lazy orchestrator + footer)
Hero.tsx            ← TopLayout + title + image
[MainSection].tsx   ← core feature content (interactive state goes here)
Contact.tsx         ← InlineForm wrapper
```
Optional additional sections follow the same pattern as `[MainSection].tsx`.

---

## `index.tsx` — Page Shell

The shell lazy-loads every section. Receives the full `jsonData` prop and distributes sections.

```tsx
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { lazy, Suspense, FC } from "react";
import { FeatureJsonData } from "assets/data/[FeatureName]/types";

const Hero = lazy(() => import("./Hero"));
const MainSection = lazy(() => import("./MainSection"));
const Contact = lazy(() => import("./Contact"));

const renderLoader = () => <></>;

interface Props { jsonData: FeatureJsonData; }

const FeaturePage: FC<Props> = ({ jsonData }) => (
  <>
    <Suspense fallback={renderLoader()}><Hero jsonData={jsonData.Hero} /></Suspense>
    <Suspense fallback={renderLoader()}><MainSection data={jsonData.Items} /></Suspense>
    <Suspense fallback={renderLoader()}><Contact jsonData={jsonData.Contact} /></Suspense>
    <MKBox pt={2} px={1}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </>
);

export default FeaturePage;
```

---

## `Hero.tsx`

Always starts with `<TopLayout />`. Two-column grid on lg, stacked on xs.

```tsx
import { Box, Container, Grid } from "@mui/material";
import SectionHeader from "components/Custom/SectionHeader";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero: FC<{ jsonData: HeroJson }> = ({ jsonData }) => (
  <>
    <TopLayout />
    <Container>
      <Box py={24} px={4}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Box display="flex" flexDirection="column" gap={4}>
              <SectionHeader caption={jsonData.caption} title={jsonData.title} variant="h2" color="black" />
              <MKTypography variant="body1" color="text">{jsonData.description}</MKTypography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ display: { xs: "none", lg: "block" } }}>
            <LazyLoadImage src={jsonData.image} alt="..." style={{ maxWidth: "100%", height: "auto" }} effect="blur" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  </>
);
export default Hero;
```

---

## `Contact.tsx`

Always identical — just wraps `InlineForm` with `DefaultContactJson`.

```tsx
import { Box, Container } from "@mui/material";
import InlineForm from "components/Custom/InlineForm";
import { FC } from "react";

const Contact: FC<{ jsonData: any }> = ({ jsonData }) => (
  <Container sx={{ my: 24 }}>
    <Box px={4}>
      <InlineForm FormJson={jsonData} flexDirection="row" />
    </Box>
  </Container>
);
export default Contact;
```

---

## `[MainSection].tsx` — Interactive Sections

State lives here. Pattern for interactive month/category/tab selection:

```tsx
import { Container, Tabs, Tab } from "@mui/material";
import MKBox from "components/MKBox";
import SectionHeader from "components/Custom/SectionHeader";
import { FC, useState } from "react";

const MainSection: FC<{ data: FeatureData }> = ({ data }) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <MKBox component="section" py={8} sx={{ bgcolor: "#FAFAFA" }}>
      <Container>
        <MKBox px={{ xs: 2, md: 4 }}>
          <SectionHeader caption="subtitle" title="Main Title" variant="h3" color="black" sx={{ mb: 4 }} />
          {/* Tabs, Cards, Grid — built from data */}
        </MKBox>
      </Container>
    </MKBox>
  );
};
export default MainSection;
```

## Key Spacing Conventions
| Context | Value |
|---------|-------|
| Hero padding | `py={24} px={4}` |
| Section padding | `py={8}` |
| Contact section | `my={24}` |
| Footer wrapper | `pt={2} px={1}` |
| Card grid gap | `spacing={3}` |
| Column gap (hero) | `spacing={6}` |
