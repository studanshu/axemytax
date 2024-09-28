import { Box, Container, Grid } from "@mui/material";
import SectionHeader from "components/Custom/SectionHeader";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";
import { Suspense } from "react";
import BlogMetaContent from "./BlogMetaContent";
import ParseContent from "./ParseContent";
import RelatedBlog from "./RelatedBlog";

const renderLoader = () => <p>Loading</p>;

function Content({ jsonData }) {
  let blogContent = jsonData.content;
  console.log("jsonData", jsonData);
  console.log("blogContent", blogContent);
  return (
    <Suspense fallback={renderLoader()}>
      <Container>
        <Box pt={24} px={4}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} lg={8.5}>
              <Grid
                container
                flexDirection="column"
                sx={{ gap: { xs: 4, xl: 6 } }}
                className="mainContent"
              >
                <Grid item alignSelf="flex-start" className="blogContentHeader">
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
                  <ParseContent mainContent={blogContent} />
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
                  <MKTypography variant="h4" color="black75">
                    Related Blogs
                  </MKTypography>
                </Grid>
                <RelatedBlog relatedBlogs={jsonData.relatedBlogs} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
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
