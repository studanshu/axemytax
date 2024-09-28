import PropTypes from "prop-types";

const { Grid, Container, Box } = require("@mui/material");
const { IsUpLgScreen } = require("assets/theme/functions/breakpoints");
const { default: CustomSlider } = require("components/Custom/CustomSlider");
const {
  default: CenteredBlogCard,
} = require("examples/Cards/BlogCards/CenteredBlogCard");

const BlogCard = ({ blog, isInternal }) => (
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
          <BlogCard blog={blog} isInternal={true} />
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
            <BlogCard blog={blog} isInternal={false} />
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
