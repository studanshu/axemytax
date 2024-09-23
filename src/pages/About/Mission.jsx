import { Box, Container } from "@mui/material";
import colors from "assets/theme/base/colors";
import HeroContent from "components/Custom/HeroContent";
import PropTypes from "prop-types";
import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

function Mission({ jsonData }) {
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
}

Mission.propTypes = {
  jsonData: PropTypes.object.isRequired,
};

export default Mission;
