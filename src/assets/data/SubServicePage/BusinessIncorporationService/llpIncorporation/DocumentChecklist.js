// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\llpIncorporation\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import PassportImage from "assets/images/default/passport.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Cards of All Partners",
      des: "PAN cards of all designated partners and other partners for verification and registrations.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Cards of All Partners",
      des: "Aadhaar cards of all partners required for DSC application and KYC verification.",
      image: AadharCardImage,
    },
    {
      title: "Passport Size Photos",
      des: "Recent passport-sized photographs of all partners for various registration forms.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Registered Office Proof",
      des: "Ownership proof/rent agreement with NOC for registered office address verification.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "Identity Proof (Additional)",
      des: "Passport, driving license or voter ID as secondary ID proof for verification.",
      image: PassportImage,
    },
    {
      title: "Bank Statements/Utility Bills",
      des: "Recent statements/bills as address proof of partners and registered office.",
      icon: ArticleOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Number of Partners",
      name: "partner_count",
      type: "number",
    },
    {
      label: "Proposed LLP Name (3 options)",
      name: "llp_name_options",
      type: "text",
    },
  ],
  buttonText: "Request Callback",
};
