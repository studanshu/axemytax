import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, SxProps, Theme } from "@mui/material";
import { FC, ReactNode } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import colors from "assets/theme/base/colors";

import breakpoints from "assets/theme/base/breakpoints";
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

const slickStyling: SxProps<Theme> = {
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
    width: "2.5rem",
    height: "2.5rem",
    fontSize: "1.5rem !important",
    display: "flex !important",
    placeContent: "center",
    placeItems: "center",
    color: info.main,
    background: white.main,
    borderRadius: "50%",
    boxShadow: boxShadow,
    zIndex: 1,
    "@media (min-width: 600px)": {
      width: "3rem",
      height: "3rem",
      fontSize: "1.75rem !important",
    },
    "@media (min-width: 960px)": {
      width: "3.5rem",
      height: "3.5rem",
      fontSize: "2rem !important",
    },
    "&:focus, &:active": {
      color: info.main,
      background: white.main,
    },
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

interface CustomSliderProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const CustomSlider: FC<CustomSliderProps> = ({ children, sx }) => {
  return (
    <Box maxWidth="100%" sx={{ ...slickStyling, ...sx }}>
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};

export default CustomSlider;
