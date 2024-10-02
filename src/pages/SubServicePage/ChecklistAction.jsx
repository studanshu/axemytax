import { zodResolver } from "@hookform/resolvers/zod";
import SendIcon from "@mui/icons-material/Send";
import { Grid, TextField } from "@mui/material";
import { useFormSubmit } from "api/form/useFromSubmit";
import typography from "assets/theme/base/typography";
import CustomSnackbar from "components/Custom/Form/CustomSnackbar";
import { errorText } from "components/Custom/Form/utils";
import MKButton from "components/MKButton";
import PropTypes from "prop-types";
import { Suspense, useEffect, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
const { size } = typography;
const renderLoader = () => <p>Loading</p>;

function ChecklistAction({ parentName }) {
  const methods = useForm({
    resolver: zodResolver(
      z.object({
        name: z.string().min(5, "Name should be atleast 5 characters."),
        phone: z.string().regex(/^\d{10}$/, "Invalid Phone Number"),
        email: z.string().email("Invalid Email"),
      })
    ),
  });

  const { register, handleSubmit, formState, reset } = methods;
  const { submitForm, status } = useFormSubmit();

  const snackbarRef = useRef();
  useEffect(() => {
    if (status === "success") {
      reset();
      snackbarRef.current.showSnackbar(
        "Query received! We'll get in touch with you.",
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
  }, [status]);

  const onSubmit = async (data) => {
    console.log(data);
    data["source"] = parentName;
    await submitForm(data);
  };

  return (
    <Suspense fallback={renderLoader()}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "`100%" }}>
          <Grid
            container
            item
            className="ctaArea"
            justifyContent="center"
            sx={{ gap: { xs: 2, lg: 4 } }}
            px={12}
          >
            <Grid item className="name">
              <TextField
                label="Name *"
                variant="outlined"
                {...register("name")}
                error={formState.errors["name"]}
                helperText={errorText(formState.errors["name"]?.message)}
              />
            </Grid>
            <Grid item className="phone">
              <TextField
                label="Phone Number *"
                variant="outlined"
                {...register("phone")}
                error={formState.errors["phone"]}
                helperText={errorText(formState.errors["phone"]?.message)}
              />
            </Grid>
            <Grid item className="email">
              <TextField
                label="Email address *"
                variant="outlined"
                {...register("email")}
                error={formState.errors["email"]}
                helperText={errorText(formState.errors["email"]?.message)}
              />
            </Grid>
            <Grid item className="button">
              <MKButton
                size="large"
                variant={formState.isSubmitting ? "disabled" : "contained"}
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
  parentName: PropTypes.string,
};

ChecklistAction.defaultProps = {
  parentName: "SubServicePage",
};

export default ChecklistAction;
