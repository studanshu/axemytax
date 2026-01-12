import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import { Grid, Container, Box } from "@mui/material";
import { IsUpLgScreen } from "assets/theme/functions/breakpoints";
import CustomSlider from "components/Custom/CustomSlider";

const CenteredBlogCard = lazy(
  () => import("examples/Cards/BlogCards/CenteredBlogCard")
);

const BlogCard = ({ blog, isInternal }) => (
  <Suspense>
    <CenteredBlogCard
      image={blog.img}
      title={blog.title}
      description={blog.description}
      action={{
        type: isInternal ? "internal" : "external",
        route: blog.href,
        color: isInternal ? "white" : "secondary",
        label: "Read More",
      }}
    />
  </Suspense>
);

BlogCard.propTypes = {
  blog: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired,
  isInternal: PropTypes.bool.isRequired,
};

const RelatedBlog = ({ relatedBlogs }) => {
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
            elevation={8}
            // height="100%"
          >
            <BlogCard blog={blog} />
          </Box>
        ))}
      </CustomSlider>
    </Container>
  );
};

RelatedBlog.propTypes = {
  relatedBlogs: PropTypes.arrayOf(BlogCard.propTypes.blog.isRequired)
    .isRequired,
};

export default RelatedBlog;
