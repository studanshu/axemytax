// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// json data
import { blogJson } from "assets/data/LandingPage/Blogs";


export default function Blogs() {
  return (
    <MKBox component="section" py={2} mt={4}>
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <MKTypography variant="h3" mb={6} color="info">
            Latest Blogs
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={0.5}>
          {blogJson.map((data, _) => (
            <Grid item xs={12} sm={6} lg={3}>
              <CenteredBlogCard
                image={data.image}
                title={data.title}
                description={data.description}
                action={{
                  type: "internal",
                  route: data.link,
                  color: "white",
                  label: data.label,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}
