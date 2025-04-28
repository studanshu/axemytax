// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\House Property Certificate\DocumentChecklist.js
// Images
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card of the property owner.",
      image: PanCardImage,
    },
    {
      title: "Aadhar Card",
      des: "Valid Aadhaar card issued by UIDAI for identity and address verification.",
      image: AadharCardImage,
    },
    {
      title: "Property Documents",
      des: "Property ownership documents such as sale deed, registry, or property tax receipts.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "Rental Agreements",
      des: "Copy of all rental agreements for the property during the relevant period.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Rent Receipts",
      des: "Evidence of rent received, such as bank statements or rent receipts.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Loan Documents",
      des: "Home loan statements showing interest paid (if property is financed).",
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
