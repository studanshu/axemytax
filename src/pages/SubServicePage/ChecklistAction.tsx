import 'config/cms'; // Initialize CMS
import { useContactForm, CaptureField } from '@studanshu/google-sheets-cms';
import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { Grid } from "@mui/material";
import typography from "assets/theme/base/typography";
import createSchema from "components/Custom/Form/CreateSchema";
import CustomSnackbar, { CustomSnackbarHandle } from "components/Custom/Form/CustomSnackbar";
import RenderTextField from "components/Custom/Form/RenderTextField";
import MKButton from "components/MKButton";
import { SubServiceContext } from "providers/Context";
import { FC, Suspense, useContext, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const { size } = typography;
const renderLoader = () => <></>;

interface FormInput {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: Record<string, any> | string[];
}

interface ChecklistActionProps {
  inputs: FormInput[];
}

const ChecklistAction: FC<ChecklistActionProps> = ({ inputs }) => {
  const customSchema = z.object(createSchema(inputs)).refine(
    (data) => {
      // At least one of email or phone must be filled
      const hasEmail = data.email && data.email.trim().length > 0;
      const hasPhone = data.phone && data.phone.trim().length > 0;
      return hasEmail || hasPhone;
    },
    {
      message: "Please provide either email or phone number",
      path: ["email"], // Show error on email field
    }
  );

  const methods = useForm({
    resolver: zodResolver(customSchema),
  });

  const { handleSubmit, reset } = methods;
  
  // Use the google-sheets-cms contact form hook
  const { mutate: submitContactForm, isPending, isSuccess, isError, error } = useContactForm({
    capture: [CaptureField.UserAgent],
  });

  const snackbarRef = useRef<CustomSnackbarHandle>(null);

  useEffect(() => {
    if (isSuccess) {
      reset();
      snackbarRef.current?.showSnackbar(
        "Form submitted successfully! We will get back to you soon.",
        "success"
      );
    } else if (isError) {
      if (error) console.error('Form submission error:', error);
      snackbarRef.current?.showSnackbar(
        "We are unable to take in your request. Please reach out to us by phone or email.",
        "error"
      );
    } else if (isPending) {
      snackbarRef.current?.showSnackbar("Taking in your request", "info");
    }
  }, [isSuccess, isError, isPending, reset, error]);

  const subServiceContextData = useContext(SubServiceContext);

  const onSubmit = (data: any) => {
    const phoneInfo = data.phone ? `\n\nPhone: ${data.phone}` : '';
    
    const contactData = {
      name: data.name || 'Website Visitor',
      email: data.email || 'noreply@axemytax.com',
      subject: `${subServiceContextData.serviceName} - ${subServiceContextData.name}`,
      message: `Request callback for document checklist${phoneInfo}`,
      source: `${subServiceContextData.serviceName}-${subServiceContextData.name}`,
      honeypot: '',
    };
    
    submitContactForm(contactData);
  };

  return (
    <Suspense fallback={renderLoader()}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Grid
            container
            item
            className="ctaArea"
            justifyContent="center"
            sx={{ gap: { xs: 2, lg: 4 } }}
          >
            <Grid item className="name">
              <RenderTextField input={inputs[0]} />
            </Grid>
            <Grid item className="phone">
              <RenderTextField input={inputs[1]} />
            </Grid>
            <Grid item className="email">
              <RenderTextField input={inputs[2]} />
            </Grid>
            <Grid item className="button">
              <MKButton
                size="large"
                variant={isPending ? "outlined" : "contained"}
                color="primary"
                type="submit"
                disabled={isPending}
                sx={{
                  textTransform: "capitalize",
                  fontSize: size.lg,
                  width: "100%",
                  boxShadow:
                    "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);",
                }}
                endIcon={<SendIcon />}
              >
                Request Callback
              </MKButton>
            </Grid>
          </Grid>
          <CustomSnackbar ref={snackbarRef} />
        </form>
      </FormProvider>
    </Suspense>
  );
};

export default ChecklistAction;
