import { FC, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmit } from "api/form/useFromSubmit";
import DefaultFormFields from "assets/data/Form/DefaultFormFields";
import wordcloud from "assets/images/LandingPage/wordcloud.png";
import createSchema from "components/Custom/Form/CreateSchema";
import CustomSnackbar, { CustomSnackbarHandle } from "components/Custom/Form/CustomSnackbar";
import RenderTextField from "components/Custom/Form/RenderTextField";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const Subscribe: FC = () => {
  const emailField = DefaultFormFields.email;
  const methods = useForm({
    resolver: zodResolver(z.object(createSchema([emailField]))),
  });

  const { handleSubmit, reset } = methods;

  const { submitForm, status, isSubmitting } = useFormSubmit();

  const onSubmit = async (data: Record<string, unknown>) => {
    data["source"] = "LandingPage-Subscribe";
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
    <MKBox component="section" mt={24} id="subscribe">
      <Container>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container alignItems="center" spacing={2} px={4}>
              <Grid item xs={12} md={6} sx={{ mb: { xs: 12, md: 0 } }}>
                <MKTypography variant="h3" color="info">
                  Get Your Latest Tax Updates
                </MKTypography>
                <MKTypography variant="subtitle1" color="text" mt={2}>
                  Get to know about important Government Compliances, Tax Saving
                  Schemes, GST Rules, and many more.
                </MKTypography>
                <Grid
                  container
                  spacing={4}
                  mt={4}
                  display="flex"
                  justifyContent="space-around"
                >
                  <Grid item xs={8}>
                    <RenderTextField input={emailField} />
                  </Grid>
                  <Grid item xs={4}>
                    <MKButton
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                      sx={{ height: "100%", width: "100%" }}
                    >
                      Subscribe
                    </MKButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={5} sx={{ mr: "auto", ml: "auto" }}>
                <MKBox position="relative">
                  <Box
                    component="img"
                    src={wordcloud}
                    alt="wordcloud"
                    width="100%"
                  />
                </MKBox>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
        <CustomSnackbar
          ref={snackbarRef}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </MKBox>
  );
};

export default Subscribe;
