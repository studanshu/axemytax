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
import Card from "@mui/material/Card"

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/hemanshu.jpg";
import team2 from "assets/images/rajendra.jpg";
import team3 from "assets/images/alok.jpg";

function Team() {
  return (
    <Card
      sx={{
        p: 4,
        mx: { xs: 2, lg: 3 },
        mt: 4,
        backgroundColor: ({ palette: { info }, functions: { rgba } }) => rgba(info.focus, 0.8),
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}
              sx = {({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("lg")]: {
                  visibility: "hidden",
                  mt:6,
                  fontSize: "0",
                  mb: -6,
                },
              })}
              >
              AxeMyTax was founded in 1985 with the aim of providing accounting, auditing, taxation and business advisory services. It has now grown and diversified into a multi-dimensional accounting, auditing, taxation, business advisory and financial planning company.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Hemanshu Bahety"
                position={{ color: "info", label: "CA, CS, CPA (USA)" }}
                description="Expert in Domestic & Internation Taxation, GST, Direct and Indirect Tax."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Rajendra Kumar Bahety"
                position={{ color: "info", label: "CA, LLB, DISA" }}
                description="35+ years of experience in Company Tax, Audit, Accounting, Government Compliances."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Alok Kumar Goenka"
                position={{ color: "info", label: "CA" }}
                description="35+ years of experience in Company Tax, Audit, Accounting, Government Compliances."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}

export default Team;
