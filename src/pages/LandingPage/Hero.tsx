import { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useMediaQuery, useTheme } from "@mui/material";

// Images
import bgImage from "assets/images/LandingPage/bg-presentation.webp";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";

const Hero: FC = () => {
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  
  return (
    <>
      <TopLayout />
      <MKBox
        minHeight="75vh"
        px={4}
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            xs={12}
            lg={8}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mx="auto"
            mt={4}
            sx={{ gap: 2 }}
          >
            <Grid
              container
              sx={{ gap: 1 }}
              flexDirection="column"
              alignItems="center"
            >
              <MKTypography
                variant={isUpSm ? "h3" : "h4"}
                color="white"
                textAlign="center"
                fontWeight="bold"
              >
                Let Us Manage Compliances,
              </MKTypography>
              <MKTypography
                variant={isUpSm ? "h5" : "h6"}
                color="white"
                textAlign="center"
                fontWeight="medium"
                px={{ xs: 8, lg: 8 }}
              >
                And Grow Your Business Stress-Free
              </MKTypography>
            </Grid>
            <MKTypography
              variant="subtitle1"
              color="white"
              textAlign="center"
              fontWeight="light"
              px={{ xs: 8, xl: 12 }}
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              With over 35 years of experience, AxeMyTax provides high-quality
              Accounting, Auditing, Bookeeping, Taxation Services to Business
              Houses, Startups, and Individuals.
            </MKTypography>
          </Grid>
          <Grid container justifyContent="center" mt={8} sx={{ gap: 2 }}>
            <MKButton
              variant={"outlined"}
              color={"white"}
              href="#services"
            >
              Our Services
            </MKButton>
            <MKButton variant={"contained"} color={"info"} href="/contact">
              Book consultation
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
};

export default Hero;
