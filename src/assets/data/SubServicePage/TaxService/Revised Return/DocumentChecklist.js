import BankStatementImage from "assets/images/SubServicePage/TaxService/DirectTaxation/bank_statement.png";
import PanCardImage from "assets/images/default/pan_card.png";
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
      title: "PAN Card",
      des: "Permanent Account Number (PAN) card is a 10-digit alphanumeric number, issued in the form of a laminated card, by the Income Tax Department of India.",
      image: PanCardImage,
    },
    {
      title: "Income Tax Notice Copy",
      des: "The official communication received from the Income Tax Department that explains the issue or reason for the assessment or appeal.",
      image: BankStatementImage,
    },
    {
      title: "ITR Acknowledgment",
      des: "A copy of the Income Tax Return you filed for the relevant year, showing all income, deductions, and taxes paid.",
      image: BankStatementImage,
    },
  ],
};



