import { FormControl, Grid, MenuItem, TextField, Checkbox, ListItemText } from "@mui/material";
import MKTypography from "components/MKTypography";
import { Controller, useFormContext } from "react-hook-form";
import { errorText } from "./utils";

interface MultiSelectInput {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: string[];
}

interface RenderMultiSelectProps {
  input: MultiSelectInput;
  gap?: number;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const RenderMultiSelect = ({ input, gap = 2 }: RenderMultiSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[input.formLabel];
  const errorMessage = error?.message as string | undefined;
  const options = input.options || [];

  return (
    <Grid container spacing={gap} flexDirection="column">
      <Grid item>
        <FormControl fullWidth>
          <Controller
            control={control}
            name={input.formLabel}
            defaultValue={[]}
            render={({ field }) => (
              <TextField
                select
                label={input.label}
                required={input.required || false}
                error={!!error}
                helperText={errorText(errorMessage)}
                value={field.value || []}
                onChange={(e) => field.onChange(e.target.value)}
                InputProps={{
                  style: {
                    minHeight: '56px',
                  },
                }}
                SelectProps={{
                  multiple: true,
                  displayEmpty: true,
                  renderValue: (selected) => {
                    const selectedArray = selected as string[];
                    if (selectedArray.length === 0) {
                      return "";
                    }
                    return `${selectedArray.length} service${selectedArray.length > 1 ? 's' : ''} selected`;
                  },
                  MenuProps,
                  style: {
                    minHeight: '40px',
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    <Checkbox checked={((field.value as string[]) || []).indexOf(option) > -1} />
                    <ListItemText
                      primary={
                        <MKTypography variant="subtitle1" color="secondary">
                          {option}
                        </MKTypography>
                      }
                    />
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default RenderMultiSelect;
