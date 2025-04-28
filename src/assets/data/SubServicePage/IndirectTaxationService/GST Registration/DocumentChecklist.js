// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\IndirectTaxationService\GST Registration\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card of the business entity/proprietor.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Card",
      des: "Aadhaar Card of proprietor/partners/directors for verification and authentication.",
      image: AadharCardImage,
    },
    {
      title: "Bank Account Statement",
      des: "Recent bank statement or canceled cheque of the business bank account.",
      image: BankStatementImage,
    },
    {
      title: "Business Address Proof",
      des: "Rent agreement, property tax receipt, or utility bill as proof of place of business.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "Photograph",
      des: "Recent passport-size photograph of proprietor/partners/directors.",
      icon: PhotoOutlinedIcon,
    },
    {
      title: "Business Registration",
      des: "Partnership deed, MOA/AOA, or other business registration document as applicable.",
      icon: BusinessOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
