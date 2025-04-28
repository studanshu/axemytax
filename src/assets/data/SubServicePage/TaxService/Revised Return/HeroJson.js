// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Revised Return",
  image: HeroImage,
  description:
    "Filed your Income Tax Return but made a mistake? No worries! You can file a Revised Return to update your information. We help you correct your return before the due date and ensure it’s processed properly by the Income Tax Department.",
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
