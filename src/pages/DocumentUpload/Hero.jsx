import PropTypes from "prop-types";
import { Container, Chip } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";
export default function Hero({ jsonData: c }) {
  return (
    <>
      <TopLayout />
      <MKBox sx={{ background: "linear-gradient(135deg,#f0f9ff,#f5f7ff)" }}>
        <Container>
          <MKBox pt={{ xs: 18, md: 24 }} pb={7} px={{ xs: 1, md: 4 }}>
            <Chip
              label={c.caption}
              size="small"
              color="info"
              variant="outlined"
            />
            <MKTypography
              variant="h2"
              mt={3}
              sx={{ fontSize: { xs: "2.3rem", md: "3.4rem" }, maxWidth: 700 }}
            >
              {c.title}
            </MKTypography>
            <MKTypography variant="body1" color="text" mt={2}>
              {c.description}
            </MKTypography>
          </MKBox>
        </Container>
      </MKBox>
    </>
  );
}

Hero.propTypes = {
  jsonData: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
