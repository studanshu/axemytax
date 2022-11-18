// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import WhatsApp from "@mui/icons-material/WhatsApp";
import { Icon } from "@mui/material";

import jsonData from "assets/data/LandingPage/LocateUs";

export default function LocateUs() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container direction="row" alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={7}>
            <MKTypography variant="h3" my={1} color="info">
              Contact Us
            </MKTypography>
            <MKTypography variant="body2" color="main" mb={2}>
            { jsonData["description"] }
            </MKTypography>
            <MKTypography
              component="a"
              href={jsonData["whatsapp"]["link"]}>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <WhatsApp/>
                </MKBox>
                <MKTypography variant="body2" color="main" pl={2}>
                {jsonData["whatsapp"]["number"]}
                </MKTypography>
              </MKBox>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              {jsonData["sections"].map((data, _) => (
                <MKBox display="flex" alignItems="center" p={2}>
                  <MKBox
                    width="3rem"
                    height="3rem"
                    variant="gradient"
                    bgColor="info"
                    color="white"
                    coloredShadow="info"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="xl"
                  >
                    <Icon>{data.icon}</Icon>
                  </MKBox>
                  <MKTypography variant="body2" color="main" pl={2}>
                    {data.text}
                  </MKTypography>
                </MKBox>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
