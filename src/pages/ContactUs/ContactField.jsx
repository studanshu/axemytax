import { Box, Container, Grid } from "@mui/material";
import TopLayout from "pages/utils/TopLayout";
import PropTypes from "prop-types";

import CustomForm from "components/Custom/CustomForm";
import SectionHeader from "components/Custom/SectionHeader";
import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

function ContactField({ jsonData }) {
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Container>
        <Box py={24} px={4}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} lg={6} className="headerAndImage">
              <Grid
                container
                flexDirection="column"
                alignItems="flex-start"
                sx={{ gap: 12, py: 6 }}
              >
                <Grid item className="header">
                  <SectionHeader
                    caption={jsonData.caption}
                    title={jsonData.title}
                  />
                </Grid>
                <Grid
                  item
                  className="header"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  <img
                    src={jsonData.image}
                    alt="Contact Us Image"
                    style={{ maxWidth: "90%", height: "auto" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} className="formContent">
              <CustomForm jsonData={jsonData} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Suspense>
  );
}

ContactField.propTypes = {
  jsonData: PropTypes.shape({
    flexDirection: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactField;
