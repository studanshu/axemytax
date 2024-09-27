import { Box, Container, Grid, TextField } from "@mui/material";
import TopLayout from "pages/utils/TopLayout";
import PropTypes from "prop-types";

import { SendOutlined } from "@mui/icons-material";
import typography from "assets/theme/base/typography";
import RenderDropdown from "components/Custom/RenderDropdown";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import { Suspense } from "react";

const { size } = typography;
const renderLoader = () => <p>Loading</p>;

const renderInputField = (input) => {
  switch (input.fieldType) {
    case "input":
      return (
        <MKInput
          placeholder={`${input.label} ${input.required ? "*" : ""}`}
          variant="outlined"
          sx={{ width: "100%" }}
        />
      );
    case "textarea":
      return (
        <TextField
          multiline
          rows={4}
          placeholder={input.label}
          sx={{
            width: "100%",
            color: "blue",
          }}
        />
      );
    case "dropdown":
      return (
        <RenderDropdown
          options={input.options}
          label={input.label}
          spacing={4}
          isRequired={input.required}
        />
      );
    default:
      return null;
  }
};

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
              <Grid
                container
                className="formInputs"
                spacing={4}
                justifyContent="center"
              >
                {jsonData.inputs.map((input, index) => (
                  <Grid
                    item
                    xs={12}
                    lg={input.spacing === "full" ? 12 : 6}
                    key={index}
                  >
                    {renderInputField(input)}
                  </Grid>
                ))}
                <Grid item xs={12} lg={6}>
                  <MKButton
                    size="large"
                    variant="contained"
                    color="primary"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: size.md,
                      width: "100%",
                      boxShadow:
                        "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);",
                    }}
                    endIcon={<SendOutlined />}
                  >
                    {jsonData.buttonText}
                  </MKButton>
                </Grid>
              </Grid>
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
