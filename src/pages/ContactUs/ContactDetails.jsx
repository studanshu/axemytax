import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";
import { Suspense } from "react";
const renderLoader = () => <></>;

const { light } = colors;

function ContactDetails({ jsonData }) {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={{ background: light.main, py: { xs: 3, xl: 6 } }}>
        <Container>
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ gap: { xs: 4, xl: 6 } }}
            className="ContactDetailsContent"
          >
            <SectionHeader
              caption={jsonData.caption}
              title={jsonData.title}
              sx={{ px: { xs: 5, lg: 0 } }}
            />
            <ReasonCards reasons={jsonData.details} />
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}

ContactDetails.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string,
    title: PropTypes.string,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        des: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ContactDetails;
