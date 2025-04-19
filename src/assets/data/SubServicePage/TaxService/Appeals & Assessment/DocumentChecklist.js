import BankStatementImage from "assets/images/SubServicePage/TaxService/DirectTaxation/bank_statement.png";
import Form16Image from "assets/images/SubServicePage/TaxService/DirectTaxation/form_16.png";
import { DefaultDocumentChecklist } from "../../DefaultDocumentChecklist";
export const DocumentChecklist = {
  ...DefaultDocumentChecklist,
  documents: [
    ...DefaultDocumentChecklist.documents,
    {
      title: "Bank Statements",
      des: "A bank statement is a summary of financial transactions that occurred at a certain institution during a specific time period.",
      image: BankStatementImage,
    },
    {
      title: "Form 16",
      des: "Form 16 is a certificate issued by an employer to their employees as proof of the tax deducted at source (TDS) on the salary income.",
      image: Form16Image,
    },
  ],
};
