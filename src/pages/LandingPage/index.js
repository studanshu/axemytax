// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


// Images
import bgImage from "assets/images/bg-presentation.webp";
import logo from "assets/images/axemytax-logo-transparent.png";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import routes from "routes";
import footerRoutes from "footer.routes";

// Self - Created
import HighLevelServices from "./HighLevelServices";
import OurServices from "./OurServices";
import Subscribe from "./Subscribe";
import Team from "./Team";
import Blogs from "./Blogs";
import Counters from "./Counters";
import LocateUs from "./LocateUs";
import ContactIcon from "./ContactIcon";


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
          label: "Book Consultation",
          color: "info",
        }}
        center
        sticky
      />
      <ContactIcon
        brand=""
        routes={routes}
        action={{
          type: "external",
          route: "/",
          label: "Book Consultation",
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
          <Grid container  xs={12} lg={8} justifyContent="center" mx="auto" flexDirection="vertical">
            <MKTypography
              item
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
              item
              variant="h3"
              color="white"
              mt={-2}
              px={{ xs: 8, lg: 8 }}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["xl"],
                },
                [breakpoints.down("sm")]: {
                  fontSize: size["md"],
                },
              })}
            >
              So You Can Run Business
            </MKTypography>
            <MKTypography
              item
              variant="caption"
              color="white"
              textAlign="center"
              px={{ xs: 8, xl: 12 }}
              mt={1.5}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize:  size["xxs"]
                },
                [breakpoints.down("sm")]: {
                  visibility: "hidden"
                },
              })}
            >
              With over 35 years of experience, AxeMyTax provides high-quality Accounting, Auditing, Bookeeping, Taxation  Services to Business Houses, Startups, and Individuals.
            </MKTypography>
          </Grid>
          <Grid container justifyContent="center" mt={2} gap={2}
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    mt: -4,
                  },
                })}
          >
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
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.5),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { info } }) => info,
        }}
      >
        <Counters />
        <HighLevelServices/>
        <OurServices/>
        <Team />
        <Blogs />
        <LocateUs />
        <Subscribe />
      </Card>
      
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
