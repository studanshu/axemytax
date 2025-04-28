// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS Correction Returns\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import Form16Image from "assets/images/default/form_16.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "Original TDS Return",
      des: "Copy of the previously filed TDS return showing acknowledgment and submission details.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Error Justification",
      des: "Documentation explaining the reason for errors and justification for correction.",
      icon: ErrorOutlineOutlinedIcon,
    },
    {
      title: "Challan Details",
      des: "TDS payment challan copies if the correction involves changes to payment details.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Deductee PAN Cards",
      des: "Correct PAN details of deductees where PAN information needs correction.",
      image: PanCardImage,
    },
    {
      title: "Form 16/16A",
      des: "TDS certificates issued to deductees that may need correction or reissuance.",
      image: Form16Image,
    },
    {
      title: "Conso File",
      des: "Consolidated file of original TDS return if available for reference.",
      icon: DescriptionOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    DefaultFormFields.companyName,
    {
      label: "Financial Year",
      name: "financial_year",
      type: "text",
      placeholder: "e.g., 2024-25"
    },
    {
      label: "Quarter",
      name: "quarter",
      type: "text",
      placeholder: "e.g., Q1, Q2, Q3, Q4"
    },
  ],
  buttonText: "Request Callback",
};
