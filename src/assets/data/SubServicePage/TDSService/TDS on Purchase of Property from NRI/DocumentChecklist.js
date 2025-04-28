// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS on Purchase of Property from NRI\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import PassportImage from "assets/images/default/passport.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "Sale Deed/Agreement",
      des: "Property purchase agreement or sale deed detailing property specifications and transaction value.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "PAN Cards",
      des: "PAN cards of both buyer and NRI seller (mandatory for property transaction and TDS deduction).",
      image: PanCardImage,
    },
    {
      title: "NRI Seller's Passport",
      des: "Copy of NRI seller's passport with visa pages confirming non-resident status.",
      image: PassportImage,
    },
    {
      title: "TAN Certificate",
      des: "Tax Deduction Account Number (TAN) certificate of the buyer for TDS deduction and deposit.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Property Documents",
      des: "Property papers showing title history, registration details, and ownership proof.",
      icon: HomeWorkOutlinedIcon,
    },
    {
      title: "Payment Proofs",
      des: "Bank statements or payment confirmations showing property transaction payments.",
      image: BankStatementImage,
    },
    {
      title: "NRI Seller's Tax Residency Certificate",
      des: "Tax Residency Certificate from the NRI's country of residence (if applying for DTAA benefits).",
      icon: ReceiptOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Property Value",
      name: "property_value",
      type: "number",
    },
    {
      label: "NRI Seller's Country",
      name: "seller_country",
      type: "text",
    },
  ],
  buttonText: "Request Callback",
};
