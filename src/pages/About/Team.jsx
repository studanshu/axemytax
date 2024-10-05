import { Box, Container, Grid } from "@mui/material";
import { IsUpLgScreen } from "assets/theme/functions/breakpoints";
import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
const renderLoader = () => <></>;

function Team({ jsonData }) {
  const VerticalTeamCard = lazy(
    () => import("examples/Cards/TeamCards/VerticalTeamCard")
  );
  const HorizontalTeamCard = lazy(
    () => import("examples/Cards/TeamCards/HorizontalTeamCard")
  );
  let DisplayCard = IsUpLgScreen() ? VerticalTeamCard : HorizontalTeamCard;
  return (
    <Suspense fallback={renderLoader()}>
      <Box my={24} mx={4}>
        <Container>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            spacing={9}
          >
            <Grid item alignSelf="center">
              <SectionHeader
                title={jsonData.title}
                caption={jsonData.caption}
              />
            </Grid>
            <Grid item className="content">
              <Grid container justifyContent="space-around" spacing={8}>
                {jsonData.team.map((member, index) => (
                  <Grid item xs={12} lg={3.5} key={index}>
                    <Suspense>
                      <DisplayCard
                        color="light"
                        image={member.img}
                        name={member.name}
                        position={{
                          color: "primary",
                          label: member.qualification,
                        }}
                        description={member.description}
                        mail={member.email}
                        linkedIn={member.linkedIn}
                      />
                    </Suspense>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}

Team.propTypes = {
  jsonData: PropTypes.object.isRequired,
};

export default Team;
