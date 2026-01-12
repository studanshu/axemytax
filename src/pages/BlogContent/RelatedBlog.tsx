import { lazy, Suspense, FC } from "react";
import { Grid, Container, Box } from "@mui/material";
import { IsUpLgScreen } from "assets/theme/functions/breakpoints";
import CustomSlider from "components/Custom/CustomSlider";

const CenteredBlogCard = lazy(
  () => import("examples/Cards/BlogCards/CenteredBlogCard")
);

interface BlogItem {
  img: string;
  title: string;
  description: string;
  href: string;
  isInternal?: boolean;
}

interface BlogCardProps {
  blog: BlogItem;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  const isInternal = blog.isInternal ?? true;
  
  return (
    <Suspense fallback={<></>}>
      <CenteredBlogCard
        image={blog.img}
        title={blog.title}
        description={blog.description}
        action={{
          type: isInternal ? "internal" : "external",
          route: blog.href,
          color: "secondary",
          label: "Read More",
        }}
      />
    </Suspense>
  );
};

interface RelatedBlogProps {
  relatedBlogs: BlogItem[];
}

const RelatedBlog: FC<RelatedBlogProps> = ({ relatedBlogs }) => {
  return IsUpLgScreen() ? (
    <Grid container flexDirection="column" sx={{ gap: 4 }}>
      {relatedBlogs.map((blog) => (
        <Grid item key={blog.title}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Container>
      <CustomSlider>
        {relatedBlogs.map((blog) => (
          <Box
            key={blog.title}
            sx={{ mx: 4, px: 3, py: 4, borderRadius: 2 }}
          >
            <BlogCard blog={blog} />
          </Box>
        ))}
      </CustomSlider>
    </Container>
  );
};

export default RelatedBlog;
