// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Defective Returns",
  image: HeroImage,
  description:
    "Received a notice for defective return under Section 139(9)? Don't worry! A defective return simply means there's an error or missing information in your filed ITR. We help you understand the issue, correct it, and refile on time to avoid penalties.",
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

