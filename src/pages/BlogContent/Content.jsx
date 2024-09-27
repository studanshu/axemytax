import { Box, Container, Grid } from "@mui/material";
import SectionHeader from "components/Custom/SectionHeader";
import MKTypography from "components/MKTypography";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import PropTypes from "prop-types";
import { Suspense } from "react";

const renderLoader = () => <p>Loading</p>;

const BlogMetaContent = ({ date, duration, author }) => {
  return (
    <Grid container sx={{ gap: 2 }}>
      <Grid item>
        <MKTypography variant="h6Light" color="primary">
          {date}
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="secondary">
          |
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="secondary">
          {duration}
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="secondary">
          |
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="black75">
          {author}
        </MKTypography>
      </Grid>
    </Grid>
  );
};

function Content({ jsonData }) {
  let blogContent = jsonData.content;
  return (
    <Suspense fallback={renderLoader()}>
      <Box pt={24} px={4}>
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} lg={8.5}>
              <Grid
                container
                flexDirection="column"
                sx={{ gap: { xs: 4, xl: 6 } }}
                className="mainContent"
              >
                <Grid item alignSelf="center" className="blogContentHeader">
                  <SectionHeader
                    caption={
                      <BlogMetaContent
                        date={jsonData.date}
                        duration={jsonData.duration}
                        author={jsonData.author}
                      />
                    }
                    title={jsonData.title}
                  />
                </Grid>
                <Grid item className="blogContentBody">
                  {blogContent.map((content, index) => {
                    switch (content.type) {
                      case "headingBig":
                        return (
                          <MKTypography
                            key={index}
                            variant="h4Light"
                            color={content.color}
                            sx={{ mb: { xs: 2, lg: 4 } }}
                          >
                            {content.value}
                          </MKTypography>
                        );
                      case "bodyBig":
                        return (
                          <MKTypography
                            key={index}
                            variant="body1"
                            color={content.color}
                            sx={{ mb: { xs: 3, lg: 6 } }}
                          >
                            {content.value}
                          </MKTypography>
                        );
                      case "headingSmall":
                        return (
                          <MKTypography
                            key={index}
                            variant="h5Light"
                            color={content.color}
                            sx={{ mb: { xs: 1, lg: 3 } }}
                          >
                            {content.value}
                          </MKTypography>
                        );
                      case "bodySmall":
                        return (
                          <MKTypography
                            key={index}
                            variant="subtitle1"
                            color={content.color}
                            sx={{ mb: { xs: 2, lg: 4 } }}
                          >
                            {content.value}
                          </MKTypography>
                        );
                      case "img":
                        return (
                          <>
                            <img
                              key={index}
                              src={content.value}
                              alt={content.alt}
                            />
                            <MKTypography
                              variant="caption"
                              color="black50"
                              sx={{ mb: { xs: 2, lg: 4 }, mt: 1 }}
                            >
                              {content.label}
                            </MKTypography>
                          </>
                        );
                      case "break":
                        return <br key={index} />;
                      case "ul":
                        return (
                          <Box
                            key={index}
                            component="ul"
                            sx={{ mb: { xs: 2, lg: 4 } }}
                          >
                            {content.value.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </Box>
                        );
                      case "ol":
                        return (
                          <Box
                            key={index}
                            component="ol"
                            sx={{ mb: { xs: 2, lg: 4 } }}
                          >
                            {content.value.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </Box>
                        );
                      default:
                        return null;
                    }
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Grid
                container
                className="relatedPosts"
                sx={{ gap: { xs: 4, xl: 6 } }}
                flexDirection="column"
              >
                <Grid item>
                  <MKTypography variant="h3" color="black75">
                    {" "}
                    Related Posts{" "}
                  </MKTypography>
                </Grid>
                <Grid item>
                  <Grid container sx={{ gap: 9 }}>
                    {jsonData.relatedBlogs.map((blog) => (
                      <Grid item xs={5} lg={3} key={blog.title}>
                        <CenteredBlogCard
                          image={blog.img}
                          title={blog.title}
                          description={blog.description}
                          action={{
                            type: "internal",
                            route: blog.href,
                            color: "white",
                            label: "Read More",
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}

BlogMetaContent.propTypes = {
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

Content.propTypes = {
  jsonData: PropTypes.object.isRequired,
};

export default Content;
