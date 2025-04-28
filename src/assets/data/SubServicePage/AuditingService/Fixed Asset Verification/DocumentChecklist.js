import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";

export const DocumentChecklist = {
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
  documents: [
    {
      title: "Fixed Asset Register",
      des: "Comprehensive register with details of all fixed assets including purchase date, cost, location, and identification numbers",
      image: BankStatementImage,
    },
    {
      title: "Purchase Invoices",
      des: "Original purchase invoices and supporting documents for asset acquisitions",
      image: BankStatementImage,
    },
    {
      title: "Depreciation Schedules",
      des: "Current and historical depreciation calculations for all fixed assets",
      image: BankStatementImage,
    },
    {
      title: "Asset Transfer Records",
      des: "Documentation of inter-department or inter-branch asset transfers",
      image: BankStatementImage,
    },
    {
      title: "Disposal Records",
      des: "Details of assets sold, discarded, or written off, including disposal proceeds",
      image: BankStatementImage,
    },
    {
      title: "Insurance Documents",
      des: "Insurance policies covering fixed assets with valuation details",
      image: BankStatementImage,
    },
    {
      title: "Physical Verification Reports",
      des: "Previous physical verification reports and action taken on discrepancies",
      image: BankStatementImage,
    },
    {
      title: "Asset Ownership Documents",
      des: "Title deeds, registration certificates, and other ownership documents",
      image: BankStatementImage,
    },
    {
      title: "Maintenance Records",
      des: "Records of major repairs, improvements, and maintenance of fixed assets",
      image: BankStatementImage,
    }
  ],
};
