// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/BookKeepingService/hero.png";

export const HeroJson = {
  caption: "Professional Bookkeeping Services",
  title: "Focus on Your Business, Leave the Books to Us",
  image: HeroImage,
  description:
    "Our bookkeeping services provide systematic recording, organizing, and management of your financial transactions. We handle everything from basic data entry to complex financial management, ensuring accurate records and timely reporting that gives you clear insights into your business's financial health.",
  flexDirection: "row",
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
