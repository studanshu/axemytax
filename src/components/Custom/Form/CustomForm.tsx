import { zodResolver } from "@hookform/resolvers/zod";
import { SendOutlined } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useFormSubmit } from "api/form/useFromSubmit";
import typography from "assets/theme/base/typography";
import MKButton from "components/MKButton";
import {
  PageContext,
  ServiceContext,
  SubServiceContext,
} from "providers/Context";
import { useContext, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import createSchema from "./CreateSchema";
import CustomSnackbar, { CustomSnackbarHandle } from "./CustomSnackbar";
import RenderDropdown from "./RenderDropdown";
import RenderTextField from "./RenderTextField";

const { size } = typography;

export interface FormInput {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: Record<string, any> | string[];
}

interface CustomFormProps {
  jsonData: {
    inputs: FormInput[];
    buttonText: string;
  };
}

const CustomForm = ({ jsonData }: CustomFormProps) => {
  const customSchema = z.object(
    createSchema(jsonData.inputs) // To avoid modifying the original data
  );

  const subServiceData = useContext(SubServiceContext);
  const serviceData = useContext(ServiceContext);
  const pageContext = useContext(PageContext);

  const serviceName = subServiceData?.serviceName || serviceData?.name || "";
  const subServiceName = subServiceData?.name || "";

  const methods = useForm({
    resolver: zodResolver(customSchema),
    defaultValues: {
      service: serviceName,
      subService: subServiceName,
      budget: "",
      businessType: "",
    },
  });

  const { handleSubmit, reset } = methods;

  const { submitForm, status, isSubmitting } = useFormSubmit();

  const onSubmit = async (data: Record<string, any>) => {
    if (pageContext !== undefined) {
      data["source"] = `page-${pageContext.name}`;
    } else {
      data["source"] = `${serviceName}-${subServiceName}`;
    }
    await submitForm(data);
  };

  const snackbarRef = useRef<CustomSnackbarHandle>(null);
  
  useEffect(() => {
    if (status === "success") {
      reset();
      snackbarRef.current?.showSnackbar(
        "Form submitted successfully! We will get back to you soon.",
        "success"
      );
    } else if (status === "error") {
      snackbarRef.current?.showSnackbar(
        "We are unable to take in your request. Please reach out to us by phone or email.",
        "error"
      );
    } else if (isSubmitting) {
      snackbarRef.current?.showSnackbar("Taking in your request", "info");
    }
  }, [status, isSubmitting, reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  <RenderTextField input={input} />
                ) : input.fieldType === "dropdown" ? (
                  <RenderDropdown input={input as any} gap={4} />
                ) : (
                  <></>
                )}
              </Grid>
            ))}
            <Grid item xs={12} lg={6}>
              <MKButton
                size="large"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
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
      </form>
      <CustomSnackbar ref={snackbarRef} />
    </FormProvider>
  );
};

export default CustomForm;
