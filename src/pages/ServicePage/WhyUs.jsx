import SendIcon from "@mui/icons-material/Send";
import { Box, Container, Grid } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import CheckBoxGridDisplay from "components/Custom/CheckboxGridDisplay";
import RenderDropdown from "components/Custom/Form/RenderDropdown";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";
import { Suspense } from "react";
import { FormProvider } from "react-hook-form";
const renderLoader = () => <p>Loading</p>;
const { size } = typography;

const { light } = colors;

function WhyUs({ jsonData }) {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={{ background: light.main, py: { xs: 3, xl: 6 } }}>
        <Container>
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="WhyUs"
            sx={{ gap: { xs: 6, xl: 12 }, px: { xl: 2 } }}
          >
            <Grid
              container
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ gap: { xs: 4, xl: 6 } }}
              className="whyUsContent"
            >
              <SectionHeader
                caption={jsonData.caption}
                title={jsonData.title}
                sx={{ px: { xs: 5, lg: 0 } }}
              />
              <ReasonCards reasons={jsonData.reasons} />
            </Grid>
            <FormProvider>
              <FormGroup sx={{ minWidth: "100%" }}>
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
                          items={jsonData.options}
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
                        <RenderDropdown input={jsonData.dropdownBudget} />
                      </Grid>
                      <Grid item>
                        <MKButton
                          size="large"
                          variant="contained"
                          color="info"
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
              </FormGroup>
            </FormProvider>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}

WhyUs.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string,
    title: PropTypes.string,
    reasons: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    secondaryCaption: PropTypes.string,
    secondaryTitle: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    dropdownBusiness: PropTypes.arrayOf(PropTypes.string),
    dropdownBudget: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default WhyUs;
