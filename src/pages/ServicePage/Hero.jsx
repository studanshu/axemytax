// @mui material components
import { Box, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";

// Images
import servicePageTaxImage from "assets/images/service_page_tax.png";
import companiesImage from "assets/images/Companies.png";

const { size, fontWeightRegular, fontWeightMedium } = typography;

function Hero() {
  return (
    <>
      <TopLayout />
      <Box height="100vh" sx={{ background: colors.white.main }}>
        <Container sx={{ height: "100%" }}>
          <Box display="flex" px={4} pt={16} pb={12} gap={8}>
            <Box flex={1}>
              <MKTypography
                variant="h6"
                color="info"
                sx={{
                  fontWeight: fontWeightMedium,
                  textTransform: "uppercase",
                }}
              >
                Filing Returns Made Easy
              </MKTypography>

              <MKTypography
                variant="d2"
                color="blackAlt"
                pt={1}
                sx={{ fontWeight: fontWeightMedium }}
              >
                Using Our Expertise, Save Your Taxes
              </MKTypography>

              <MKTypography
                variant="subtitle1"
                pt={6}
                sx={{
                  fontWeight: fontWeightRegular,
                  color: rgba(colors.blackAlt.main, "0.75"),
                }}
              >
                Leave the stress of taxes to us and let us handle it for you.
                Not only will we handle the task, but we'll also file your
                returns seamlessly.
              </MKTypography>

              <Box display="flex" gap={3} pt={12}>
                <MKButton
                  size="large"
                  variant={"contained"}
                  color={"info"}
                  item
                  sx={{ textTransform: "capitalize", fontSize: size.lg }}
                  fullWidth
                >
                  Start Filling &nbsp; <SendIcon />
                </MKButton>
                <MKButton
                  size="large"
                  variant={"outlined"}
                  color={"blue"}
                  item
                  href="#services"
                  sx={{ textTransform: "capitalize", fontSize: size.lg }}
                  fullWidth
                >
                  Download Guide &nbsp; <SaveAltIcon />
                </MKButton>
              </Box>
            </Box>

            <Box
              display="flex"
              flex={1}
              alignItems="center"
              alignContent="center"
            >
              <img src={servicePageTaxImage} alt="" />
            </Box>
          </Box>

          <Box display="flex" px={4} alignItems="center" alignContent="center">
            <img src={companiesImage} alt="" />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
