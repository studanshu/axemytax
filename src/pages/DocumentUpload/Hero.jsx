import PropTypes from "prop-types";
import { Container } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";
import SectionHeader from "components/Custom/SectionHeader";
export default function Hero({ jsonData: c }) {
  return (
    <>
      <TopLayout />
      <Container>
        <MKBox py={24} px={{ xs: 2, md: 4 }}>
          <SectionHeader
            caption={c.caption}
            title={c.title}
            variant="h2"
            color="secondary"
          />
          <MKTypography variant="body1" color="text" mt={2}>
            {c.description}
          </MKTypography>
        </MKBox>
      </Container>
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
