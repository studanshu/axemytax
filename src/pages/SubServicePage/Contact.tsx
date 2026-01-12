import { Box, Container } from "@mui/material";
import InlineForm from "components/Custom/InlineForm";
import { FC, Suspense } from "react";

const renderLoader = () => <></>;

interface ContactProps {
  jsonData: {
    caption?: string;
    title?: string;
    description?: string;
    image: string;
    inputs: any[];
    buttonText: string;
    flexDirection?: "row" | "row-reverse";
    [key: string]: any;
  };
}

const Contact: FC<ContactProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Container sx={{ my: 24 }}>
        <Box px={4}>
          <InlineForm
            FormJson={jsonData}
            flexDirection={jsonData.flexDirection}
          />
        </Box>
      </Container>
    </Suspense>
  );
};

export default Contact;
