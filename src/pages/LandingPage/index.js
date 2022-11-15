// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/bg-presentation.webp";
import logo from "assets/images/axemytax-logo-transparent.png";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import routes from "routes";
import footerRoutes from "footer.routes";
import MKButton from "components/MKButton";
import contained from "assets/theme/components/button/contained";


export default function LandingPage() {
  return (
    <>
      <DefaultNavbar
        brand=""
        logoUrl={logo}
        routes={routes}
        action={{
          type: "external",
          route: "/",
          label: "Login",
          color: "info",
        }}
        center
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        
        <Container >
          <Grid container  xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
                [breakpoints.down("sm")]: {
                  fontSize: size["2xl"],
                },
              })}
            >
              We Handle Your Taxes,{" "}
            </MKTypography>
            <MKTypography
              variant="h3"
              color="white"
              textAlign="center"
              px={{ xs: 8, lg: 8 }}
              fontSize="auto"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["xl"],
                  mt: -1
                },
                [breakpoints.down("sm")]: {
                  fontSize: size["md"],
                  mt: -2,
                },
              })}
            >
              So You Can Run Business
            </MKTypography>
          </Grid>
          <Grid container justifyContent="center" mt={2} gap={2}>
            <MKButton
                  variant={"outlined"}
                  color={"white"}
                  item
                >
                  Our Services
            </MKButton>
            <MKButton
              variant={"contained"}
              color={"info"}
              item
            >
              Book consultation
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}
