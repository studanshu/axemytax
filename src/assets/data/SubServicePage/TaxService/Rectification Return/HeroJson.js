// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Rectification Return",
  image: HeroImage,
  description:
    "Made a mistake in your filed Income Tax Return? No problem! You can file a Rectification Return to correct it. We help you identify the error, file the rectification online, and ensure the correct tax position is reflected.",
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

