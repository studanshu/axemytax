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
      title: "Organizational Chart",
      des: "Current organizational structure showing reporting relationships and responsibilities",
      image: BankStatementImage,
    },
    {
      title: "Process Documentation",
      des: "Flowcharts and documentation of key business processes and systems",
      image: BankStatementImage,
    },
    {
      title: "Internal Control Manuals",
      des: "Documentation of existing internal control policies and procedures",
      image: BankStatementImage,
    },
    {
      title: "Risk Assessment Reports",
      des: "Previous risk assessments and management's response to identified risks",
      image: BankStatementImage,
    },
    {
      title: "Financial Reports",
      des: "Financial statements, management accounts, and budget vs. actual reports",
      image: BankStatementImage,
    },
    {
      title: "Previous Audit Reports",
      des: "Internal and external audit reports with management responses",
      image: BankStatementImage,
    },
    {
      title: "Compliance Documentation",
      des: "Records demonstrating compliance with relevant laws, regulations, and internal policies",
      image: BankStatementImage,
    },
    {
      title: "IT Systems Documentation",
      des: "Information about IT systems, access controls, and disaster recovery plans",
      image: BankStatementImage,
    },
    {
      title: "Board Minutes",
      des: "Minutes of board meetings and key management committee meetings",
      image: BankStatementImage,
    }
  ],
};
