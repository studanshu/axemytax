// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\hufIncorporation\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "Karta's PAN Card",
      des: "Personal PAN card of the Karta (head of the HUF) for identification and registration.",
      image: PanCardImage,
    },
    {
      title: "Karta's Aadhaar Card",
      des: "Aadhaar card of the Karta for identity verification and e-signing purposes.",
      image: AadharCardImage,
    },
    {
      title: "Family Details",
      des: "Complete list of family members to be included in the HUF with their relationships.",
      icon: FamilyRestroomOutlinedIcon,
    },
    {
      title: "Address Proof",
      des: "Residential address proof of the Karta (utility bill, property document, etc.).",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Proof of Source of HUF Initial Capital",
      des: "Documents showing source of initial funds or assets to be transferred to HUF.",
      icon: AccountBalanceOutlinedIcon,
    },
    {
      title: "Marriage Certificate",
      des: "Marriage certificate of Karta (if applicable) for verification of family structure.",
      icon: ArticleOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Proposed HUF Name",
      name: "huf_name",
      type: "text",
    },
    {
      label: "Number of Family Members",
      name: "family_members",
      type: "number",
    },
  ],
  buttonText: "Request Callback",
};
