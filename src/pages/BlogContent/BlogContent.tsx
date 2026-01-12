import '../config/cms'; // Initialize CMS
import { usePost, useRelatedPosts, BlogPostContent } from '@studanshu/google-sheets-cms';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import { Grid, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import TopLayout from 'pages/utils/TopLayout';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import footerRoutes from 'footer.routes';
import TransparentBlogCard from 'examples/Cards/BlogCards/TransparentBlogCard';

const BlogContent: FC = () => {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = usePost(slug || '');
  const { data: relatedPosts } = useRelatedPosts(post?.id || 0, 3);

  if (isLoading) {
    return (
      <>
        <TopLayout />
        <MKBox display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </MKBox>
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <TopLayout />
        <MKBox textAlign="center" py={12}>
          <MKTypography variant="h3" mb={2}>
            Article Not Found
          </MKTypography>
          <MKTypography variant="body1" color="text">
            The article you're looking for doesn't exist or has been removed.
          </MKTypography>
        </MKBox>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  }

  return (
    <>
      <TopLayout />
      
      <MKBox component="article" py={6}>
        <Grid container spacing={3} sx={{ px: { xs: 3, lg: 12, xl: 20 } }}>
          <Grid item xs={12}>
            {/* Blog Post Content - uses library's BlogPostContent component */}
            <BlogPostContent
              post={post}
              classNames={{
                article: 'blog-article',
                hero: 'blog-hero',
                meta: 'blog-meta',
              }}
            />
          </Grid>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <Grid item xs={12}>
              <MKBox mt={8} mb={4}>
                <MKTypography variant="h4" fontWeight="bold" mb={4}>
                  Related Articles
                </MKTypography>
                <Grid container spacing={3}>
                  {relatedPosts.map((relatedPost) => (
                    <Grid item xs={12} md={4} key={relatedPost.id}>
                      <TransparentBlogCard
                        image={relatedPost.hero_image || ''}
                        title={relatedPost.title}
                        description={relatedPost.excerpt || relatedPost.seo_description}
                        action={{
                          type: "internal",
                          route: `/blog/${relatedPost.slug}`,
                          color: "black75",
                          label: "Read More",
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </MKBox>
            </Grid>
          )}
        </Grid>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default BlogContent;
