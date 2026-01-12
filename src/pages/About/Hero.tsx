import { Box, Container } from "@mui/material";
import HeroContent from "components/Custom/HeroContent";
import TopLayout from "pages/utils/TopLayout";
import { Suspense, FC } from "react";

interface HeroJsonData {
  caption?: string;
  title?: string;
  description?: string;
  image: string;
  flexDirection?: "row" | "row-reverse";
  [key: string]: any;
}

interface HeroProps {
  jsonData: HeroJsonData;
}

const renderLoader = () => <></>;

const Hero: FC<HeroProps> = ({ jsonData }) => {
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
};

export default Hero;
