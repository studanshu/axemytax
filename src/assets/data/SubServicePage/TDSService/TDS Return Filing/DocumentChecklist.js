// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS Return Filing\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
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
      title: "TAN Certificate",
      des: "Tax Deduction Account Number certificate of the deductor entity required for TDS return filing.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "PAN Cards",
      des: "PAN details of all deductees for whom TDS has been deducted during the quarter.",
      image: PanCardImage,
    },
    {
      title: "TDS Payment Challans",
      des: "Copies of all TDS payment challans (Form 281) for the quarter being filed.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Bank Statements",
      des: "Bank statements showing TDS deduction and deposit transactions for reconciliation.",
      image: BankStatementImage,
    },
    {
      title: "Previous TDS Returns",
      des: "Copies of immediately preceding quarter's TDS returns for reference and continuity.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Form 16/16A Issued",
      des: "Copies of Form 16 (salary) or 16A (non-salary) TDS certificates issued, if any.",
      image: Form16Image,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    DefaultFormFields.companyName,
    {
      label: "Quarter and Financial Year",
      name: "quarter_fy",
      type: "text",
      placeholder: "e.g., Q1 FY 2025-26"
    },
  ],
  buttonText: "Request Callback",
};
