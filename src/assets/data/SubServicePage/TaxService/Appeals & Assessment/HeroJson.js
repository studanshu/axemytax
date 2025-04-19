// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Direct Taxation",
  image: HeroImage,
  description:
    "Direct Taxation is a tax that is paid directly to the government by the taxpayer. It is a tax applied to individuals and organizations directly by the government e.g. income tax, corporation tax, wealth tax etc. Direct tax is a type of tax where the impact and the incidence fall on the same entity.",
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
