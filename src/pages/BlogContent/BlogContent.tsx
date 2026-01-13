import 'config/cms'; // Initialize CMS
import 'assets/css/blog-styles.css';
import { 
  usePost, 
  useRelatedPosts, 
  BlogPostContent, 
  BlogPostCard
} from '@studanshu/google-sheets-cms';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import { Grid, CircularProgress, Container } from '@mui/material';
import { FC, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopLayout from 'pages/utils/TopLayout';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import footerRoutes from 'footer.routes';
import SectionHeader from 'components/Custom/SectionHeader';
import InlineForm from 'components/Custom/InlineForm';
import { DefaultContactJson } from 'assets/data/SubServicePage/DefaultContactJson';

const BlogContent: FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const { data: post, isLoading, error } = usePost(slug || '');
  const { data: relatedPosts } = useRelatedPosts(post?.id || 0, 3);

  // Preprocess post content to handle escaped newlines
  const processedPost = useMemo(() => {
    if (!post) return post;
    
    return {
      ...post,
      content_md: post.content_md ? post.content_md.replace(/\\n/g, '\n') : post.content_md,
      excerpt: post.excerpt ? post.excerpt.replace(/\\n/g, '\n') : post.excerpt,
    };
  }, [post]);

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
        <Container>
          <MKBox textAlign="center" py={12}>
            <MKTypography variant="h3" mb={2}>
              Article Not Found
            </MKTypography>
            <MKTypography variant="body1" color="text">
              The article you&apos;re looking for doesn&apos;t exist or has been removed.
            </MKTypography>
          </MKBox>
        </Container>
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </>
    );
  }

  return (
    <>
      <TopLayout />
      
      <Container maxWidth="lg">
        <MKBox component="article" py={24} px={4}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <BlogPostContent
                post={processedPost!}
                classNames={{
                  article: 'blog-article-content',
                  hero: 'blog-hero-section',
                  heroImage: 'blog-hero-image',
                  header: 'blog-header',
                  category: 'blog-category-badge',
                  title: 'blog-title',
                  meta: 'blog-meta',
                  author: 'blog-author',
                  date: 'blog-date',
                  readingTime: 'blog-reading-time',
                  body: 'blog-body-content',
                  footer: 'blog-footer',
                  tags: 'blog-tags',
                  tag: 'blog-tag',
                }}
              />
            </Grid>

            {/* Related Posts Section */}
            {relatedPosts && relatedPosts.length > 0 && (
              <Grid item xs={12}>
                <MKBox mt={8} mb={4}>
                  <SectionHeader
                    caption="Continue Reading"
                    title="Related Articles"
                    variant="h4"
                  />
                  <Grid container spacing={3} mt={2}>
                    {relatedPosts.map((relatedPost) => (
                      <Grid item xs={12} md={4} key={relatedPost.id}>
                        <BlogPostCard
                          post={relatedPost}
                          onPostClick={(post) => navigate(`/blog/${post.slug}`)}
                          classNames={{
                            card: 'related-blog-card',
                            title: 'related-blog-title',
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </MKBox>
              </Grid>
            )}

            {/* Contact Section - Using InlineForm for consistency */}
            <Grid item xs={12}>
              <Container sx={{ my: 24 }}>
                <MKBox px={4}>
                  <InlineForm
                    FormJson={DefaultContactJson as any}
                    flexDirection="row"
                  />
                </MKBox>
              </Container>
            </Grid>
          </Grid>
        </MKBox>
      </Container>

      <MKBox px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default BlogContent;
