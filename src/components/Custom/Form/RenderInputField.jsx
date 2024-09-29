import { useFormContext } from "react-hook-form";

const { TextField } = require("@mui/material");
// const { default: RenderDropdown } = require("./RenderDropdown");
const PropTypes = require("prop-types");

// label: "Name",
// label: "Phone",
// label: "Email",
// label: "Company Name",
// label: "Select Service",
// label: "Select Sub-Service",
// label: "Select Business Type",
// label: "Select Budget",
// label: "Type In Your Query",

const commonProps = {
  sx: { width: "100%" },
  variant: "outlined",
};

const RenderInputField = ({ input }) => {
  console.log(input);
  const { register } = useFormContext();
  switch (input.label) {
    case "name":
      return (
        <TextField
          {...commonProps}
          placeholder={`${input.label} ${input.required ? "*" : ""}`}
          {...register(
            "name",
            input.required ? { required: `${input.name} is required.` } : {}
          )}
          required={input.required}
          type={input.type}
        />
      );
    case "email":
      return (
        <TextField
          {...commonProps}
          placeholder={`${input.label} ${input.required ? "*" : ""}`}
          {...register(
            "email",
            input.required ? { required: `${input.name} is required.` } : {}
          )}
          required={input.required}
          type={input.type}
        />
      );
    case "phone":
      return (
        <TextField
          {...commonProps}
          placeholder={`${input.label} ${input.required ? "*" : ""}`}
          {...register(
            "phone",
            input.required ? { required: `${input.name} is required.` } : {}
          )}
          required={input.required}
          type={input.type}
        />
      );
    case "Company Name":
      return (
        <TextField
          {...commonProps}
          placeholder={`${input.label} ${input.required ? "*" : ""}`}
          {...register(
            "companyName",
            input.required ? { required: `${input.name} is required.` } : {}
          )}
          required={input.required}
          type={input.type}
        />
      );
    case "Type In Your Query":
      return (
        <TextField
          multiline
          rows={4}
          {...register(
            "Query",
            input.required ? { required: `${input.name} is required.` } : {}
          )}
          required={input.required}
          placeholder={input.label}
          sx={{
            width: "100%",
            color: "blue",
          }}
        />
      );
    // case "dropdown":
    //   return (
    //     <RenderDropdown
    //       options={input.options}
    //       label={input.label}
    //       spacing={4}
    //       isRequired={input.required}
    //     />
    //   );
    default:
      return null;
  }
};

RenderInputField.propTypes = {
  input: PropTypes.shape({
    fieldType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
};

export default RenderInputField;
