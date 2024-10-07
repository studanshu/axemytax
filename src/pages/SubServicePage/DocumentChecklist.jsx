import { Box, Container, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";
import { Suspense } from "react";
import ChecklistAction from "./ChecklistAction";
const renderLoader = () => <></>;

function DocumentChecklist({ jsonData }) {
  const DocumentChecklistData = jsonData;
  return (
    <Suspense fallback={renderLoader()}>
      <Box mt={24} sx={{ backgroundColor: colors.light.main }}>
        <Container>
          <Grid container sx={{ py: { xs: 3, xl: 6 }, gap: { xs: 4, xl: 8 } }}>
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
                  title={DocumentChecklistData.title}
                  caption={DocumentChecklistData.caption}
                  sx={{ px: { xs: 3, lg: 0 } }}
                />
              </Grid>
              <Grid
                item
                className="documentList"
                sx={{ px: { xs: 2, lg: 12 } }}
              >
                <ReasonCards reasons={DocumentChecklistData.documents} />
              </Grid>
            </Grid>
            <ChecklistAction inputs={jsonData.inputs} />
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}

DocumentChecklist.propTypes = {
  jsonData: PropTypes.object.isRequired,
};

export default DocumentChecklist;
