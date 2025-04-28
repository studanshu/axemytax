// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BookKeepingService\Providing Services Up to 100 Entries\HeroJson.js
// Images
import { SaveAltOutlined } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/default/logo.png"; // Using the logo image as a placeholder

export const HeroJson = {
  caption: "Get to know more about",
  title: "Providing Services Up to 100 Entries",
  image: HeroImage,
  description:
    "Streamline your business finances with our dedicated bookkeeping service for up to 100 entries. Perfect for small businesses and startups, our professional service helps you maintain accurate financial records, track income and expenses, and stay organized—so you can focus on growing your business while we handle the numbers.",
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
