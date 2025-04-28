// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\OthersService\Other Services\HeroJson.js
// Images
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png"; // Using DirectTaxation hero as fallback

export const HeroJson = {
  caption: "Get to know more about",
  title: "Other Professional Services",
  image: HeroImage,
  description:
    "Our Other Professional Services category encompasses a wide range of specialized financial, compliance, and business support solutions that don't fit neatly into standard service categories. From specialized attestations and certifications to bespoke advisory services, custom financial analysis, and regulatory compliance assistance, we provide tailored expertise to address your unique business needs. Our team of qualified professionals is ready to handle miscellaneous requirements with the same level of excellence and attention to detail as our standard service offerings.",
  buttons: [
    {
      label: "Get Started",
      color: "primary",
      variant: "contained",
      icon: <SendIcon />,
    },
  ],
};
