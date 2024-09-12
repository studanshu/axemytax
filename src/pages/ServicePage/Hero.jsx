import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SendIcon from "@mui/icons-material/Send";
import { Box, Container, Grid } from "@mui/material";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";

// Images
import servicePageTaxImage from "assets/images/service_page_tax.png";
import SectionHeader from "components/Custom/SectionHeader";

const { size } = typography;

function Hero() {
  return (
    <>
      <TopLayout />
      <Container>
        <Box pt={24} px={4}>
          <Grid container spacing={8}>
            <Grid item xs={12} lg={6} p={0}>
              <Box display="flex" flexDirection="column" gap={6}>
                <SectionHeader
                  caption="Filing Returns Made Easy"
                  title="Using Our Expertise, Save Your Taxes"
                  variant="h2"
                  color="black"
                />
                <MKTypography variant="body1" color="black75">
                  Leave the stress of taxes to us and let us handle it for you.
                  Not only will we handle the task, but we will also file your
                  returns seamlessly.
                </MKTypography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                src={servicePageTaxImage}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} mt={8} sx={{ width: { lg: "50%" } }}>
            <Grid item xs={12} md={6}>
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
                Start Filing
              </MKButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKButton
                size="large"
                variant="outlined"
                color="lightBlue"
                href="#services"
                sx={{
                  textTransform: "capitalize",
                  fontSize: size.lg,
                  width: "100%",
                }}
                endIcon={<SaveAltIcon />}
              >
                Download Guide
              </MKButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default Hero;
