import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import { Suspense, FC } from "react";

const renderLoader = () => <></>;

const { light } = colors;

interface ContactDetail {
  image: string;
  title: string;
  des: string;
}

interface ContactDetailsJsonData {
  caption: string;
  title: string;
  details: ContactDetail[];
}

interface ContactDetailsProps {
  jsonData: ContactDetailsJsonData;
}

const ContactDetails: FC<ContactDetailsProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={{ background: light.main, py: { xs: 3, xl: 6 } }}>
        <Container>
          <Grid
            container
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ gap: { xs: 4, xl: 6 } }}
            className="ContactDetailsContent"
          >
            <SectionHeader
              caption={jsonData.caption}
              title={jsonData.title}
              sx={{ px: { xs: 5, lg: 0 } }}
            />
            <ReasonCards reasons={jsonData.details} />
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

export default ContactDetails;
