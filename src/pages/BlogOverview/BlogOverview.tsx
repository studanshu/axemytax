import '../config/cms'; // Initialize CMS
import { usePosts, useCategories } from '@studanshu/google-sheets-cms';
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
import { Grid, CircularProgress } from '@mui/material';
import TransparentBlogCard from 'examples/Cards/BlogCards/TransparentBlogCard';
import { FC, useState } from 'react';
import TopLayout from 'pages/utils/TopLayout';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import footerRoutes from 'footer.routes';

const BlogOverview: FC = () => {
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

  return (
    <>
      <TopLayout />
      
      <MKBox component="section" py={12}>
        <Grid container spacing={3} sx={{ px: { xs: 3, lg: 6 } }}>
          {/* Header */}
          <Grid item xs={12}>
            <MKBox textAlign="center" mb={6}>
              <MKTypography variant="h2" fontWeight="bold" mb={2}>
                Resources & Insights
              </MKTypography>
              <MKTypography variant="body1" color="text">
                Stay updated with the latest in taxation, compliance, and business advisory
              </MKTypography>
            </MKBox>
          </Grid>

          {/* Category Filter */}
          {!categoriesLoading && categories && (
            <Grid item xs={12}>
              <MKBox display="flex" gap={2} flexWrap="wrap" justifyContent="center" mb={4}>
                <MKButton
                  variant={!selectedCategory ? "contained" : "outlined"}
                  color="primary"
                  onClick={() => handleCategoryFilter(undefined)}
                >
                  All Posts
                </MKButton>
                {categories.map((category) => (
                  <MKButton
                    key={category.id}
                    variant={selectedCategory === category.slug ? "contained" : "outlined"}
                    color="primary"
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

          {/* Blog Posts Grid */}
          {!postsLoading && postsData && (
            <>
              {postsData.posts.map((post) => (
                <Grid item xs={12} sm={6} lg={4} key={post.id}>
                  <TransparentBlogCard
                    image={post.hero_image || ''}
                    title={post.title}
                    description={post.excerpt || post.seo_description}
                    action={{
                      type: "internal",
                      route: `/blog/${post.slug}`,
                      color: "black75",
                      label: "Read More",
                    }}
                  />
                </Grid>
              ))}

              {/* Load More Button */}
              {postsData.pagination.hasMore && (
                <Grid item xs={12}>
                  <MKBox display="flex" justifyContent="center" mt={4}>
                    <MKButton
                      variant="outlined"
                      color="primary"
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
        </Grid>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default BlogOverview;
