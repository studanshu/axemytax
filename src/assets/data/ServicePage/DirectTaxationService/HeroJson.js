// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/TaxService/hero.png";

export const HeroJson = {
  caption: "Income Tax Services - Making Taxes Simple for you",
  title: "Making taxes Simple & Hasssle Free",
  image: HeroImage,
  description:
    "Taxes can feel confusing, but we make them easy, quick, and hassle-free for you! Whether you need to file a tax return, correct an old one, or apply for a PAN card, we’ve got you covered. Here’s a step-by-step guide to each service, along with how long it takes, the cost, and what documents are needed.",
  flexDirection: "row",  buttons: [
    {
      label: "Start Filing",
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
