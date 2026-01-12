import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import CustomSlider from "components/Custom/CustomSlider";
import SectionHeader from "components/Custom/SectionHeader";
import { lazy, Suspense, FC } from "react";

const renderLoader = () => <></>;
const TransparentBlogCard = lazy(
  () => import("examples/Cards/BlogCards/TransparentBlogCard")
);

interface ClientDetail {
  name: string;
  img: string;
  link: string;
}

interface ClientsJsonData {
  caption: string;
  title: string;
  details: ClientDetail[];
}

interface ClientsProps {
  jsonData: ClientsJsonData;
}

const Clients: FC<ClientsProps> = ({ jsonData }) => {
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
                caption={jsonData.caption}
                title={jsonData.title}
              />
            </Grid>
            <Container>
              <CustomSlider>
                {jsonData.details.map((client, index) => (
                  <Box
                    key={client.name}
                    sx={{ mx: 4, px: 3, py: 4, borderRadius: 2 }}
                    height="100%"
                  >
                    <Suspense>
                      <TransparentBlogCard
                        key={index}
                        image={client.img}
                        title={client.name}
                        description=""
                        action={{
                          type: "external",
                          route: client.link,
                          color: "secondary",
                          label: client.name,
                        }}
                        roundedImage
                      />
                    </Suspense>
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

export default Clients;
