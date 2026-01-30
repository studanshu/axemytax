// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\privateLimited\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import PassportImage from "assets/images/default/passport.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Cards of All Directors",
      des: "PAN cards of all proposed directors for identity verification and DIN application.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Cards of All Directors",
      des: "Aadhaar cards of all proposed directors required for DSC and KYC verification.",
      image: AadharCardImage,
    },
    {
      title: "Passport Size Photos",
      des: "Recent passport-sized photographs of all directors for various registration forms.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Registered Office Proof",
      des: "Ownership proof/rent agreement with NOC for registered office address verification.",
      icon: HomeOutlinedIcon,
    },
    {
      title: "ID Proof (Passport/Voter ID)",
      des: "Secondary ID proof of directors for verification purposes.",
      image: PassportImage,
    },
    {
      title: "Bank Statement/Utility Bill",
      des: "Recent statement/bill as address proof of directors and registered office.",
      image: BankStatementImage,
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
      label: "Proposed Company Name (3 options)",
      name: "company_name_options",
      type: "text",
    },
  ],
  buttonText: "Request Callback",
};
