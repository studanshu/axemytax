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
import { Grid, CircularProgress, Container, Pagination, Stack } from '@mui/material';
import { FC, useMemo, useCallback, ChangeEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import TopLayout from 'pages/utils/TopLayout';
import DefaultFooter from 'examples/Footers/DefaultFooter';
import footerRoutes from 'footer.routes';
import SectionHeader from 'components/Custom/SectionHeader';
import InlineForm from 'components/Custom/InlineForm';
import { DefaultContactJson } from 'assets/data/SubServicePage/DefaultContactJson';
import { useBlogTracking } from 'hooks/useBlogTracking';

const POSTS_PER_PAGE = 12;

const BlogOverview: FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { trackCategoryFilter } = useBlogTracking();
  
  // Get categories first to map slug to ID
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  
  // Get page and category from URL params
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const selectedCategorySlug = searchParams.get('category') || undefined;
  
  // Map category slug to ID (API expects category ID)
  const selectedCategoryId = useMemo(() => {
    if (!selectedCategorySlug || !categories) return undefined;
    const category = categories.find(c => c.slug === selectedCategorySlug);
    return category?.id;
  }, [selectedCategorySlug, categories]);
  
  // Calculate cursor based on page number (memoized)
  const cursor = useMemo(() => (currentPage - 1) * POSTS_PER_PAGE, [currentPage]);
  
  const { data: postsData, isLoading: postsLoading } = usePosts({
    cursor,
    limit: POSTS_PER_PAGE,
    category: selectedCategoryId,
  });

  // Calculate total pages (memoized)
  const totalPages = useMemo(
    () => (postsData?.pagination.total ? Math.ceil(postsData.pagination.total / POSTS_PER_PAGE) : 1),
    [postsData?.pagination.total]
  );

  const handlePageChange = useCallback((_event: ChangeEvent<unknown>, page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams, setSearchParams]);

  const handleCategoryFilter = useCallback((categorySlug?: string) => {
    const params = new URLSearchParams();
    
    if (categorySlug) {
      params.set('category', categorySlug);
      trackCategoryFilter(categorySlug);
    }
    params.set('page', '1'); // Reset to first page
    
    setSearchParams(params);
  }, [setSearchParams, trackCategoryFilter]);

  const handlePostClick = useCallback((post: any) => {
    navigate(`/blog/${post.slug}`);
  }, [navigate]);

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
                    variant={!selectedCategorySlug ? "contained" : "outlined"}
                    color="primary"
                    size="medium"
                    onClick={() => handleCategoryFilter(undefined)}
                  >
                    All Posts
                  </MKButton>
                  {categories.map((category) => (
                    <MKButton
                      key={category.id}
                      variant={selectedCategorySlug === category.slug ? "contained" : "outlined"}
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

                {/* Pagination */}
                {totalPages > 1 && (
                  <Grid item xs={12}>
                    <Stack spacing={1} alignItems="center" mt={6} mb={4}>
                      <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                        size="large"
                        showFirstButton
                        showLastButton
                        sx={{
                          '& .MuiPaginationItem-root': {
                            fontSize: '1rem',
                            fontWeight: 500,
                          },
                          '& .Mui-selected': {
                            backgroundColor: 'primary.main',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                            },
                          },
                        }}
                      />
                      <MKTypography variant="caption" color="text" sx={{ fontSize: '0.75rem', opacity: 0.7 }}>
                        Page {currentPage} of {totalPages} • {postsData.pagination.total} articles
                      </MKTypography>
                    </Stack>
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
