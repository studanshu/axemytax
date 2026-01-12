import { FC, useMemo } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// json data
import { DefaultOverviewJson } from "assets/data/Blog/BlogOverview/DefaultOverviewJson";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

interface BlogPost {
  img: string;
  title: string;
  description: string;
  href: string;
  date: string;
}

const Blogs: FC = () => {
  const getLatestBlogs = useMemo(
    () =>
      (Object.values(DefaultOverviewJson.blogOverview)
        .flat() as BlogPost[])
        .sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4),
    []
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
          {getLatestBlogs.map((data: BlogPost) => (
            <Grid item xs={12} sm={6} lg={3} key={data.href}>
              <CenteredBlogCard
                image={data.img}
                title={data.title}
                description={data.description}
                action={{
                  type: "internal",
                  route: data.href,
                  color: "light",
                  label: "Read More",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
};

export default Blogs;
