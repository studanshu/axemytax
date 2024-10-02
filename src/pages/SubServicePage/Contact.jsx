import { Box, Container } from "@mui/material";
import InlineForm from "components/Custom/InlineForm";
import PropTypes from "prop-types";
import { Suspense } from "react";
const renderLoader = () => <p>Loading</p>;

function Contact({ jsonData }) {
  return (
    <Suspense fallback={renderLoader()}>
      <Container sx={{ my: 24 }}>
        <Box px={4}>
          <InlineForm
            FormJson={jsonData}
            flexDirection={jsonData.flexDirection}
            parentName={"SubServicePage"}
          />
        </Box>
      </Container>
    </Suspense>
  );
}

Contact.propTypes = {
  jsonData: PropTypes.object.isRequired,
};

export default Contact;
