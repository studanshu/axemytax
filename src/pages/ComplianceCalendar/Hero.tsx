import { Container, Grid } from "@mui/material";
import MKBox from "components/MKBox";
import SectionHeader from "components/Custom/SectionHeader";
import MKTypography from "components/MKTypography";
import TopLayout from "pages/utils/TopLayout";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ComplianceCalendarHeroJson } from "assets/data/ComplianceCalendar/types";

interface HeroProps {
  jsonData: ComplianceCalendarHeroJson;
}

const Hero: FC<HeroProps> = ({ jsonData }) => (
  <>
    <TopLayout />
    <Container>
      <MKBox py={24} px={4}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKBox display="flex" flexDirection="column" gap={4}>
              <SectionHeader
                caption={jsonData.caption}
                title={jsonData.title}
                variant="h2"
                color="black"
              />
              <MKTypography variant="body1" color="text">
                {jsonData.description}
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ display: { xs: "none", lg: "block" } }}>
            <LazyLoadImage
              src={jsonData.image}
              alt="Compliance Calendar"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "12px" }}
              effect="blur"
            />
          </Grid>
        </Grid>
      </MKBox>
    </Container>
  </>
);

export default Hero;
