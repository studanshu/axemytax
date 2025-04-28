// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\Other Attestations\DocumentChecklist.js
// Images
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Permanent Account Number card of the individual or entity requiring attestation.",
      image: PanCardImage,
    },
    {
      title: "Aadhar Card",
      des: "Aadhaar card for identity verification (for individual attestations).",
      image: AadharCardImage,
    },
    {
      title: "Original Documents",
      des: "Original documents requiring attestation (financial statements, certificates, etc.).",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Supporting Evidence",
      des: "Supporting documents to verify the information in the documents being attested.",
      icon: SummarizeOutlinedIcon,
    },
    {
      title: "Business Registration",
      des: "Business registration documents if attestation is for a company or firm.",
      icon: HandshakeOutlinedIcon,
    },
    {
      title: "Bank Statements",
      des: "Relevant bank statements if required for financial verification.",
      icon: AccountBalanceOutlinedIcon,
    },
    {
      title: "Financial Records",
      des: "Accounting records and transaction details supporting financial claims.",
      icon: ReceiptOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
