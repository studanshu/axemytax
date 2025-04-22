// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Fresh ITR Filing",
  image: HeroImage,
  description:
    "Filing your Income Tax Return (ITR) for the first time? We make it easy! Whether you're salaried, self-employed, or have investments, we'll guide you step-by-step to file your return accurately and on time.",
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
