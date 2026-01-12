import { Box, Container, Grid } from "@mui/material";
import SectionHeader from "components/Custom/SectionHeader";
import MKTypography from "components/MKTypography";
import { FC, Suspense } from "react";
import BlogMetaContent from "./BlogMetaContent";
import ParseContent from "./ParseContent";
import RelatedBlog from "./RelatedBlog";

interface ContentItem {
  type: string;
  value: string | string[];
  color?: string;
  alt?: string;
  label?: string;
}

interface BlogData {
  date: string;
  duration: string;
  author: string;
  title: string;
  content: ContentItem[];
  relatedBlogs?: any[];
}

interface ContentProps {
  jsonData: BlogData;
}

const renderLoader = () => <></>;

const Content: FC<ContentProps> = ({ jsonData }) => {
  const blogContent = jsonData.content;
  
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
                <Grid item className="blogContentHeader">
                  <SectionHeader
                    caption={
                      <BlogMetaContent
                        date={jsonData.date}
                        duration={jsonData.duration}
                        author={jsonData.author}
                      /> as any
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
                <RelatedBlog relatedBlogs={jsonData.relatedBlogs || []} />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Suspense>
  );
};

export default Content;
