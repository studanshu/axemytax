// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\IndirectTaxationService\GST Audit\DocumentChecklist.js
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "Financial Statements",
      des: "Audited/finalized financial statements for the relevant financial year.",
      icon: AssessmentOutlinedIcon,
    },
    {
      title: "GST Returns",
      des: "All GST returns (GSTR-1, GSTR-3B, etc.) filed during the audit period.",
      icon: InsertDriveFileOutlinedIcon,
    },
    {
      title: "Sales & Purchase Records",
      des: "Complete records of sales and purchase invoices for the entire financial year.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Bank Statements",
      des: "Bank statements for all business accounts covering the entire audit period.",
      image: BankStatementImage,
    },
    {
      title: "Input Tax Credit Ledgers",
      des: "Electronic credit ledger, cash ledger, and liability register from the GST portal.",
      icon: AssessmentOutlinedIcon,
    },
    {
      title: "Stock Records",
      des: "Opening and closing stock details, including goods in transit and capital goods.",
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
