// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/DigitalSignaturesService/hero.png";

export const HeroJson = {
  caption: "Digital Signature Certificate Solutions",
  title: "Secure Digital Identity for Your Business",
  image: HeroImage,
  description:
    "Our Digital Signature Certificate (DSC) services provide legally valid electronic signatures that help you authenticate documents and transact online securely. Whether you need DSC for business filings, e-tendering, income tax returns, or other digital compliance requirements, we offer both domestic and international options with different validity periods.",
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
