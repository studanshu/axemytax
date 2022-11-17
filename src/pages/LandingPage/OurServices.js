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

// Material Kit 2 React components
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

export default function OurServices() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item lg={12} justifyContent="center">
          <MKTypography variant="h3" mb={6} textAlign="center" color="info" >
            Our Services
          </MKTypography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} lg={3}>
            <FilledInfoCard
              color="black"
              icon="public"
              title="Business Establishment Services"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "internal",
                route: "/somewhere",
                label: "Let's start"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FilledInfoCard
              color="black"
              icon="public"
              title="Auditing"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "internal",
                route: "/somewhere",
                label: "Let's start"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FilledInfoCard
              color="black"
              icon="public"
              title="Accounting"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "internal",
                route: "/somewhere",
                label: "Let's start"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FilledInfoCard
              color="black"
              icon="public"
              title="Direct Tax"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "internal",
                route: "/somewhere",
                label: "Let's start"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FilledInfoCard
              color="black"
              icon="public"
              title="Company Formation"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "internal",
                route: "/somewhere",
                label: "Let's start"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FilledInfoCard
              color="black"
              icon="public"
              title="Corporate Tax"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "internal",
                route: "/somewhere",
                label: "Let's start"
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FilledInfoCard
              color="black"
              icon="public"
              title="Taxation for NRIs"
              description="Check the possible ways of working with our product and the necessary files for building your own project."
              action={{
                type: "internal",
                route: "/somewhere",
                label: "Let's start"
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};