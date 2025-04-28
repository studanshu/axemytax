import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";

export const DocumentChecklistJson = {
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
  documents: [
    {
      title: "Financial Statements",
      des: "Complete set of financial statements including Balance Sheet, Profit & Loss Account, and Cash Flow Statement",
      image: BankStatementImage,
    },
    {
      title: "Books of Accounts",
      des: "General Ledger, Sub-ledgers, Trial Balance, and Journal Vouchers",
      image: BankStatementImage,
    },
    {
      title: "Bank Documents",
      des: "Bank Statements, Bank Reconciliation Statements, and Loan Agreements",
      image: BankStatementImage,
    },
    {
      title: "Legal Documents",
      des: "Memorandum & Articles of Association, Board Meeting Minutes, and Shareholder Agreements",
      image: BankStatementImage,
    },
    {
      title: "Tax Documents",
      des: "Income Tax Returns, GST Returns, and TDS/TCS Returns",
      image: BankStatementImage,
    },
    {
      title: "Fixed Asset Register",
      des: "Details of additions, deletions, and depreciation of fixed assets",
      image: BankStatementImage,
    },
    {
      title: "Inventory Records",
      des: "Stock registers, physical verification reports, and valuation certificates",
      image: BankStatementImage,
    },
    {
      title: "Previous Audit Reports",
      des: "Audit reports, management letters, and compliance reports from previous years",
      image: BankStatementImage,
    },
    {
      title: "Management Certifications",
      des: "Written representations from management regarding financial statements",
      image: BankStatementImage,
    }
  ],
};