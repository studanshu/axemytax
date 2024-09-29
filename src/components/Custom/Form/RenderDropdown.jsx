/* eslint-disable no-unused-vars */
import { FormControl, Grid, MenuItem, TextField } from "@mui/material";
import MKTypography from "components/MKTypography"; // Ensure this path is correct
import PropTypes from "prop-types";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const OptionsToIgnore = ["label", "formLabel"];

const RenderDropdown = ({ options, label, spacing, isRequired, formLabel }) => {
  const { register } = useFormContext();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const isNestedDropdown =
    typeof options === "object" && !Array.isArray(options);

  const renderMenuItems = () => {
    let optionList = [];
    if (isNestedDropdown) {
      optionList = Object.keys(options);
    } else {
      optionList = options;
    }

    return optionList.map(
      (key, index) =>
        OptionsToIgnore.indexOf(key) === -1 && (
          <MenuItem key={index} value={key}>
            <MKTypography variant="h6Light" color="secondary">
              {key}
            </MKTypography>
          </MenuItem>
        )
    );
  };

  return (
    <Grid container spacing={spacing} flexDirection="column">
      <Grid item>
        <FormControl fullWidth>
          <TextField
            value={selectedOption}
            onChange={handleOptionChange}
            select
            label={label}
            required={isRequired}
          >
            {renderMenuItems()}
          </TextField>
        </FormControl>
      </Grid>
      {isNestedDropdown && selectedOption && (
        <Grid item>
          <RenderDropdown
            options={options[selectedOption]}
            spacing={spacing}
            label={options.label}
            required={isRequired}
            formLabel={options.formLabel}
          />
        </Grid>
      )}
    </Grid>
  );
};
RenderDropdown.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.array),
  ]).isRequired,
  spacing: PropTypes.number,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  formLabel: PropTypes.string,
};

RenderDropdown.defaultProps = {
  spacing: 2,
  label: "Select Option",
  isRequired: false,
};

export default RenderDropdown;
