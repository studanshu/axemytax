import { Box, Container } from "@mui/material";
import HeroContent from "components/Custom/HeroContent";
import TopLayout from "pages/utils/TopLayout";
import PropTypes from "prop-types";
import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

function Hero({ jsonData }) {
  const HeroJson = jsonData;
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Container>
        <Box py={24} px={4}>
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
  jsonData: PropTypes.object.isRequired,
};

export default Hero;
