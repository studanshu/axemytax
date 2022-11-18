// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

//json
import { HLLJson } from "assets/data/LandingPage/HighLevelServices.js"
import { lazy, Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

export default function HighLevelServices() {
  return (
    <MKBox component="section" py={2} mt={2}>
      <Container>
        <Grid container spacing={3}>
          {
            HLLJson.map((hll, _) => (
            <Suspense fallback={renderLoader()}>
              <Grid item xs={12} sm={6} lg={3}>
                <TransparentBlogCard
                  image={hll.image}
                  title={hll.title}
                  description={hll.description}
                  action={{
                    type: "internal",
                    route: hll.link,
                    color: "info",
                    label: hll.label,
                  }}
                />
              </Grid>
            </Suspense>
            ))
          }
        </Grid>
      </Container>
    </MKBox>
  );
}
