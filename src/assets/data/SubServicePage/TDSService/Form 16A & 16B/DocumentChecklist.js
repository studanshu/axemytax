// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\Form 16A & 16B\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import Form16Image from "assets/images/default/form_16.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "TAN Details",
      des: "Valid Tax Deduction Account Number (TAN) and login credentials for TRACES portal access.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "TDS Return Acknowledgment",
      des: "Confirmation of TDS return filing for the relevant quarter/period.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Deductee PAN Details",
      des: "Accurate PAN information of all deductees for whom certificates need to be generated.",
      image: PanCardImage,
    },
    {
      title: "TDS Challan Details",
      des: "Payment confirmation of TDS deposited with government treasury.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Previous Certificates",
      des: "Earlier issued Form 16A/16B (if any) for reference and continuity.",
      image: Form16Image,
    },
    {
      title: "Deductee Contact Information",
      des: "Email addresses or postal details of deductees for certificate distribution.",
      icon: ArticleOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    DefaultFormFields.companyName,
    {
      label: "Period/Quarter",
      name: "period_quarter",
      type: "text",
      placeholder: "e.g., Q3 FY 2024-25"
    },
    {
      label: "Number of Certificates Required",
      name: "certificate_count",
      type: "number"
    },
  ],
  buttonText: "Request Callback",
};
