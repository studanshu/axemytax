import { TextField } from "@mui/material";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { errorText } from "./utils";

interface FormInput {
  label: string;
  required?: boolean;
  fieldType: string;
  formLabel: string;
  type: string;
}

interface RenderTextFieldProps {
  input: FormInput;
  props?: Record<string, any>;
  children?: ReactNode;
}

// eslint-disable-next-line react/prop-types
const RenderTextField = ({ input, props = {}, children = undefined }: RenderTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[input.formLabel];
  const errorMessage = error?.message as string | undefined;

  return (
    <TextField
      {...props}
      fullWidth
      label={`${input.label} ${input.required ? "*" : ""}`}
      multiline={input.fieldType === "textarea"}
      rows={input.fieldType === "textarea" ? 4 : undefined}
      error={!!error}
      helperText={errorText(errorMessage)}
      {...register(input.formLabel)}
      variant="outlined"
      type={input.type}
      InputProps={{
        style: {
          minHeight: '56px',
        },
        // eslint-disable-next-line react/prop-types
        ...props?.InputProps,
      }}
    >
      {children}
    </TextField>
  );
};

export default RenderTextField;
