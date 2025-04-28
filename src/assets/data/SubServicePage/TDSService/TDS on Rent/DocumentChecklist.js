// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS on Rent\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "Rental Agreement",
      des: "Copy of the lease/rental agreement specifying rent amount, payment terms, and property details.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "PAN Card (Landlord & Tenant)",
      des: "Valid PAN cards of both landlord (payee) and tenant (deductor) for TDS compliance.",
      image: PanCardImage,
    },
    {
      title: "TAN Certificate",
      des: "Tax Deduction Account Number (TAN) certificate of the tenant/deductor entity.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Rent Receipts/Invoices",
      des: "Monthly rent receipts or invoices issued by the landlord confirming payment amounts.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Bank Statements",
      des: "Bank statements showing rent payment transactions for reconciliation purposes.",
      image: BankStatementImage,
    },
    {
      title: "Business Registration",
      des: "For business tenants: Company incorporation certificate, partnership deed, or registration document.",
      icon: BusinessOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    DefaultFormFields.companyName,
    {
      label: "Monthly Rent Amount",
      name: "rent_amount",
      type: "number",
    },
  ],
  buttonText: "Request Callback",
};
