import { FormControl, Grid, MenuItem, TextField } from "@mui/material";
import MKTypography from "components/MKTypography"; // Ensure this path is correct
import PropTypes from "prop-types";
import { useState } from "react";

const RenderDropdown = ({ options, label, spacing, isRequired }) => {
  const [selectedOption, setSelectedOption] = useState("");

  //   useEffect(() => {
  //     if (typeof options === "object" && !Array.isArray(options)) {
  //       setSelectedOption(Object.keys(options)[0]);
  //     } else if (Array.isArray(options)) {
  //       setSelectedOption(options[0]);
  //     }
  //   }, [options]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (typeof options === "object" && !Array.isArray(options)) {
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
              {Object.keys(options).map(
                (key, index) =>
                  key !== "label" && (
                    <MenuItem key={index} value={key}>
                      <MKTypography variant="h6Light" color="secondary">
                        {key}
                      </MKTypography>
                    </MenuItem>
                  )
              )}
            </TextField>
          </FormControl>
        </Grid>
        {selectedOption && (
          <Grid item>
            <RenderDropdown
              options={options[selectedOption]}
              spacing={spacing}
              label={options.label}
              required={isRequired}
            />
          </Grid>
        )}
      </Grid>
    );
  } else {
    return (
      <FormControl fullWidth>
        <TextField
          value={selectedOption}
          onChange={handleOptionChange}
          select
          label={label}
          required={isRequired}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              <MKTypography variant="h6Light" color="secondary">
                {option}
              </MKTypography>
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    );
  }
};
RenderDropdown.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.array),
  ]).isRequired,
  spacing: PropTypes.number,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
};

RenderDropdown.defaultProps = {
  spacing: 2,
  label: "Select Option",
  isRequired: false,
};

export default RenderDropdown;
