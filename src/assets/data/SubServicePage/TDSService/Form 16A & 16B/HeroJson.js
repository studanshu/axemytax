// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\Form 16A & 16B\HeroJson.js
// Images
import SendIcon from "@mui/icons-material/Send";
import HeroImage from "assets/images/SubServicePage/TDSService/hero.png";

export const HeroJson = {
  caption: "Get to know more about",
  title: "Form 16A & 16B",
  image: HeroImage,
  description:
    "Form 16A and Form 16B are critical TDS certificates that deductors must issue to verify tax deduction at source. While Form 16A covers non-salary TDS deductions (interest, professional fees, rent, etc.), Form 16B specifically relates to property transaction TDS. Our comprehensive service handles the generation, verification, and timely distribution of these certificates through the TRACES portal, ensuring your deductees receive proper documentation for their tax filings and you remain fully compliant with TDS certificate issuance requirements.",
  buttons: [
    {
      label: "Get Started",
      color: "primary",
      variant: "contained",
      icon: <SendIcon />,
    },
  ],
};
