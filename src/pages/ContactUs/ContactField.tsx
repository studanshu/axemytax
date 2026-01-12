import { Box, Container, Grid } from "@mui/material";
import TopLayout from "pages/utils/TopLayout";
import CustomForm from "components/Custom/Form/CustomForm";
import SectionHeader from "components/Custom/SectionHeader";
import { Suspense, FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const renderLoader = () => <></>;

interface FormInput {
  id: string;
  label: string;
  formLabel: string;
  type: string;
  fieldType: string;
  spacing?: string;
  required?: boolean;
  options?: string[];
}

interface ContactFieldJsonData {
  flexDirection: string;
  caption: string;
  title: string;
  image: string;
  inputs: FormInput[];
  buttonText?: string;
  button?: string;
}

interface ContactFieldProps {
  jsonData: ContactFieldJsonData;
}

const ContactField: FC<ContactFieldProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Container>
        <Box py={24} px={4}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} lg={6} className="headerAndImage">
              <Grid
                container
                flexDirection="column"
                alignItems="flex-start"
                sx={{ gap: 12, pb: 6 }}
              >
                <Grid item className="header">
                  <SectionHeader
                    caption={jsonData.caption}
                    title={jsonData.title}
                  />
                </Grid>
                <Grid
                  item
                  className="header"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  <LazyLoadImage
                    src={jsonData.image}
                    alt="Contact Us Image"
                    effect="blur"
                    style={{ maxWidth: "90%", height: "auto" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} className="formContent">
              <CustomForm jsonData={jsonData as any} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Suspense>
  );
};

export default ContactField;
