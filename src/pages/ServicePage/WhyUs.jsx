import { Box, Container, Grid2 as Grid } from "@mui/material";
import { WhyUsJson } from "assets/data/ServicePage/WhyUsJson";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

const { size, fontWeightRegular, fontWeightMedium } = typography;
const { info, light, white, black } = colors;

function WhyUs() {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={{ background: light.main }}>
        <Container>
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ gap: { xs: 4, xl: 6 } }}
          >
            <SectionHeader
              caption={WhyUsJson.caption}
              title={WhyUsJson.title}
              sx={{ mt: { xs: 2, lg: 6 }, px: { xs: 5, lg: 0 } }}
            />
            <ReasonCards reasons={WhyUsJson.reasons} />
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}

export default WhyUs;
