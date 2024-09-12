/* eslint-disable react/jsx-key */
import { Suspense } from "react";

// @mui material components
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Paper } from "@mui/material";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

import SectionHeader from "components/Custom/SectionHeader";

// Import JSON
import { TestimonialJson } from "assets/data/ServicePage/TestimonialJson";
import breakpoints from "assets/theme/base/breakpoints";

const renderLoader = () => <p>Loading</p>;

const { size } = typography;
const { info, white } = colors;

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  speed: 500,
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
  responsive: [
    {
      breakpoint: breakpoints.values.lg,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: breakpoints.values.xl,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const boxShadow =
  "0px 95.6292495727539px 76.50340270996094px 0px rgba(0, 0, 0, 7%), 0px 39.95161819458008px 31.96129035949707px 0px rgba(0, 0, 0, 5%), 0px 21.36004638671875px 17.088037490844727px 0px rgba(0, 0, 0, 4%), 0px 11.97426700592041px 9.579413414001465px 0px rgba(0, 0, 0, 4%), 0px 6.359442710876465px 5.087554454803467px 0px rgba(0, 0, 0, 3%), 0px 2.6463067531585693px 2.1170451641082764px 0px rgba(0, 0, 0, 2%);";

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
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            background: white.main,
            placeItems: "center",
            marginY: { xs: 10, xl: 16 },
            marginX: { sm: 2 },
          }}
        >
          <SectionHeader
            caption={TestimonialJson.caption}
            title={TestimonialJson.title}
          />

          <Box mt={6} maxWidth="100%" sx={slickStyling}>
            <Slider {...settings}>
              {TestimonialJson.reviews.map((testimonial) => (
                <Paper
                  sx={{ mx: 4, my: 6, px: 3, py: 4, borderRadius: 2 }}
                  elevation={16}
                  height="100%"
                >
                  <MKTypography variant="h5Light" color="secondary">
                    {testimonial.name}
                  </MKTypography>

                  <MKTypography
                    variant="subtitle1"
                    color="black75"
                    sx={{
                      display: "flex",
                      placeItems: "center",
                      gap: 1,
                    }}
                  >
                    <AccessTimeIcon
                      sx={{ fontSize: `${size.md} !important` }}
                    />
                    {testimonial.duration}
                  </MKTypography>

                  <MKTypography
                    variant="body1"
                    color="black50"
                    sx={{
                      mt: 3,
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
      </Container>
    </Suspense>
  );
}

export default Testimonial;
