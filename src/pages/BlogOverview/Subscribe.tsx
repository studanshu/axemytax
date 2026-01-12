import { Box, Container } from "@mui/material";
import colors from "assets/theme/base/colors";
import InlineForm from "components/Custom/InlineForm";
import MKBox from "components/MKBox";
import { Suspense, FC } from "react";
import { FormInput } from "components/Custom/Form/CustomForm";

const renderLoader = () => <></>;

interface SubscribeJsonData {
  caption?: string;
  title?: string;
  description?: string;
  image: string;
  inputs: FormInput[];
  buttonText: string;
  flexDirection?: "row" | "row-reverse";
  [key: string]: any;
}

interface SubscribeProps {
  jsonData: SubscribeJsonData;
}

const Subscribe: FC<SubscribeProps> = ({ jsonData }) => {
  const flexDirection = (jsonData.flexDirection === "row" || jsonData.flexDirection === "row-reverse") 
    ? jsonData.flexDirection 
    : "row";
    
  return (
    <Suspense fallback={renderLoader()}>
      <MKBox sx={{ my: 24, backgroundColor: colors.light.main }}>
        <Container>
          <Box px={4} py={6}>
            <InlineForm
              FormJson={jsonData}
              flexDirection={flexDirection}
            />
          </Box>
        </Container>
      </MKBox>
    </Suspense>
  );
};

export default Subscribe;
