import { Box, Container } from "@mui/material";
import InlineForm from "components/Custom/InlineForm";
import { FC } from "react";

interface ContactProps {
  jsonData: any;
}

const Contact: FC<ContactProps> = ({ jsonData }) => (
  <Container sx={{ my: 24 }}>
    <Box px={4}>
      <InlineForm FormJson={jsonData} flexDirection="row" />
    </Box>
  </Container>
);

export default Contact;
