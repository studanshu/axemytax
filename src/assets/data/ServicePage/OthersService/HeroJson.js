// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/OtherService/hero.png";

export const HeroJson = {
  caption: "Additional Professional Services",
  title: "Specialized Financial & Business Solutions",
  image: HeroImage,
  description:
    "Beyond our core service categories, we offer specialized solutions tailored to unique business and individual needs. Whether you require assistance with complex financial matters, regulatory compliance, or specialized business documentation, our expert team provides professional guidance and support to address your specific requirements.",
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
