import PropTypes from "prop-types";
import { Container } from "@mui/material";
import MKBox from "components/MKBox";
import InlineForm from "components/Custom/InlineForm";
export default function Contact({ jsonData }) {
  return (
    <Container sx={{ my: 24 }}>
      <MKBox px={{ xs: 2, md: 4 }}>
        <InlineForm FormJson={jsonData} flexDirection="row" />
      </MKBox>
    </Container>
  );
}

Contact.propTypes = {
  jsonData: PropTypes.object.isRequired,
};
