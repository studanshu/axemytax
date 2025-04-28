// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\partnershipIncorporation\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Cards of All Partners",
      des: "PAN cards of each partner for identity verification and tax registration purposes.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Cards of All Partners",
      des: "Aadhaar cards of each partner for KYC verification and digital signatures.",
      image: AadharCardImage,
    },
    {
      title: "Business Address Proof",
      des: "Rental agreement, property deed, or utility bill as proof of business premises.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "Passport Size Photos",
      des: "Recent passport-sized photographs of all partners for registration forms.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Bank Statements",
      des: "Latest bank statements of partners for financial verification (if required).",
      image: BankStatementImage,
    },
    {
      title: "Capital Proof",
      des: "Documentation verifying source of initial capital contribution by each partner.",
      icon: AccountBalanceOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Number of Partners",
      name: "partner_count",
      type: "number",
    },
    {
      label: "Proposed Firm Name",
      name: "firm_name",
      type: "text",
    },
  ],
  buttonText: "Request Callback",
};
