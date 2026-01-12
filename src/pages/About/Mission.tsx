import { Box, Container } from "@mui/material";
import colors from "assets/theme/base/colors";
import HeroContent from "components/Custom/HeroContent";
import { Suspense, FC } from "react";

interface MissionJsonData {
  caption?: string;
  title?: string;
  description?: string;
  image: string;
  flexDirection?: "row" | "row-reverse";
  [key: string]: any;
}

interface MissionProps {
  jsonData: MissionJsonData;
}

const renderLoader = () => <></>;

const Mission: FC<MissionProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={{ backgroundColor: colors.light.main, py: 6 }}>
        <Container>
          <Box px={4}>
            <HeroContent
              HeroJson={jsonData}
              flexDirection={jsonData.flexDirection}
            />
          </Box>
        </Container>
      </Box>
    </Suspense>
  );
};

export default Mission;
