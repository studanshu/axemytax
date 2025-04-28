// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Relocation of PAN",
  image: HeroImage,
  description:
    "Moved to a different state or city in India? You need to relocate your PAN to the new jurisdiction for smoother communication and updates from the Income Tax Department. We handle the entire process on your behalf, hassle-free.",
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
