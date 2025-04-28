// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\Net Worth Certificate\DocumentChecklist.js
// Images
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card for identity verification.",
      image: PanCardImage,
    },
    {
      title: "Aadhar Card",
      des: "Valid Aadhaar card issued by UIDAI for identity and address verification.",
      image: AadharCardImage,
    },
    {
      title: "Bank Statements",
      des: "Last 6 months' bank statements from all active accounts showing your balances and transactions.",
      icon: AccountBalanceOutlinedIcon,
    },
    {
      title: "Property Documents",
      des: "Property ownership documents with current market valuation or tax assessment documents.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "Investment Proofs",
      des: "Investment certificates for fixed deposits, mutual funds, shares, bonds, and other financial assets.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Vehicle Documents",
      des: "Registration certificates and current market valuation for vehicles owned.",
      icon: DirectionsCarOutlinedIcon,
    },
    {
      title: "Valuable Assets Proof",
      des: "Documentation of jewelry, art, collectibles with valuation certificates if available.",
      icon: DiamondOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
