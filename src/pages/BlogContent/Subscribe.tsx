import { Box, Container } from "@mui/material";
import colors from "assets/theme/base/colors";
import InlineForm from "components/Custom/InlineForm";
import MKBox from "components/MKBox";
import { FC, Suspense } from "react";

interface SubscribeProps {
  jsonData: any;
}

const renderLoader = () => <></>;

const Subscribe: FC<SubscribeProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <MKBox sx={{ my: 24, backgroundColor: colors.light.main }}>
        <Container>
          <Box px={4} py={6}>
            <InlineForm
              FormJson={jsonData}
              flexDirection={jsonData.flexDirection || "row"}
            />
          </Box>
        </Container>
      </MKBox>
    </Suspense>
  );
};

export default Subscribe;
