/* eslint-disable no-unused-vars */
import { FormControl, Grid, MenuItem, TextField } from "@mui/material";
import MKTypography from "components/MKTypography"; // Ensure this path is correct
import PropTypes from "prop-types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const RenderDropdown = ({ input, gap }) => {
  const { register } = useFormContext();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const isNestedDropdown = input.type === "nestedEnum";

  const renderMenuItems = () => {
    let optionList = [];
    if (isNestedDropdown) {
      optionList = Object.keys(input.options);
    } else {
      optionList = input.options;
    }

    return optionList.map((key, index) => (
      <MenuItem key={index} value={key}>
        <MKTypography variant="h6Light" color="secondary">
          {key}
        </MKTypography>
      </MenuItem>
    ));
  };

  return (
    <Grid container spacing={gap} flexDirection="column">
      <Grid item>
        <FormControl fullWidth>
          <TextField
            value={selectedOption}
            onChange={handleOptionChange}
            select
            label={`${input.label} ${input.required ? "*" : ""}`}
            required={input.isRequired || false}
          >
            {renderMenuItems()}
          </TextField>
        </FormControl>
      </Grid>
      {isNestedDropdown && selectedOption && (
        <Grid item>
          <RenderDropdown input={input.options[selectedOption]} gap={gap} />
        </Grid>
      )}
    </Grid>
  );
};
RenderDropdown.propTypes = {
  input: PropTypes.instanceOf({
    type: PropTypes.string.isRequired,
    fieldType: PropTypes.string.isRequired,
    spacing: PropTypes.oneOf(["half", "full"]),
    label: PropTypes.string.isRequired,
    formLabel: PropTypes.string.isRequired,
    required: PropTypes.bool,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
      .isRequired,
  }).isRequired,
  gap: PropTypes.number,
};

RenderDropdown.defaultProps = {
  gap: 2,
};

export default RenderDropdown;
