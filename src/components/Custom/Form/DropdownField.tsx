import { forwardRef } from "react";
import { MenuItem } from "@mui/material";
import MKInput, { MKInputProps } from "components/MKInput";
import MKTypography from "components/MKTypography";

export interface DropdownFieldProps extends MKInputProps {
  options: string[];
}

const DropdownField = forwardRef<HTMLDivElement, DropdownFieldProps>(
  ({ options, InputProps, SelectProps, ...props }, ref) => (
    <MKInput
      {...props}
      ref={ref}
      select
      InputProps={{
        ...InputProps,
        style: { minHeight: "56px", ...InputProps?.style },
      }}
      SelectProps={{
        displayEmpty: true,
        ...SelectProps,
        style: { minHeight: "40px", ...SelectProps?.style },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          <MKTypography variant="subtitle1" color="secondary">
            {option}
          </MKTypography>
        </MenuItem>
      ))}
    </MKInput>
  ),
);
DropdownField.displayName = "DropdownField";
export default DropdownField;
