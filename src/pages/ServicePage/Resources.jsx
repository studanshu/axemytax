import { Container, Grid } from "@mui/material";
import SectionHeader from "components/Custom/SectionHeader";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import PropTypes from "prop-types";
import { Suspense } from "react";
const renderLoader = () => <></>;
export const Resources = ({ jsonData }) => {
  const ResourcesJson = jsonData;
  return (
    <Suspense fallback={renderLoader()}>
      <Container>
        <Grid
          container
          justifyContent="center"
          sx={{ gap: { xs: 6, xl: 12 }, px: { xl: 2 } }}
        >
          <Grid item>
            <SectionHeader
              caption={ResourcesJson.caption}
              title={ResourcesJson.title}
            />
          </Grid>
          <Grid item>
            <Grid container sx={{ gap: 2 }} justifyContent="space-around">
              {ResourcesJson.resources.map((resource, index) => (
                <Grid item key={index} xs={12} md={5} xl={3}>
                  <FilledInfoCard
                    color="secondary"
                    icon={resource.icon}
                    title={resource.headline}
                    description={resource.description}
                    action={{
                      type: "external",
                      route: resource.link,
                      color: "secondary",
                      label: "Go to Website",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Suspense>
  );
};

Resources.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string,
    title: PropTypes.string,
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.object,
        headline: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Resources;
