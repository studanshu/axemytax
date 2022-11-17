/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/individual.jpg";
import post2 from "assets/images/sme.png";

import post3 from "assets/images/enterprise.jpg";
import post4 from "assets/images/nri.png";

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
          <Grid item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={post1}
              title="For Individuals"
              description="The scale for personal finance may seem small, but the responsibilities are crucial. You may require our assistance in managing, protecting and growing your personal wealth."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "white",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={post2}
              title="For SMEs"
              description="Small businesses require simple solutions. Your requirements could range in hundreds from audits to taxation to financing, but your solution could be just be us."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "white",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CenteredBlogCard
              image={post3}
              title="For Enterprises"
              description="The trail of complexity always hangs behind large businesses with countless bodies, operations and verticals. Offload your financial troubles to a trusted firm which can help you out with all your troubles."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "white",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="For Foreign Entities"
              description="Your business is bound"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "white",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
