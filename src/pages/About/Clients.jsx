import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import CustomSlider from "components/Custom/CustomSlider";
import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";
import React, { Suspense } from "react";
const renderLoader = () => <></>;
const TransparentBlogCard = React.lazy(
  () => import("examples/Cards/BlogCards/TransparentBlogCard")
);

function Clients({ jsonData }) {
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
                    elevation={8}
                    height="100%"
                  >
                    <Suspense>
                      <TransparentBlogCard
                        key={index}
                        color="secondary"
                        image={client.img}
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
}

Clients.propTypes = {
  jsonData: PropTypes.object.isRequired,
};

export default Clients;
