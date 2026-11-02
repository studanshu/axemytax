import { FC } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const ClientWork: FC = () => {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }} id="client-work" mt={24}>
      <Container>
        <Grid container justifyContent="center" px={4}>
          <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
            <MKTypography variant="h3" color="info">
              Client Work
            </MKTypography>
            <MKTypography variant="subtitle1" color="text" mb={4} mt={2}>
              Illustrative examples of the kind of tax work we do — fictional scenarios, not client cases.
            </MKTypography>
            <MKButton variant="contained" color="info" href="/work">
              View examples
            </MKButton>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};

export default ClientWork;
