import { Box, Container, Grid } from "@mui/material";
import PropTypes from "prop-types";

// Material Kit 2 React base styles
import SendIcon from "@mui/icons-material/Send";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import ReasonCards from "components/Custom/ReasonCards";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
const { size } = typography;
// Material Kit 2 React components

function DocumentChecklist({ jsonData }) {
  const DocumentChecklistData = jsonData;
  return (
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
            <Grid item className="documentList" sx={{ px: { xs: 2, lg: 12 } }}>
              <ReasonCards reasons={DocumentChecklistData.documents} />
            </Grid>
          </Grid>
          <Grid
            container
            item
            className="ctaArea"
            justifyContent="space-around"
            sx={{ gap: { xs: 2, lg: 4 } }}
            px={12}
          >
            <Grid
              container
              item
              className="inputFields"
              xs={12}
              lg={8}
              spacing={2}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item className="name">
                <MKInput label="Name *" variant="outlined" />
              </Grid>
              <Grid item className="phone">
                <MKInput label="Phone Number *" variant="outlined" />
              </Grid>
              <Grid item className="email">
                <MKInput label="Email address" variant="outlined" />
              </Grid>
            </Grid>
            <Grid item className="button">
              <MKButton
                size="large"
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                  fontSize: size.lg,
                  width: "100%",
                  boxShadow:
                    "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);",
                }}
                endIcon={<SendIcon />}
              >
                Request Callback
              </MKButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

DocumentChecklist.propTypes = {
  jsonData: PropTypes.shape({
    flexDirection: PropTypes.string.isRequired,
  }).isRequired,
};

export default DocumentChecklist;
