// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TAN Creation\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import SignpostOutlinedIcon from "@mui/icons-material/SignpostOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card of the entity or individual applying for TAN.",
      image: PanCardImage,
    },
    {
      title: "Identity Proof",
      des: "Aadhaar card, voter ID, passport, or driving license of the responsible person.",
      image: AadharCardImage,
    },
    {
      title: "Business Registration Document",
      des: "Certificate of incorporation, partnership deed, or shop establishment certificate.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Residential Address Proof",
      des: "Utility bill, property tax receipt, or bank statement as proof of responsible person's address.",
      image: BankStatementImage,
    },
    {
      title: "Business Address Proof",
      des: "Rent agreement, property papers, or utility bills in the name of the business entity.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Digital Signature (if applicable)",
      des: "Valid Digital Signature Certificate (DSC) of the authorized signatory for online applications.",
      icon: SignpostOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    DefaultFormFields.companyName,
  ],
  buttonText: "Request Callback",
};
