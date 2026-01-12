import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import { FC, Suspense } from "react";
import ChecklistAction from "./ChecklistAction";

const renderLoader = () => <></>;

interface FormInput {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: Record<string, any> | string[];
}

interface DocumentChecklistProps {
  jsonData: {
    title?: string;
    caption?: string;
    documents: any[];
    inputs: FormInput[];
  };
}

const DocumentChecklist: FC<DocumentChecklistProps> = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Box mt={24} sx={{ backgroundColor: colors.light.main }}>
        <Container>
          <Grid container sx={{ py: { xs: 3, xl: 6 }, gap: { xs: 6, xl: 10 } }}>
            <Grid
              item
              container
              className="documentChecklist"
              flexDirection="column"
              alignItems="center"
              sx={{ gap: { xs: 4, lg: 8 } }}
            >
              <Grid item>
                <SectionHeader
                  title={jsonData.title || ""}
                  caption={jsonData.caption || ""}
                  sx={{ px: { xs: 3, lg: 0 } }}
                />
              </Grid>
              <Grid
                item
                className="documentList"
                sx={{ px: { xs: 2, lg: 12 } }}
              >
                <ReasonCards reasons={jsonData.documents} />
              </Grid>
            </Grid>
            <ChecklistAction inputs={jsonData.inputs} />
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
};

export default DocumentChecklist;
