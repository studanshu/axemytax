import PropTypes from "prop-types";
import { Suspense, useState } from "react";

// @mui material components
import SendIcon from "@mui/icons-material/Send";
import { Box, Container, Grid } from "@mui/material";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Kit 2 React helper functions

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Self-Created
import SubServiceNav from "./SubServiceNav";

// Import JSON
import SectionHeader from "components/Custom/SectionHeader";

const renderLoader = () => <p>Loading</p>;

const { size, fontWeightMedium } = typography;
const { light, white } = colors;
const SubService = ({ jsonData }) => {
  const SubServiceJson = jsonData;
  const ctaKeys = Object.keys(SubServiceJson.cta);
  const [selSubService, setSelSubService] = useState(ctaKeys[1]);
  const cta = SubServiceJson.cta[selSubService] || {};
  const content = cta["content"] || [];

  return (
    <Suspense fallback={renderLoader()}>
      <Box mt={16} sx={{ background: light.main }}>
        <Container>
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ gap: { xs: 4, xl: 5 } }}
          >
            <SectionHeader
              caption={SubServiceJson.caption}
              title={SubServiceJson.title}
              sx={{ mt: { xs: 2, lg: 6 }, px: { xs: 5, lg: 0 } }}
            />
            <Grid
              container
              width="100%"
              display="flex"
              flexDirection="column"
              px={5}
              sx={{ gap: { xs: 2, xl: 9 } }}
            >
              <Grid items>
                <SubServiceNav
                  subServicesList={ctaKeys}
                  selSubService={selSubService}
                  setSelSubService={setSelSubService}
                />
              </Grid>
              <Grid items sx={{ mx: { xs: 3, xl: 15 } }}>
                <Grid
                  container
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    mb: { xs: 2, lg: 6 },
                    gap: { xs: 4, xxl: 16 },
                    flexWrap: { xs: "wrap", xl: "nowrap" },
                  }}
                >
                  <Grid
                    items
                    className="ctaLeft"
                    xl={5}
                    sx={{ mx: { md: 12, xl: 0 } }}
                  >
                    <Grid
                      container
                      position="relative"
                      display="flex"
                      flexDirection="column"
                      gap={5}
                      sx={{
                        placeContent: "center",
                        placeItems: "center",
                        pt: { xs: 9, xl: 13 }, // Padding top
                        pb: { xs: 8, xl: 12 }, // Padding bottom
                        borderRadius: 2,
                        overflow: "hidden", // Ensures content stays within the rounded borders
                        background: `
                          linear-gradient(
                            rgba(0, 155, 220, 0.25), /* #009BDC with 25% opacity */
                            rgba(0, 155, 220, 0.25)
                          ),
                          url(${cta.image})`, // Background image
                        backgroundSize: "cover", // Cover the entire container
                        backgroundPosition: "center", // Center the image
                        backgroundRepeat: "no-repeat", // Prevent the image from repeating
                        boxShadow:
                          "0px 61.498477935791016px 49.19877624511719px 0px rgba(0, 0, 0, 7%), 0px 25.69259262084961px 20.554075241088867px 0px rgba(0, 0, 0, 5%), 0px 13.736489295959473px 10.989192008972168px 0px rgba(0, 0, 0, 4%), 0px 7.700563907623291px 6.160450458526611px 0px rgba(0, 0, 0, 4%), 0px 4.089711666107178px 3.2717692852020264px 0px rgba(0, 0, 0, 3%), 0px 1.7018204927444458px 1.3614563941955566px 0px rgba(0, 0, 0, 2%);",
                      }}
                    >
                      <MKTypography
                        item
                        variant="h4"
                        color="white"
                        sx={{ textAlign: "center", zIndex: 1 }}
                        px={5}
                      >
                        {cta.title}
                      </MKTypography>
                      <MKTypography
                        item
                        variant="subtitle2"
                        color="white"
                        px={5}
                        sx={{
                          textAlign: "center",
                          zIndex: 1,
                        }}
                      >
                        {cta.des}
                      </MKTypography>

                      {cta.action && (
                        <MKButton
                          variant="text"
                          color="secondary"
                          item
                          href="#services"
                          sx={{
                            textTransform: "capitalize",
                            fontSize: size.xs,
                            background: `${white.main} !important`,
                          }}
                          endIcon={<SendIcon />}
                        >
                          {cta.action}
                        </MKButton>
                      )}
                    </Grid>
                  </Grid>
                  <Grid item className="bullets" xl={7}>
                    <Grid
                      container
                      display="flex"
                      flexWrap="wrap"
                      gap={4}
                      justifyContent="space-evenly"
                      alignItems="space-evenly"
                    >
                      {content.map((item, index) => (
                        <Grid
                          item
                          key={index}
                          display="flex"
                          flexDirection="column"
                          gap={1}
                          xs={4}
                        >
                          {item.icon}

                          <MKTypography
                            variant="h6"
                            color="secondary"
                            sx={{
                              fontWeight: fontWeightMedium,
                            }}
                          >
                            {item.title}
                          </MKTypography>

                          <MKTypography variant="subtitle2" color="black50">
                            {item.des}
                          </MKTypography>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

SubService.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string,
    cta: PropTypes.object.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default SubService;
