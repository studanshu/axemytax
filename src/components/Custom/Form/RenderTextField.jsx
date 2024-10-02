import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { errorText } from "./utils";

const RenderTextField = ({ input }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <TextField
      fullWidth
      label={`${input.label} ${input.required ? "*" : ""}`}
      multiline={input.fieldType === "textarea"}
      rows={input.fieldType === "textarea" ? 4 : undefined}
      error={errors[input.formLabel]}
      helperText={errorText(errors[input.formLabel]?.message)}
      {...register(input.formLabel)}
      variant="outlined"
      type={input.type}
    />
  );
};

RenderTextField.propTypes = {
  input: PropTypes.shape({
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    fieldType: PropTypes.string,
    formLabel: PropTypes.string.isRequired,
    type: PropTypes.string,
  }).isRequired,
};

export default RenderTextField;
