// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/IndirectTaxationService/hero.png";

export const HeroJson = {
  caption: "GST Services - Simplifying Indirect Taxation",
  title: "Making GST Compliance Simple & Hassle-Free",
  image: HeroImage,
  description:
    "Navigating GST can be complex, but our expert team makes it straightforward and stress-free! Whether you need to register for GST, file returns, or prepare for an audit, we provide comprehensive solutions tailored to your business needs. Our efficient approach ensures you stay compliant while optimizing your tax position.",
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
