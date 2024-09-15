// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/service_page_tax.png";

export const DefaultHeroJson = {
  caption: "Get to know more about",
  title: "Direct Taxation",
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
