import { FC, useMemo } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

interface BlogPost {
  img: string;
  title: string;
  description: string;
  href: string;
  date: string;
}

// Placeholder data - replace with usePosts hook from google-sheets-cms
const placeholderBlogs: BlogPost[] = [
  {
    img: "/placeholder-blog.jpg",
    title: "Getting Started with Tax Planning",
    description: "Learn the basics of effective tax planning for your business.",
    href: "/blogs",
    date: "2026-01-01",
  },
];

const Blogs: FC = () => {
  const getLatestBlogs = useMemo(
    () => placeholderBlogs.slice(0, 4),
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
