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
      title: "Financial Statements",
      des: "Complete set of financial statements including Balance Sheet, Profit & Loss Account, and Cash Flow Statement",
      image: BankStatementImage,
    },
    {
      title: "Books of Accounts",
      des: "General Ledger, Cash Book, Bank Book, Journal, Purchase Register, Sales Register, and Stock Register",
      image: BankStatementImage,
    },
    {
      title: "Bank Documents",
      des: "Bank Statements, Bank Reconciliation Statements, and Loan Agreements",
      image: BankStatementImage,
    },
    {
      title: "Tax Documents",
      des: "Income Tax Returns of previous years, GST Returns, TDS/TCS Returns, and Advance Tax Payment Challans",
      image: BankStatementImage,
    },
    {
      title: "Fixed Asset Register",
      des: "Details of additions, deletions, and depreciation of fixed assets with supporting invoices",
      image: BankStatementImage,
    },
    {
      title: "Inventory Records",
      des: "Stock registers, physical verification reports, and valuation certificates",
      image: BankStatementImage,
    },
    {
      title: "Expense Vouchers",
      des: "Supporting documents for major expenses, especially those exceeding ₹10,000 paid in cash",
      image: BankStatementImage,
    },
    {
      title: "Statutory Compliance Documents",
      des: "PF, ESI, Professional Tax, and other statutory compliance documents",
      image: BankStatementImage,
    },
    {
      title: "Business Agreements",
      des: "Major contracts, lease agreements, and loan agreements",
      image: BankStatementImage,
    }
  ],
};
