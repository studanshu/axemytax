import { Container, Grid, Pagination, useMediaQuery, useTheme } from "@mui/material";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import { Suspense, FC, useState, MouseEvent, ChangeEvent } from "react";

const renderLoader = () => <></>;

interface BlogItem {
  img: string;
  title: string;
  description: string;
  href: string;
}

interface BlogOverviewData {
  [category: string]: BlogItem[];
}

interface OverviewJsonData {
  caption: string;
  title: string;
  blogOverview: BlogOverviewData;
}

interface OverviewProps {
  jsonData: OverviewJsonData;
}

const Overview: FC<OverviewProps> = ({ jsonData }) => {
  const ITEMS_PER_PAGE = 6;
  const blogCategories = Object.keys(jsonData.blogOverview);
  const [selectedCategoryButton, setselectedCategoryButton] = useState(
    blogCategories[0]
  );
  const [page, setPage] = useState(1);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleCategoryChange = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget as HTMLButtonElement;
    setselectedCategoryButton(target.value);
    setPage(1);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = jsonData.blogOverview[selectedCategoryButton].slice(
    startIndex,
    endIndex
  );

  return (
    <Suspense fallback={renderLoader()}>
      <Container>
        <Grid
          container
          pt={24}
          px={4}
          flexDirection="column"
          sx={{ gap: { xs: 4, xl: 5 } }}
        >
          <Grid item alignSelf="center" className="blogOverviewHeader">
            <SectionHeader caption={jsonData.caption} title={jsonData.title} />
          </Grid>
          <Grid
            item
            container
            className="blogOverviewContent"
            flexDirection="column"
            sx={{ gap: { xs: 5, xl: 9 } }}
          >
            <Grid item className="buttons" alignSelf="center">
              <Grid
                container
                justifyContent="space-between"
                sx={{ gap: { xs: 2, xl: 4 } }}
              >
                {blogCategories.map((key) => (
                  <MKButton
                    key={key}
                    color="primary"
                    size={isMediumScreen ? "large" : "medium"}
                    value={key}
                    onClick={handleCategoryChange}
                    variant={
                      selectedCategoryButton === key ? "contained" : "text"
                    }
                  >
                    {key}
                  </MKButton>
                ))}
              </Grid>
            </Grid>
            <Grid item className="pagination" alignSelf="center">
              <Pagination
                count={Math.ceil(
                  jsonData.blogOverview[selectedCategoryButton].length /
                    ITEMS_PER_PAGE
                )}
                page={page}
                onChange={handlePageChange}
                color="primary"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "black50.main",
                  },
                  "& .Mui-selected": {
                    color: "white",
                  },
                }}
              />
            </Grid>
            <Grid item className="blogOverviewCards">
              <Grid
                container
                sx={{ gap: 8 }}
                alignContent="center"
                justifyContent="space-around"
              >
                {currentBlogs.map((blog) => (
                  <Grid item xs={12} sm={5} lg={3} key={blog.title}>
                    <CenteredBlogCard
                      image={blog.img}
                      title={blog.title}
                      description={blog.description}
                      action={{
                        type: "internal",
                        route: blog.href,
                        color: "dark",
                        label: "Read More",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Suspense>
  );
};

export default Overview;
