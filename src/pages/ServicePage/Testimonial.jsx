import { Suspense } from "react";

// @mui material components
import { Box, Paper } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Import JSON
import { TestimonialJson } from "assets/data/ServicePage/TestimonialJson";

const renderLoader = () => <p>Loading</p>;

const { size, fontWeightRegular, fontWeightMedium } = typography;
const { info, white, blackAlt } = colors;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: (
    <button>
      <ArrowForwardIosIcon />
    </button>
  ),
  prevArrow: (
    <button>
      <ArrowForwardIosIcon />
    </button>
  ),
};

const boxShadow =
  "0px 2.77px 2.21px 0px #00000005, 0px 6.65px 5.32px 0px #00000007, 0px 12.52px 10.02px 0px #00000009, 0px 22.34px 17.87px 0px #0000000B, 0px 41.78px 33.42px 0px #0000000D, 0px 100px 80px 0px #00000012";

const slickStyling = {
  "& .slick-track": {
    display: "flex",
  },
  "& .slick-slide > div": {
    display: "flex",
    placeContent: "center",
  },
  "& .slick-prev:before, .slick-next:before": {
    content: '""',
  },
  "& .slick-prev, .slick-next": {
    width: "60px",
    height: "60px",
    fontSize: "32px !important",
    display: "flex !important",
    placeContent: "center",
    placeItems: "center",
    color: info.main,
    background: white.main,
    borderRadius: "50%",
    boxShadow: boxShadow,
    zIndex: 1,
  },
  "& .slick-prev": {
    left: 0,
    "& svg": {
      transform: "rotate(180deg)",
    },
  },
  "& .slick-next": {
    right: 0,
  },
};

function Testimonial() {
  return (
    <Suspense fallback={renderLoader()}>
      <Box
        // height="100vh"
        display="flex"
        flexDirection="column"
        p={8}
        sx={{ background: white.main, placeItems: "center" }}
      >
        <Box>
          <MKTypography
            variant="h6"
            color="info"
            sx={{
              fontWeight: fontWeightMedium,
              textTransform: "uppercase",
            }}
          >
            {TestimonialJson.caption}
          </MKTypography>
          <MKTypography variant="d5" pt={1} color="darkBlue">
            {TestimonialJson.title}
          </MKTypography>
        </Box>

        <Box py={6} maxWidth="1200px" sx={slickStyling}>
          <Slider {...settings}>
            {TestimonialJson.reviews.map((testimonial) => (
              <Paper
                sx={{ m: 3, p: 5, maxWidth: "340px", borderRadius: 2 }}
                elevation={8}
              >
                <MKTypography
                  variant="subtitle1"
                  color="darkBlue"
                  sx={{
                    fontWeight: fontWeightRegular,
                    textTransform: "capitalize",
                  }}
                >
                  {testimonial.name}
                </MKTypography>

                <MKTypography
                  variant="subtitle2"
                  sx={{
                    mt: 0.5,
                    display: "flex",
                    placeItems: "center",
                    gap: 0.5,
                    fontWeight: fontWeightRegular,
                    fontSize: size.sm,
                    color: rgba(blackAlt.main, "0.75"),
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: `${size.md} !important` }} />
                  {testimonial.duration}
                </MKTypography>

                <MKTypography
                  variant="subtitle2"
                  sx={{
                    mt: 3,
                    mb: 2,
                    fontWeight: fontWeightRegular,
                    color: rgba(blackAlt.main, "0.5"),
                  }}
                >
                  {testimonial.comment}
                </MKTypography>

                <Box
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: info.main,
                    },
                  }}
                >
                  {testimonial.rating}
                </Box>
              </Paper>
            ))}
          </Slider>
        </Box>
      </Box>
    </Suspense>
  );
}

export default Testimonial;
