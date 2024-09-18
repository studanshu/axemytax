/* eslint-disable react/jsx-no-duplicate-props */
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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import macbook from "assets/images/LandingPage/wordcloud.png";

export default function Subscribe() {
  return (
    <MKBox component="section" mt={8} id="subscribe">
      <Container>
        <Grid container alignItems="center" >
          <Grid item xs={12} md={6} sx={{ mb: { xs: 12, md: 0 } }}>
            <MKTypography variant="h3" color="info">Get Your Latest Tax Updates</MKTypography>
            <MKTypography variant="body2" color="main" mt={2}>
            Get to know about important Government Compliances, Tax Saving Schemes, GST Rules, and many more.
            </MKTypography>
            <Grid container spacing={1} mt={4}>
              <Grid item xs={8}>
                <MKInput type="email" label="Email Here..." fullWidth />
              </Grid>
              <Grid item xs={4}>
                <MKButton variant="gradient" color="info" sx={{ height: "100%" }}>
                  Subscribe
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr:"auto", ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={macbook} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
