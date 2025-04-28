// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/InvestmentAdvisoryService/hero.png";

export const HeroJson = {
  caption: "Expert Investment Advisory Services",
  title: "Make Informed Financial Decisions",
  image: HeroImage,
  description:
    "Our investment advisory services help you navigate complex financial markets and investment options to maximize returns while minimizing tax implications. Whether you need guidance on capital gains strategies or creating corporate fixed deposits, our experienced advisors provide personalized recommendations aligned with your financial goals and risk tolerance.",
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
