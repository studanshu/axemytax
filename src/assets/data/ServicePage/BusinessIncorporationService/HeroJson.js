// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/ServicePage/BusinessIncorporationService/hero.png";

export const HeroJson = {
  caption: "Business Formation & Registration Services",
  title: "Start Your Business Journey With Confidence",
  image: HeroImage,
  description:
    "Launching a business involves critical legal and structural decisions. Our business incorporation specialists guide you through selecting the optimal business structure, completing registration formalities, and establishing a solid foundation for your venture. We handle all documentation and compliance requirements to ensure a smooth and legally sound business setup.",
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
