// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import { DefaultTeamJson as TeamJson } from "assets/data/About/DefaultTeamJson";
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
        <Grid container flexDirection="column" sx={{ gap: 2 }}>
          <MKTypography item variant="h4Light" color="white">
            The Executive Team
          </MKTypography>
          <MKTypography
            item
            variant="subtitle1"
            color="white"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            AxeMyTax was founded in 1985 with the aim of providing accounting,
            auditing, taxation and business advisory services. It has now grown
            and diversified into a multi-dimensional accounting, auditing,
            taxation, business advisory and financial planning company.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={4}>
          {TeamJson.team.map((member, _) => (
            <Grid item xs={12} lg={6} key={member.name}>
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={member.img}
                  name={member.name}
                  position={{ color: "info", label: member.qualification }}
                  description={member.description}
                  mail={member.email}
                  linkedIn={member.linkedIn}
                />
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Card>
  );
}
