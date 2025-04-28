// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\soleProprietorshipIncorporation\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Permanent Account Number card of the proprietor (mandatory for all registrations).",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Card",
      des: "Proprietor's Aadhaar card for identity verification (linked to business registrations).",
      image: AadharCardImage,
    },
    {
      title: "Address Proof",
      des: "Business premises proof - rent agreement, electricity bill, or property document.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "Passport Size Photos",
      des: "2-4 recent passport size photographs of the proprietor.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Bank Statement",
      des: "Latest 3 months bank statement for financial verification (if existing business).",
      image: BankStatementImage,
    },
    {
      title: "Business Plan/Description",
      des: "Brief description of business activities for appropriate license categorization.",
      icon: StorefrontOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Business Name",
      name: "business_name",
      type: "text",
    },
    {
      label: "Business Type/Nature",
      name: "business_type",
      type: "text", 
    },
  ],
  buttonText: "Request Callback",
};
