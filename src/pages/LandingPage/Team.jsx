// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples

import { TeamJson } from "assets/data/LandingPage/Team.js";
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

export default function Team() {
  return (
    <Card
      sx={{
        p: 4,
        mx: { xs: 2, lg: 3 },
        mt: 8,
        backgroundColor: ({ palette: { secondary }, functions: { rgba } }) =>
          rgba(secondary.main, 1),
        backdropFilter: "saturate(200%) blur(30px)",
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}
      id="team"
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} lg={12}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography
              variant="body2"
              color="white"
              mt={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("lg")]: {
                  visibility: "hidden",
                },
              })}
            >
              AxeMyTax was founded in 1985 with the aim of providing accounting,
              auditing, taxation and business advisory services. It has now
              grown and diversified into a multi-dimensional accounting,
              auditing, taxation, business advisory and financial planning
              company.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={4}>
          {TeamJson.map((member, _) => (
            <Grid item xs={12} lg={6} key={member.name}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={member.img}
                  name={member.name}
                  position={{ color: "info", label: member.qualification }}
                  description={member.description}
                  mail="mailto:bajet@gsdf.com"
                  linkedIn="https://www.linkedin.com"
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Card>
  );
}
