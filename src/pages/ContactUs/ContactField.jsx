import { Box, Container, Grid } from "@mui/material";
import TopLayout from "pages/utils/TopLayout";
import PropTypes from "prop-types";

import CustomForm from "components/Custom/Form/CustomForm";
import SectionHeader from "components/Custom/SectionHeader";
import { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const renderLoader = () => <></>;

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
                sx={{ gap: 12, pb: 6 }}
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
                  <LazyLoadImage
                    src={jsonData.image}
                    alt="Contact Us Image"
                    effect="blur"
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
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(["text", "email", "tel", "nestedEnum", "enum"]),
        label: PropTypes.string.isRequired,
        formLabel: PropTypes.string,
        required: PropTypes.bool,
        fieldType: PropTypes.oneOf(["input", "dropdown", "textarea"]),
        spacing: PropTypes.oneOf(["half", "full"]),
        options: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
      })
    ).isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactField;
