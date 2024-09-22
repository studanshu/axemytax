import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import CustomSlider from "components/Custom/CustomSlider";
import SectionHeader from "components/Custom/SectionHeader";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import PropTypes from "prop-types";
import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;
export const Resources = ({ jsonData }) => {
  const ResourcesJson = jsonData;
  return (
    <Suspense fallback={renderLoader()}>
      <Box mt={24} sx={{ backgroundColor: colors.light.main }}>
        <Container>
          <Grid
            container
            justifyContent="center"
            sx={{ py: { xs: 3, xl: 6 }, gap: { xs: 4, xl: 8 }, px: { xl: 2 } }}
          >
            <Grid item>
              <SectionHeader
                caption={ResourcesJson.caption}
                title={ResourcesJson.title}
              />
            </Grid>
            <Container>
              <CustomSlider>
                {ResourcesJson.details.map((resource, index) => (
                  <Box
                    key={resource.title}
                    sx={{ mx: 4, px: 3, py: 4, borderRadius: 2 }}
                    elevation={8}
                    height="100%"
                  >
                    <TransparentBlogCard
                      key={index}
                      color="secondary"
                      image={resource.image}
                      title={resource.title}
                      description={resource.description}
                      action={{
                        type: "external",
                        route: resource.link,
                        color: "secondary",
                        label: "Read More",
                      }}
                    />
                  </Box>
                ))}
              </CustomSlider>
            </Container>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

Resources.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string,
    title: PropTypes.string,
    resources: PropTypes.arrayOf(
      PropTypes.shape({
        headline: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Resources;
