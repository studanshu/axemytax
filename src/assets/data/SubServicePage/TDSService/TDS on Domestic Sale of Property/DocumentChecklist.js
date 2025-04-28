// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS on Domestic Sale of Property\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card (Buyer & Seller)",
      des: "Valid PAN cards of both buyer and seller are essential for TDS compliance and form submissions.",
      image: PanCardImage,
    },
    {
      title: "Sale Deed/Agreement",
      des: "Copy of property purchase agreement or sale deed showing property value and payment terms.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Property Documents",
      des: "Property papers including address proof, registration details, and ownership documentation.",
      icon: HomeWorkOutlinedIcon,
    },
    {
      title: "Payment Proofs",
      des: "Receipts, bank statements or payment confirmations showing property transaction amounts.",
      image: BankStatementImage,
    },
    {
      title: "TAN Details (if available)",
      des: "Tax Deduction Account Number details if the buyer already has one registered.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Form 26QB Draft",
      des: "Pre-filled draft of Form 26QB for payment of TDS on property transaction (we'll prepare this).",
      icon: ReceiptOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Property Value",
      name: "property_value",
      type: "number",
    },
    {
      label: "Date of Agreement/Transaction",
      name: "transaction_date",
      type: "date",
    },
  ],
  buttonText: "Request Callback",
};
