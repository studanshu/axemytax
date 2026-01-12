import { FC, Suspense } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

//json
import { HLLJson } from "assets/data/LandingPage/HighLevelServices";

const renderLoader = () => <></>;

interface HighLevelService {
  image: string;
  title: string;
  description: string;
  link: string;
  label: string;
}

const HighLevelServices: FC = () => {
  return (
    <MKBox component="section" mt={24} id="hllservice">
      <Container>
        <Grid container spacing={3} px={4}>
          {HLLJson.map((hll: HighLevelService) => (
            <Suspense fallback={renderLoader()} key={hll.title}>
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
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
};

export default HighLevelServices;
