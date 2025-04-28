// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/CertificationsService/hero.png";

export const HeroJson = {
  caption: "Professional Certification Services",
  title: "Reliable Certifications for Your Financial Requirements",
  image: HeroImage,
  description:
    "Our certification services provide official documentation required for various regulatory compliance, financial transactions, and business operations. We offer comprehensive assistance for Lower TDS Certificates, Repatriation Certificates, House Property Certificates, Net Worth Certificates, and other specialized attestations, ensuring accurate documentation and compliance with all legal and regulatory requirements.",
  flexDirection: "row",
  buttons: [
    {
      label: "Get Started",
      color: "primary",
      variant: "contained",
      icon: <SendIcon />,
    },
    {
      label: "Download Guide",
      color: "lightBlue",
      variant: "outlined",
      icon: <SaveAltOutlined />,
    },
  ],
};
