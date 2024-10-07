import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";
import { Suspense } from "react";
import RenderForm from "./RenderForm";
const renderLoader = () => <></>;

const { light } = colors;

function WhyUs({ jsonData }) {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={{ background: light.main, py: { xs: 3, xl: 6 } }}>
        <Container>
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="WhyUs"
            sx={{ gap: { xs: 6, xl: 12 }, px: { xl: 2 } }}
          >
            <Grid
              container
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ gap: { xs: 4, xl: 6 } }}
              className="whyUsContent"
            >
              <SectionHeader
                caption={jsonData.caption}
                title={jsonData.title}
                sx={{ px: { xs: 5, lg: 0 } }}
              />
              <ReasonCards reasons={jsonData.reasons} />
            </Grid>
            <Grid item sx={{ minWidth: "100%" }}></Grid>
            <RenderForm jsonData={jsonData} />
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}

WhyUs.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string,
    title: PropTypes.string,
    reasons: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    secondaryCaption: PropTypes.string,
    secondaryTitle: PropTypes.string,
    checkboxes: PropTypes.arrayOf(PropTypes.object),
    dropdownBusiness: PropTypes.object,
  }).isRequired,
};

export default WhyUs;
