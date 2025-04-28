import { Suspense } from "react";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Container, Paper } from "@mui/material";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

import MKTypography from "components/MKTypography";

import CustomSlider from "components/Custom/CustomSlider";
import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";

const renderLoader = () => <></>;

const { size } = typography;
const { info, white } = colors;

function Testimonial({ jsonData }) {
  const TestimonialJson = jsonData;
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
            caption={TestimonialJson.caption ? TestimonialJson.caption : "Our Reviews"}
            title={TestimonialJson.title ? TestimonialJson.title : "What Our Clients Say"}
          />
          <CustomSlider sx={{ mt: 6 }}>
            {TestimonialJson.reviews.map((testimonial) => (
              <Paper
                key={testimonial.name}
                sx={{ mx: 4, my: 6, px: 3, py: 4, borderRadius: 2 }}
                elevation={16}
                height="100%"
              >
                <MKTypography variant="h5Light" color="secondary">
                  {testimonial.name ? testimonial.name : ""}
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
                  <AccessTimeIcon sx={{ fontSize: `${size.md} !important` }} />
                  {testimonial.duration ? testimonial.duration : ""}
                </MKTypography>

                <MKTypography
                  variant="body1"
                  color="black50"
                  sx={{
                    mt: 3,
                  }}
                >
                  {testimonial.comment ? testimonial.comment : ""}
                </MKTypography>

                <Box
                  sx={{
                    "& .MuiRating-iconFilled": {
                      color: info.main,
                    },
                  }}
                >
                  {testimonial.rating ? testimonial.rating : ""}
                </Box>
              </Paper>
            ))}
          </CustomSlider>
        </Box>
      </Container>
    </Suspense>
  );
}

Testimonial.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string,
    title: PropTypes.string,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        duration: PropTypes.string,
        comment: PropTypes.string,
        rating: PropTypes.node,
      })
    ),
  }).isRequired,
};

export default Testimonial;
