import { Box, Container } from "@mui/material";
import { HeroJson } from "assets/data/ServicePage/HeroJson";

// Material Kit 2 React base styles
import HeroContent from "components/Custom/HeroContent";

// Material Kit 2 React components
import TopLayout from "pages/utils/TopLayout";

function Hero() {
  return (
    <>
      <TopLayout />
      <Container>
        <Box pt={24} px={4}>
          <HeroContent
            HeroJson={HeroJson}
            flexDirection={HeroJson.flexDirection}
          />
        </Box>
      </Container>
    </>
  );
}

export default Hero;
