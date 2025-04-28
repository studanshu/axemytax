// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/TDSService/hero.png";

export const HeroJson = {
  caption: "TDS Services - Tax Deducted at Source",
  title: "Comprehensive TDS Solutions for Business Compliance",
  image: HeroImage,
  description:
    "Our TDS services cover everything from TAN registration to TDS return filing and correction returns. We help businesses and individuals manage their tax deduction obligations efficiently and ensure timely deposit and reporting of taxes deducted at source, keeping you compliant with the Income Tax Act provisions and avoiding penalties.",
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
