import { Box, Container } from "@mui/material";
import HeroContent from "components/Custom/HeroContent";
import TopLayout from "pages/utils/TopLayout";
import { FC, Suspense } from "react";

const renderLoader = () => <></>;

interface HeroProps {
  jsonData: {
    caption?: string;
    title?: string;
    description?: string;
    image: string;
    buttons?: any[];
    flexDirection?: "row" | "row-reverse";
    [key: string]: any;
  };
}

const Hero: FC<HeroProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Container>
        <Box pt={24} px={4}>
          <HeroContent
            HeroJson={jsonData}
            flexDirection={jsonData.flexDirection}
          />
        </Box>
      </Container>
    </Suspense>
  );
};

export default Hero;
