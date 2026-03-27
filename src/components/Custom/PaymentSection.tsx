import { Container, Grid, Paper } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { PaymentData } from "assets/data/Payment/index";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/Custom/SectionHeader";
import { QRCodeSVG } from "qrcode.react";
import { FC } from "react";

interface PaymentSectionProps {
  jsonData: PaymentData;
}

const PaymentSection: FC<PaymentSectionProps> = ({ jsonData }) => {
  const upiUri = `upi://pay?pa=${encodeURIComponent(jsonData.upiId)}&pn=${encodeURIComponent(jsonData.payeeName)}&cu=INR`;

  return (
    <MKBox component="section" py={8} sx={{ bgcolor: "grey.100" }}>
      <Container>
        <MKBox textAlign="center" mb={4}>
          <SectionHeader caption={jsonData.caption} title={jsonData.title} />
        </MKBox>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={5} display="flex" justifyContent="center">
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                bgcolor: "white.main",
              }}
            >
              <QRCodeSVG
                value={upiUri}
                size={220}
                level="H"
                includeMargin
              />
              <MKTypography variant="h6" color="black">
                {jsonData.upiId}
              </MKTypography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <MKTypography variant="body1" color="text" mb={3}>
              {jsonData.description}
            </MKTypography>
            <MKBox display="flex" flexDirection="column" gap={1.5}>
              {jsonData.instructions.map((step, idx) => (
                <MKBox key={idx} display="flex" alignItems="flex-start" gap={1.5}>
                  <CheckCircleOutlineIcon
                    sx={{ color: "info.main", fontSize: "1.25rem", mt: 0.3, flexShrink: 0 }}
                  />
                  <MKTypography variant="body2" color="text">
                    {step}
                  </MKTypography>
                </MKBox>
              ))}
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};

export default PaymentSection;
