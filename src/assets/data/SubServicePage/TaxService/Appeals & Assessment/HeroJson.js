// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Appeals & Assessment",
  image: HeroImage,
  description:
    "Received an income tax notice or facing a tax assessment? Don't worry! Appeals & Assessments are part of the income tax process where the tax department may ask for clarifications or additional details. We help you understand, respond, and resolve it smoothly—so you stay stress-free and compliant.",
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
