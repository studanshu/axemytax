/* eslint-disable no-unused-vars */
import { FormControl, Grid, MenuItem, TextField } from "@mui/material";
import MKTypography from "components/MKTypography";
import { Controller, useFormContext } from "react-hook-form";
import { errorText } from "./utils";

interface NestedEnumOption {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: Record<string, NestedEnumOption> | string[];
}

interface DropdownInput {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: Record<string, NestedEnumOption> | string[];
}

interface RenderDropdownProps {
  input: DropdownInput;
  gap?: number;
}

const RenderDropdown = ({ input, gap = 2 }: RenderDropdownProps) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();
  
  const selectedOption = watch(input.formLabel) as string | undefined;

  const isNestedDropdown = input.type === "nestedEnum";

  const renderMenuItems = () => {
    let optionList: string[] = [];
    if (isNestedDropdown && input.options) {
      optionList = Object.keys(input.options as Record<string, NestedEnumOption>);
    } else if (input.options) {
      optionList = input.options as string[];
    }

    return optionList.map((key, index) => (
      <MenuItem key={index} value={key}>
        <MKTypography variant="subtitle1" color="secondary">
          {key}
        </MKTypography>
      </MenuItem>
    ));
  };

  const error = errors[input.formLabel];
  const errorMessage = error?.message as string | undefined;

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
                error={!!error}
                helperText={errorText(errorMessage)}
                InputProps={{
                  style: {
                    minHeight: '56px',
                  },
                }}
                SelectProps={{
                  displayEmpty: true,
                  style: {
                    minHeight: '40px',
                  },
                }}
              >
                {renderMenuItems()}
              </TextField>
            )}
          />
        </FormControl>
      </Grid>
      {isNestedDropdown && selectedOption && input.options && typeof input.options === 'object' && !Array.isArray(input.options) && (
        <Grid item>
          <RenderDropdown 
            input={(input.options as Record<string, DropdownInput>)[selectedOption]} 
            gap={gap} 
          />
        </Grid>
      )}
    </Grid>
  );
};

export default RenderDropdown;
