// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/TaxService/hero.png";

export const HeroJson = {
  caption: "Filing Returns Made Easy",
  title: "Using Our Expertise, Save Your Taxes",
  image: HeroImage,
  description:
    "Leave the stress of taxes to us and let us handle it for you. Not only will we handle the task, but we will also file your returns seamlessly.",
  flexDirection: "row",
  buttons: [
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
