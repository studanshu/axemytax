/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import MapIcon from '@mui/icons-material/Map';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WhatsApp from "@mui/icons-material/WhatsApp";
import { Icon } from "@mui/material";

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
            We are renowned Chartered Accountants in India. All types of chartered accountant services are provided by us in Bangalore & all major cities in India, including accounting, auditing, business process outsourcing, income tax, financial services, payroll accounting, project finance, and industrial licensing.
            </MKTypography>
            <MKTypography
              component="a"
              href="https://wa.me/919831054784?text=I%27m%20interested%20in%20your%20service.%20I%20want%20to%20Book%20An%20Appointment.">
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
                  +91-98310-54784
                </MKTypography>
              </MKBox>
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
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
                  <CallIcon/>
                </MKBox>
                <MKTypography variant="body2" color="main" pl={2}>
                +91-98310-54784
                  <br />
                  +91-93310-16876
                </MKTypography>
              </MKBox>
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
                  <EmailIcon/>
                </MKBox>
                <MKTypography variant="body2" color="main" pl={2}>
                  info@axemytax.in
                </MKTypography>
              </MKBox>
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
                  <MapIcon/>
                </MKBox>
                <MKTypography variant="body2" color="main" pl={2}>
                  Kolkata / Bengaluru
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
