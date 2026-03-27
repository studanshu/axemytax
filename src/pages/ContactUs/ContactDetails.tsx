import { Container, Grid } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MapEmbed from "components/Custom/MapEmbed";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/Custom/SectionHeader";
import TopLayout from "pages/utils/TopLayout";
import { FC } from "react";

interface ContactDetailsJsonData {
  caption: string;
  title: string;
  details: { title: string; des: string }[];
  mapQuery?: string;
}

interface ContactDetailsProps {
  jsonData: ContactDetailsJsonData;
}

const DETAIL_ICONS: Record<string, typeof EmailOutlinedIcon> = {
  "Email Us": EmailOutlinedIcon,
  "Call Us": LocalPhoneOutlinedIcon,
  "Visit Us": LocationOnOutlinedIcon,
  "WhatsApp": WhatsAppIcon,
};

const ContactDetails: FC<ContactDetailsProps> = ({ jsonData }) => {
  return (
    <>
      <TopLayout />
      <Container>
        <MKBox py={24} px={{ xs: 2, md: 4 }}>
          <MKBox mb={4}>
            <SectionHeader
              caption={jsonData.caption}
              title={jsonData.title}
            />
          </MKBox>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={6}>
              {jsonData.mapQuery && (
                <MapEmbed query={jsonData.mapQuery} height="100%" />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <MKBox
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
                gap={3}
                py={2}
              >
                {jsonData.details.map((detail) => {
                  const Icon = DETAIL_ICONS[detail.title] || LocationOnOutlinedIcon;
                  return (
                    <MKBox
                      key={detail.title}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                    >
                      <MKBox
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          bgcolor: "info.main",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon sx={{ color: "white.main", fontSize: "1.25rem" }} />
                      </MKBox>
                      <MKBox>
                        <MKTypography variant="h6" color="black">
                          {detail.title}
                        </MKTypography>
                        <MKTypography variant="body2" color="text">
                          {detail.des}
                        </MKTypography>
                      </MKBox>
                    </MKBox>
                  );
                })}
              </MKBox>
            </Grid>
          </Grid>
        </MKBox>
      </Container>
    </>
  );
};

export default ContactDetails;
