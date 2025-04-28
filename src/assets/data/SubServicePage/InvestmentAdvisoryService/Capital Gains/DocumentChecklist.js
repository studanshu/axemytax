// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\InvestmentAdvisoryService\Capital Gains\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card is mandatory for all capital gains tax assessments.",
      image: PanCardImage,
    },
    {
      title: "Bank Statements",
      des: "Bank statements showing transaction records for the relevant financial year.",
      image: BankStatementImage,
    },
    {
      title: "Investment Purchase Records",
      des: "Documentation showing when assets were acquired and at what price (purchase invoices, allotment letters, etc.).",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Investment Sale Records",
      des: "Documentation showing when assets were sold and at what price (sale deeds, broker statements, etc.).",
      icon: SellOutlinedIcon,
    },
    {
      title: "Previous Year ITR",
      des: "Previous years' income tax returns to establish a pattern of investments and gains/losses carried forward.",
      icon: AssessmentOutlinedIcon,
    },
    {
      title: "Property Documents",
      des: "For real estate transactions - sale deed, purchase agreement, improvement cost records, etc. if applicable.",
      icon: HomeWorkOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
