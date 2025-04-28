// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\publicLimited\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import PassportImage from "assets/images/default/passport.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Cards of All Directors",
      des: "PAN cards of all proposed directors (minimum 3) for verification and DIN application.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Cards of All Directors",
      des: "Aadhaar cards of all directors for DSC application and identity verification.",
      image: AadharCardImage,
    },
    {
      title: "Passport/Voter ID of Directors",
      des: "Secondary ID proof of all directors for verification purposes.",
      image: PassportImage,
    },
    {
      title: "Registered Office Proof",
      des: "Ownership proof/rent agreement with NOC for registered office address verification.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "Director Qualifications",
      des: "Documents proving directors meet qualification requirements for public companies.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Capital Proof",
      des: "Evidence of minimum paid-up capital requirement (typically ₹5 lakhs for public ltd).",
      icon: AccountBalanceOutlinedIcon,
    },
    {
      title: "Passport Size Photos",
      des: "Recent passport size photographs of all directors for various registration forms.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Proposed Business Plan",
      des: "Basic business plan or company objectives for incorporation documents.",
      icon: DescriptionOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Number of Directors",
      name: "director_count",
      type: "number",
    },
    {
      label: "Proposed Capital Structure",
      name: "capital_structure",
      type: "text",
    },
    {
      label: "Proposed Company Name (3 options)",
      name: "company_name_options",
      type: "text",
    },
  ],
  buttonText: "Request Callback",
};
