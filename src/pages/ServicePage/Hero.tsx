import { Box, Container } from "@mui/material";

// Material Kit 2 React base styles
import HeroContent from "components/Custom/HeroContent";

// Material Kit 2 React components
import TopLayout from "pages/utils/TopLayout";

import { FC, Suspense } from "react";

const renderLoader = () => <></>;

interface HeroJsonData {
  caption?: string;
  title?: string;
  description?: string;
  image: string;
  buttons?: any[];
  flexDirection?: "row" | "row-reverse";
  [key: string]: any;
}

interface HeroProps {
  jsonData: HeroJsonData;
}

const Hero: FC<HeroProps> = ({ jsonData }) => {
  const HeroJson = jsonData;
  const flexDirection = HeroJson.flexDirection === "row-reverse" ? "row-reverse" : "row";
  
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Container>
        <Box pt={24} px={4}>
          <HeroContent
            HeroJson={HeroJson}
            flexDirection={flexDirection}
          />
        </Box>
      </Container>
    </Suspense>
  );
};

export default Hero;
