// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\IndirectTaxationService\GST Filing\DocumentChecklist.js
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "Sales Invoices",
      des: "Complete set of all sales invoices and credit/debit notes issued during the period.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Purchase Invoices",
      des: "All purchase invoices and credit/debit notes received from vendors during the period.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Bank Statements",
      des: "Bank statements showing GST payments and receipts for the filing period.",
      image: BankStatementImage,
    },
    {
      title: "E-Way Bills",
      des: "Details of all e-way bills generated for goods transportation during the period.",
      icon: LocalShippingOutlinedIcon,
    },
    {
      title: "Previous Returns",
      des: "Copies of previous GST returns filed (if applicable) for reference and continuity.",
      icon: AssessmentOutlinedIcon,
    },
    {
      title: "Stock Details",
      des: "Stock inventory details (required for specific return types and annual returns).",
      icon: InventoryOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
