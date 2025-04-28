// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\InvestmentAdvisoryService\Create Corporate FDs\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card is mandatory for all corporate fixed deposit investments.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Card",
      des: "Aadhaar Card for identity verification and KYC compliance as per regulatory requirements.",
      image: AadharCardImage,
    },
    {
      title: "Bank Account Details",
      des: "Bank statement or canceled cheque for account verification where interest and principal repayments will be credited.",
      image: BankStatementImage,
    },
    {
      title: "Recent Photographs",
      des: "Passport-sized photographs for application forms and KYC requirements.",
      icon: PhotoOutlinedIcon,
    },
    {
      title: "Address Proof",
      des: "Utility bill, passport, or any other valid address proof document as per KYC norms.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Nominee Details",
      des: "Information about nominee including their relationship, contact details, and identification.",
      icon: AccountBalanceOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
