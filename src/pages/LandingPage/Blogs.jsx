/* eslint-disable react/jsx-key */
// @mui material components
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components

// json data

import { DefaultOverviewJson } from "assets/data/Blog/BlogOverview/DefaultOverviewJson";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { useMemo } from "react";

export default function Blogs() {
  const getLatestBlogs = useMemo(
    () =>
      Object.values(DefaultOverviewJson.blogOverview)
        .flat()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4),
    [DefaultOverviewJson]
  );
  return (
    <MKBox component="section" mt={24} id="blogs" sx={{ px: { xs: 0, lg: 4 } }}>
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <MKTypography variant="h3" mb={6} color="info">
            Latest Blogs
          </MKTypography>
        </Grid>
        <Grid container spacing={3} mt={0.5} sx={{ px: { xs: 0, lg: 4 } }}>
          {getLatestBlogs.map((data, _) => (
            <Grid item xs={12} sm={6} lg={3}>
              <CenteredBlogCard
                image={data.img}
                title={data.title}
                description={data.description}
                action={{
                  type: "internal",
                  route: data.href,
                  color: "white",
                  label: "Read More",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}
