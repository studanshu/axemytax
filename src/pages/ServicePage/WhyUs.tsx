import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import { FC, Suspense } from "react";
import RenderForm from "./RenderForm";

const renderLoader = () => <></>;

const { light } = colors;

interface Reason {
  image: string;
  title?: string;
  des?: string;
}

interface WhyUsJsonData {
  caption?: string;
  title?: string;
  reasons?: Reason[];
  secondaryCaption?: string;
  secondaryTitle?: string;
  checkboxes: {
    options: any[];
    [key: string]: any;
  };
  dropdownBusiness: any;
  email: any;
  [key: string]: any;
}

interface WhyUsProps {
  jsonData: WhyUsJsonData;
}

const WhyUs: FC<WhyUsProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={{ background: light.main, py: { xs: 3, xl: 6 } }}>
        <Container>
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="WhyUs"
            sx={{ gap: { xs: 6, xl: 12 }, px: { xl: 2 } }}
          >
            <Grid
              container
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ gap: { xs: 4, xl: 6 } }}
              className="whyUsContent"
            >
              <SectionHeader
                caption={jsonData.caption ? jsonData.caption : "Expert Service, Unmatched"}
                title={jsonData.title ? jsonData.title : "Why Choose Us?"}
                sx={{ px: { xs: 5, lg: 0 } }}
              />
              <ReasonCards reasons={jsonData.reasons || []} />
            </Grid>
            <Grid item sx={{ minWidth: "100%" }}></Grid>
            <RenderForm jsonData={jsonData} />
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

export default WhyUs;
