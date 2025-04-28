/// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Change in Particulars of PAN",
  image: HeroImage,
  description:
    "Need to update your PAN details due to a name change, incorrect date of birth, or address update? We make the process of correcting your PAN details smooth, accurate, and fully compliant with the Income Tax Department.",
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
