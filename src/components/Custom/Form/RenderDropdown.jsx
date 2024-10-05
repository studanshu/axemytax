/* eslint-disable no-unused-vars */
import { FormControl, Grid, MenuItem, TextField } from "@mui/material";
import MKTypography from "components/MKTypography"; // Ensure this path is correct
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import { errorText } from "./utils";

const RenderDropdown = ({ input, gap = 2 }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();
  const selectedOption = watch(input.formLabel);

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
          <Controller
            control={control}
            name={input.formLabel}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label={input.label}
                required={input.required || false}
                error={errors[input.formLabel]}
                helperText={errorText(errors[input.formLabel]?.message)}
              >
                {renderMenuItems()}
              </TextField>
            )}
          />
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
  input: PropTypes.shape({
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
export default RenderDropdown;
