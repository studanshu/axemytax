// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Images
import bgImage from "assets/images/bg-presentation.webp";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";

export default function Hero() {
  return(
  <>
    <TopLayout/>
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
      </>
  );
}