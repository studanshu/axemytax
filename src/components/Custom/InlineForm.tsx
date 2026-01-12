import { Box, Grid } from "@mui/material";

import SectionHeader from "components/Custom/SectionHeader";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CustomForm from "./Form/CustomForm";
import { FormInput } from "./Form/CustomForm";

interface FormJsonData {
  caption?: string;
  title?: string;
  description?: string;
  image: string;
  inputs: FormInput[];
  buttonText: string;
}

interface InlineFormProps {
  FormJson: FormJsonData;
  flexDirection?: "row" | "row-reverse";
}

const InlineForm: FC<InlineFormProps> = ({ FormJson, flexDirection = "row" }) => {
  return (
    <>
      <Grid container spacing={8} direction={flexDirection}>
        <Grid item xs={12} lg={6} p={0}>
          <Box display="flex" flexDirection="column" gap={6}>
            <SectionHeader
              caption={FormJson.caption ? FormJson.caption : ""}
              title={FormJson.title ? FormJson.title : ""}
              variant="h2"
              color="secondary"
            />
            <CustomForm jsonData={FormJson} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <LazyLoadImage
            src={FormJson.image}
            alt="Form Image"
            style={{ maxWidth: "100%", height: "auto" }}
            effect="blur"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default InlineForm;
