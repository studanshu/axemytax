import WhatsApp from "@mui/icons-material/WhatsApp";
import { Icon } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import jsonData from "assets/data/LandingPage/LocateUs";
import theme from "assets/theme";

const cardTheme = {
  width: "3rem",
  height: "3rem",
  color: theme.palette.white.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.info.main,
  boxShadow: theme.boxShadows.colored.info,
  borderRadius: theme.borders.borderRadius.xl,
};

export default function LocateUs() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }} id="locate" mt={8}>
      <Container>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} lg={7}>
            <MKTypography variant="h3" color="info">
              Contact Us
            </MKTypography>
            <MKTypography variant="subtitle1" color="main" mb={4} mt={2}>
              {jsonData["description"]}
            </MKTypography>
            <MKTypography component="a" href={jsonData["whatsapp"]["link"]}>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox sx={{ ...cardTheme }}>
                  <WhatsApp />
                </MKBox>
                <MKTypography variant="body1" color="main" pl={2}>
                  {jsonData["whatsapp"]["number"]}
                </MKTypography>
              </MKBox>
            </MKTypography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}
          >
            <Stack>
              {jsonData["sections"].map((data, _) => (
                <MKBox display="flex" alignItems="center" p={2} key={data.text}>
                  <MKBox sx={{ ...cardTheme }}>
                    <Icon>{data.icon}</Icon>
                  </MKBox>
                  <MKTypography variant="body1" color="main" pl={2}>
                    {data.text}
                  </MKTypography>
                </MKBox>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
