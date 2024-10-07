import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { Grid } from "@mui/material";
import typography from "assets/theme/base/typography";
import createSchema from "components/Custom/Form/CreateSchema";
import CustomSnackbar from "components/Custom/Form/CustomSnackbar";
import RenderTextField from "components/Custom/Form/RenderTextField";
import MKButton from "components/MKButton";
import PropTypes from "prop-types";
import { SubServiceContext } from "providers/Context";
import { Suspense, useContext, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useFormSubmit } from "../../api/form/useFromSubmit";
const { size } = typography;
const renderLoader = () => <></>;

function ChecklistAction({ inputs }) {
  const methods = useForm({
    resolver: zodResolver(z.object(createSchema(inputs))),
  });

  const { handleSubmit, formState, reset } = methods;
  const { submitForm, status, isLoading } = useFormSubmit();

  const snackbarRef = useRef();
  useEffect(() => {
    if (status === "success") {
      reset();
      snackbarRef.current.showSnackbar(
        "Inquiry received! We'll get in touch with you.",
        "success"
      );
    } else if (status === "error") {
      snackbarRef.current.showSnackbar(
        "We are unable to take in your request. Please reach out to us via Contact section.",
        "error"
      );
    } else if (status === "loading") {
      snackbarRef.current.showSnackbar("Taking in your request", "info");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const subServiceContextData = useContext(SubServiceContext);

  const onSubmit = async (data) => {
    data["source"] =
      `${subServiceContextData.serviceName}-${subServiceContextData.name}`;
    console.log("Form data to submit:", data);
    await submitForm(data);
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
                variant={
                  formState.isSubmitting || isLoading ? "disabled" : "contained"
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
                Request Callback
              </MKButton>
            </Grid>
          </Grid>
          <CustomSnackbar ref={snackbarRef} />
        </form>
      </FormProvider>
    </Suspense>
  );
}

ChecklistAction.propTypes = {
  inputs: PropTypes.array.isRequired,
};

export default ChecklistAction;
