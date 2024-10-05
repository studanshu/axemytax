// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// import json
import ServiceJson from "assets/data/LandingPage/OurServices";
import { Suspense } from "react";
const renderLoader = () => <></>;

export default function OurServices() {
  return (
    <MKBox component="section" mt={8} id="services">
      <Container>
        <Grid container item lg={12} justifyContent="center">
          <MKTypography variant="h3" mb={4} textAlign="center" color="info">
            Our Services
          </MKTypography>
        </Grid>
        <Grid container spacing={1}>
          {ServiceJson.map((service, _) => (
            <Suspense fallback={renderLoader()} key={service.title}>
              <Grid item xs={12} sm={6} lg={3}>
                <FilledInfoCard
                  color="info"
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  action={{
                    type: "internal",
                    route: service.link,
                    label: service.label,
                  }}
                />
              </Grid>
            </Suspense>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}
