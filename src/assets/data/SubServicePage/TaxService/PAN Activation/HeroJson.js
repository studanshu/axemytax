// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "PAN Activation",
  image: HeroImage,
  description:
    "Is your PAN inactive due to non-linking with Aadhaar or other reasons? We help you reactivate your PAN quickly so you can file taxes, invest, and access banking services without interruptions.",
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
