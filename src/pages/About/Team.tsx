import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import SectionHeader from "components/Custom/SectionHeader";
import { lazy, Suspense, FC } from "react";

const renderLoader = () => <></>;

interface TeamMember {
  img: string;
  name: string;
  qualification: string;
  description: string;
  email: string;
  linkedIn: string;
}

interface TeamJsonData {
  title: string;
  caption: string;
  team: TeamMember[];
}

interface TeamProps {
  jsonData: TeamJsonData;
}

const Team: FC<TeamProps> = ({ jsonData }) => {
  const VerticalTeamCard = lazy(
    () => import("examples/Cards/TeamCards/VerticalTeamCard")
  );
  const HorizontalTeamCard = lazy(
    () => import("examples/Cards/TeamCards/HorizontalTeamCard")
  );
  
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const DisplayCard = isLargeScreen ? VerticalTeamCard : HorizontalTeamCard;

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
};

export default Team;
