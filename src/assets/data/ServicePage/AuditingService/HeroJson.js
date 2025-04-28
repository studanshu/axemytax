// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/AuditingService/hero.png";

export const HeroJson = {
  caption: "Professional Auditing Services",
  title: "Thorough Audit Solutions for Business Confidence",
  image: HeroImage,
  description:
    "Our auditing services provide an independent and objective examination of your financial records, ensuring compliance with regulatory requirements and offering valuable insights for improved financial management. Whether you need statutory audits, tax audits, or internal audits, our experienced team delivers reliable results to enhance transparency and stakeholder confidence.",
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
