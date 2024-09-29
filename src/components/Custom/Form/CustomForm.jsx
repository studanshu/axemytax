/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SendOutlined } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import typography from "assets/theme/base/typography";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";
import { Form, FormProvider, useForm } from "react-hook-form";
import formValidations from "./formValidations";
import RenderDropdown from "./RenderDropdown";

const { size } = typography;

const CustomForm = ({ jsonData }) => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    console.log(errors);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
  };

  const errorText = (message) => (
    <MKTypography variant="subtitle2" color="red">
      {message}
    </MKTypography>
  );

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} className="formContent">
          <Grid
            container
            className="formInputs"
            spacing={4}
            justifyContent="center"
          >
            {jsonData.inputs.map((input, index) => (
              <Grid
                item
                xs={12}
                lg={input.spacing === "full" ? 12 : 6}
                key={index}
              >
                {input.fieldType === "input" ||
                input.fieldType === "textarea" ? (
                  <TextField
                    fullWidth
                    placeholder={`${input.label} ${input.required ? "*" : ""}`}
                    multiline={input.fieldType === "textarea"}
                    rows={input.fieldType === "textarea" ? 4 : undefined}
                    error={errors[input.formLabel]}
                    helperText={
                      errors[input.formLabel] &&
                      errorText(errors[input.formLabel].message)
                    }
                    {...register(input.formLabel, {
                      required: input.required
                        ? `${input.label} is required`
                        : false,
                      validate: formValidations({
                        type: input.type,
                        required: input.required,
                      }),
                    })}
                    variant="outlined"
                    type={input.type}
                  />
                ) : input.fieldType === "dropdown" ? (
                  <RenderDropdown
                    options={input.options}
                    label={input.label}
                    formLabel={input.formLabel}
                    spacing={4}
                    isRequired={input.required}
                  />
                ) : (
                  <></>
                )}
              </Grid>
            ))}
            <Grid item xs={12} lg={6}>
              <MKButton
                size="large"
                variant={isSubmitting ? "disabled" : "contained"}
                color="primary"
                type="submit"
                sx={{
                  textTransform: "capitalize",
                  fontSize: size.md,
                  width: "100%",
                  boxShadow:
                    "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);",
                }}
                endIcon={<SendOutlined />}
              >
                {jsonData.buttonText}
              </MKButton>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </FormProvider>
  );
};

CustomForm.propTypes = {
  jsonData: PropTypes.shape({
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomForm;
