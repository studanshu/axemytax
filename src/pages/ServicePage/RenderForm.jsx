import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import { useFormSubmit } from "api/form/useFromSubmit";
import typography from "assets/theme/base/typography";
import CheckBoxGridDisplay from "components/Custom/CheckboxGridDisplay";
import createSchema from "components/Custom/Form/CreateSchema";
import CustomSnackbar from "components/Custom/Form/CustomSnackbar";
import RenderDropdown from "components/Custom/Form/RenderDropdown";
import RenderTextField from "components/Custom/Form/RenderTextField";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";
import { ServiceContext } from "providers/Context";
import { useContext, useEffect, useRef } from "react";
import { Form, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
const { size } = typography;

export default function RenderForm({ jsonData }) {
  const formSchema = createSchema([
    jsonData.email,
    jsonData.dropdownBusiness,
    jsonData.checkboxes,
  ]);
  let methods = useForm({
    resolver: zodResolver(z.object(formSchema)),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const { submitForm, status, isLoading } = useFormSubmit();
  const serviceContextData = useContext(ServiceContext);

  const onSubmit = async (data) => {
    function filterCheckboxCollectionKeys() {
      const prefix = "checkboxCollection";
      data.meta =
        "Sub-Services: " +
        Object.keys(data)
          .filter((key) => key.includes(prefix) && data[key])
          .map((key) => key.split("-")[1])
          .join(", ");
      Object.keys(data)
        .filter((key) => key.includes(prefix))
        .forEach((key) => delete data[key]);
    }

    data["source"] = `WhyUs-${serviceContextData.name}`;
    filterCheckboxCollectionKeys();
    console.log("Form Data to submit:", data);
    await submitForm(data);
  };

  const snackbarRef = useRef();
  useEffect(() => {
    if (status === "success") {
      reset();
      snackbarRef.current.showSnackbar(
        "Form submitted successfully! We will get back to you soon.",
        "success"
      );
    } else if (status === "error") {
      snackbarRef.current.showSnackbar(
        "We are unable to take in your request. Please reach out to us by phone or email.",
        "error"
      );
    } else if (status === "loading") {
      snackbarRef.current.showSnackbar("Taking in your request", "info");
    }
  }, [status]);

  return (
    <FormProvider {...methods}>
      <FormGroup sx={{ minWidth: "100%" }}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            className="ctaArea"
            justifyContent="space-between"
            alignItems="flex-end"
            sx={{ px: { xs: 5, xl: 12 }, gap: { xs: 5, lg: 0 } }}
          >
            <Grid item>
              <Grid
                className="options"
                container
                flexDirection="column"
                sx={{ gap: { xs: 4, xl: 6 } }}
              >
                <Grid
                  item
                  sx={{ alignSelf: { xs: "flex-end", md: "flex-start" } }}
                >
                  <SectionHeader
                    caption={jsonData.secondaryCaption}
                    title={jsonData.secondaryTitle}
                    variant="h4Light"
                  />
                </Grid>
                <Grid item className="checkboxes">
                  <CheckBoxGridDisplay
                    items={jsonData.checkboxes.options}
                    itemsPerColumn={3}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              className="buttons"
              item
              xs={12}
              lg={3}
              sx={{ px: { xs: 3, lg: 0 } }}
            >
              <Grid
                container
                flexDirection="column"
                sx={{ gap: { xs: 2, lg: 4 } }}
              >
                <Grid item>
                  <RenderDropdown input={jsonData.dropdownBusiness} />
                </Grid>
                <Grid item>
                  <RenderTextField input={jsonData.email} />
                </Grid>
                <Grid item>
                  <MKButton
                    size="large"
                    variant={
                      isSubmitting || isLoading ? "disabled" : "contained"
                    }
                    color="primary"
                    type="submit"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: size.lg,
                      width: "100%",
                      boxShadow:
                        "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);",
                    }}
                    endIcon={<SendIcon />}
                  >
                    <MKTypography variant="button2" color="white">
                      Send Inquiry
                    </MKTypography>
                  </MKButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <CustomSnackbar ref={snackbarRef} />
        </Form>
      </FormGroup>
    </FormProvider>
  );
}

RenderForm.propTypes = {
  jsonData: PropTypes.shape({
    secondaryCaption: PropTypes.string,
    secondaryTitle: PropTypes.string,
    checkboxes: PropTypes.arrayOf(PropTypes.object),
    dropdownBusiness: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.shape({
      fieldType: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string,
      spacing: PropTypes.string,
    }),
  }).isRequired,
};
