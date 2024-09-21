import { Box, Container } from "@mui/material";
import PropTypes from "prop-types";

// Material Kit 2 React base styles
import HeroContent from "components/Custom/HeroContent";

// Material Kit 2 React components
import TopLayout from "pages/utils/TopLayout";

import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

function Hero({ jsonData }) {
  const HeroJson = jsonData;
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Container>
        <Box pt={24} px={4}>
          <HeroContent
            HeroJson={HeroJson}
            flexDirection={HeroJson.flexDirection}
          />
        </Box>
      </Container>
    </Suspense>
  );
}

Hero.propTypes = {
  jsonData: PropTypes.shape({
    flexDirection: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
