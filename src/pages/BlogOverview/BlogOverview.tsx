import 'config/cms'; // Initialize CMS
import 'assets/css/blog-styles.css';
import { 
  usePosts, 
  useCategories, 
  BlogPostCard
} from '@studanshu/google-sheets-cms';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
import { Grid, CircularProgress, Container } from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLayout from 'pages/utils/TopLayout';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import footerRoutes from 'footer.routes';
import SectionHeader from 'components/Custom/SectionHeader';
import InlineForm from 'components/Custom/InlineForm';
import { DefaultContactJson } from 'assets/data/SubServicePage/DefaultContactJson';

const BlogOverview: FC = () => {
  const navigate = useNavigate();
  const [cursor, setCursor] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  
  const { data: postsData, isLoading: postsLoading } = usePosts({
    cursor,
    limit: 12,
    category: selectedCategory,
  });

  const { data: categories, isLoading: categoriesLoading } = useCategories();

  const handleLoadMore = () => {
    if (postsData?.pagination.nextCursor) {
      setCursor(postsData.pagination.nextCursor);
    }
  };

  const handleCategoryFilter = (categorySlug?: string) => {
    setSelectedCategory(categorySlug);
    setCursor(0);
  };

  const handlePostClick = (post: any) => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <>
      <TopLayout />
      
      <Container>
        <MKBox component="section" py={24} px={4}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <SectionHeader
                caption="Stay updated with the latest in taxation, compliance, and business advisory"
                title="Resources & Insights"
                variant="h2"
                color="black"
              />
            </Grid>

            {/* Category Filter */}
            {!categoriesLoading && categories && (
              <Grid item xs={12} my={4}>
                <MKBox display="flex" gap={2} flexWrap="wrap" justifyContent="center" mb={4}>
                  <MKButton
                    variant={!selectedCategory ? "contained" : "outlined"}
                    color="primary"
                    size="medium"
                    onClick={() => handleCategoryFilter(undefined)}
                  >
                    All Posts
                  </MKButton>
                  {categories.map((category) => (
                    <MKButton
                      key={category.id}
                      variant={selectedCategory === category.slug ? "contained" : "outlined"}
                      color="primary"
                      size="medium"
                      onClick={() => handleCategoryFilter(category.slug)}
                    >
                      {category.name}
                    </MKButton>
                  ))}
                </MKBox>
              </Grid>
            )}

            {/* Loading State */}
            {postsLoading && (
              <Grid item xs={12}>
                <MKBox display="flex" justifyContent="center" py={6}>
                  <CircularProgress />
                </MKBox>
              </Grid>
            )}

            {/* Blog Posts Grid - Using BlogPostCard component */}
            {!postsLoading && postsData && (
              <>
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    {postsData.posts.map((post) => (
                      <Grid item xs={12} sm={6} lg={4} key={post.id}>
                        <BlogPostCard
                          post={post}
                          onPostClick={handlePostClick}
                          classNames={{
                            card: 'blog-card-overview',
                            title: 'blog-card-title',
                            excerpt: 'blog-card-excerpt',
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                {/* Load More Button */}
                {postsData.pagination.hasMore && (
                  <Grid item xs={12}>
                    <MKBox display="flex" justifyContent="center" mt={4}>
                      <MKButton
                        variant="outlined"
                        color="info"
                        onClick={handleLoadMore}
                      >
                        Load More Articles
                      </MKButton>
                    </MKBox>
                  </Grid>
                )}

                {/* No Results */}
                {postsData.posts.length === 0 && (
                  <Grid item xs={12}>
                    <MKBox textAlign="center" py={6}>
                      <MKTypography variant="h5" color="text">
                        No articles found in this category
                      </MKTypography>
                    </MKBox>
                  </Grid>
                )}
              </>
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

      <MKBox pt={2} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default BlogOverview;
