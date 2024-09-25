import { SendOutlined } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";
import typography from "assets/theme/base/typography";

import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import PropTypes from "prop-types";

const { size } = typography;

const InlineForm = ({ FormJson, flexDirection }) => {
  return (
    <>
      <Grid container spacing={8} direction={flexDirection}>
        <Grid item xs={12} lg={6} p={0}>
          <Box display="flex" flexDirection="column" gap={6}>
            <SectionHeader
              caption={FormJson.caption}
              title={FormJson.title}
              variant="h2"
              color="secondary"
            />
            <Grid
              container
              className="formInputs"
              spacing={4}
              justifyContent="center"
            >
              {FormJson.inputs.map((input, index) => (
                <Grid item xs={12} lg={input.isTextArea ? 12 : 6} key={index}>
                  {input.isTextArea ? (
                    <TextField
                      multiline
                      rows={4}
                      placeholder={input.label}
                      sx={{
                        width: "100%",
                        color: "blue",
                      }}
                    />
                  ) : (
                    <MKInput
                      placeholder={`${input.label} ${input.required ? "*" : ""}`}
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  )}
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
                  {FormJson.buttonText}
                </MKButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          diplsay="none"
          xs={12}
          lg={6}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <img
            src={FormJson.image}
            alt="Form Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

InlineForm.propTypes = {
  FormJson: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(URL)])
      .isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        required: PropTypes.bool,
        isTextArea: PropTypes.bool,
      })
    ).isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
  flexDirection: PropTypes.oneOf(["row", "row-reverse"]),
};

InlineForm.defaultProps = {
  flexDirection: "row",
};

export default InlineForm;
