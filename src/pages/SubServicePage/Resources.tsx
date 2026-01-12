import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import CustomSlider from "components/Custom/CustomSlider";
import SectionHeader from "components/Custom/SectionHeader";
import { FC, lazy, Suspense } from "react";

const renderLoader = () => <></>;

const TransparentBlogCard = lazy(
  () => import("examples/Cards/BlogCards/TransparentBlogCard")
);

interface ResourceDetail {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ResourcesProps {
  jsonData: {
    caption?: string;
    title?: string;
    details: ResourceDetail[];
  };
}

const Resources: FC<ResourcesProps> = ({ jsonData }) => {
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
                caption={jsonData.caption || ""}
                title={jsonData.title || ""}
              />
            </Grid>
            <Container>
              <CustomSlider>
                {jsonData.details.map((resource) => {
                  const card = (
                    <TransparentBlogCard
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
                  );
                  
                  return (
                    <Box
                      key={resource.title}
                      sx={{ mx: 4, px: 3, py: 4, borderRadius: 2 }}
                      height="100%"
                    >
                      <Suspense fallback={renderLoader()}>
                        {card}
                      </Suspense>
                    </Box>
                  );
                })}
              </CustomSlider>
            </Container>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

export default Resources;
