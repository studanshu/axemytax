import { Box, Container } from "@mui/material";
import InlineForm from "components/Custom/InlineForm";
import { Suspense, FC } from "react";
import { FormInput } from "components/Custom/Form/CustomForm";

interface ContactJsonData {
  caption?: string;
  title?: string;
  description?: string;
  image: string;
  inputs: FormInput[];
  buttonText: string;
  flexDirection?: "row" | "row-reverse";
  [key: string]: any;
}

interface ContactProps {
  jsonData: ContactJsonData;
}

const renderLoader = () => <></>;

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
