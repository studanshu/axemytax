import { Box, Container } from "@mui/material";
import colors from "assets/theme/base/colors";
import InlineForm from "components/Custom/InlineForm";
import MKBox from "components/MKBox";
import PropTypes from "prop-types";
import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

function Subscribe({ jsonData }) {
  return (
    <Suspense fallback={renderLoader()}>
      <MKBox sx={{ my: 24, backgroundColor: colors.light.main }}>
        <Container>
          <Box px={4} py={6}>
            <InlineForm
              FormJson={jsonData}
              flexDirection={jsonData.flexDirection}
            />
          </Box>
        </Container>
      </MKBox>
    </Suspense>
  );
}

Subscribe.propTypes = {
  jsonData: PropTypes.object.isRequired,
};

export default Subscribe;
