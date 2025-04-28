import PanCardImage from "assets/images/default/pan_card.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card of the remitter entity or individual.",
      image: PanCardImage,
    },
    {
      title: "Invoice/Agreement",
      des: "Original invoice or agreement with the foreign party detailing the nature of services or goods.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Remittance Details",
      des: "A15 Form or bank remittance application form specifying beneficiary details and purpose code.",
      icon: ReceiptLongOutlinedIcon,
    },
    {
      title: "Bank Statement",
      des: "Copy of bank statement or payment confirmation showing the transaction amount.",
      icon: AccountBalanceOutlinedIcon,
    },
    {
      title: "Tax Residency Certificate",
      des: "Tax Residency Certificate of the foreign entity (if claiming DTAA benefits).",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Contract Documents",
      des: "Relevant contracts, work orders, or procurement documents supporting the remittance purpose.",
      icon: GavelOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
