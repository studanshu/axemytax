// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Images
import bgImage from "assets/images/LandingPage/bg-presentation.webp";
import { IsUpSmScreen } from "assets/theme/functions/breakpoints";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";

export default function Hero() {
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
            sx={{ gap: 4 }}
          >
            <Grid
              container
              sx={{ gap: 2 }}
              flexDirection="column"
              alignItems="center"
            >
              <MKTypography
                item
                variant={IsUpSmScreen() ? "h2" : "h3"}
                color="white"
                textAlign="center"
              >
                Let Us Manage Compliances,
              </MKTypography>
              <MKTypography
                item
                variant={IsUpSmScreen() ? "h5Light" : "h6Light"}
                color="white"
                textAlign="center"
                px={{ xs: 8, lg: 8 }}
              >
                And Grow Your Business Stress-Free
              </MKTypography>
            </Grid>
            <MKTypography
              item
              variant="subtitle1"
              color="white"
              textAlign="center"
              px={{ xs: 8, xl: 12 }}
              sx={{ display: { xs: "none", lg: "block" } }}
            >
              With over 35 years of experience, AxeMyTax provides high-quality
              Accounting, Auditing, Bookeeping, Taxation Services to Business
              Houses, Startups, and Individuals.
            </MKTypography>
          </Grid>
          <Grid container justifyContent="center" mt={6} sx={{ gap: 2 }}>
            <MKButton
              variant={"outlined"}
              color={"white"}
              item
              href="#services"
            >
              Our Services
            </MKButton>
            <MKButton variant={"contained"} color={"info"} item href="/contact">
              Book consultation
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}
