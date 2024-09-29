import typography from "assets/theme/base/typography";
import PropTypes from "prop-types";

const { TextField, Grid } = require("@mui/material");
const { default: RenderDropdown } = require("./RenderDropdown");
const { default: MKButton } = require("components/MKButton");
const { SendOutlined } = require("@mui/icons-material");

const { size } = typography;

const renderInputField = (input) => {
  switch (input.fieldType) {
    case "input":
      return (
        <TextField
          placeholder={`${input.label} ${input.required ? "*" : ""}`}
          required={input.required}
          variant="outlined"
          type={input.type}
          sx={{ width: "100%" }}
        />
      );
    case "textarea":
      return (
        <TextField
          multiline
          rows={4}
          required={input.required}
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

const CustomForm = ({ jsonData }) => {
  return (
    <Grid item xs={12} className="formContent">
      <Grid
        container
        className="formInputs"
        spacing={4}
        justifyContent="center"
      >
        {jsonData.inputs.map((input, index) => (
          <Grid item xs={12} lg={input.spacing === "full" ? 12 : 6} key={index}>
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
  );
};

CustomForm.propTypes = {
  jsonData: PropTypes.shape({
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomForm;
