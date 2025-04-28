// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BookKeepingService\Providing Services Up to 100 Entries\DocumentChecklist.js
import BankStatementImage from "assets/images/default/bank_statement.png";
import PanCardImage from "assets/images/default/pan_card.png";
import Form16Image from "assets/images/default/form_16.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";

export const DocumentChecklist = {
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",  documents: [
    {
      title: "Bank Statements",
      des: "Monthly bank statements showing all business-related transactions and account activity for the period requiring bookkeeping services.",
      image: BankStatementImage,
    },
    {
      title: "Receipts & Invoices",
      des: "All business expense receipts, sales invoices, and payment records that need to be recorded in your books.",
      image: Form16Image,
    },
    {
      title: "Previous Financial Records",
      des: "Any existing financial statements, ledgers, or bookkeeping files from previous periods to ensure continuity in record-keeping.",
      image: PanCardImage,
    },
  ],
};
