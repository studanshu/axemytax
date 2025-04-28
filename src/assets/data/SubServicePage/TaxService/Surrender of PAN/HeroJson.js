// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Surrender of PAN",
  image: HeroImage,
  description:
    "Have more than one PAN card? That’s not allowed. You must surrender the duplicate to avoid penalties. We help you identify the correct one to keep and complete the surrender process smoothly and officially.",
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
