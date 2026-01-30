// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\DigitalSignaturesService\International - 3 Years\DocumentChecklist.js
import AadharCardImage from "assets/images/default/aadhar.png";
import PanCardImage from "assets/images/default/pan_card.png";
import PassportImage from "assets/images/default/passport.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "Passport",
      des: "Valid passport with at least 3 years validity remaining for primary identification.",
      image: PassportImage,
    },
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card issued by the Income Tax Department.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Card",
      des: "Valid Aadhaar card for secondary identity verification.",
      image: AadharCardImage,
    },
    {
      title: "Passport Size Photograph",
      des: "Recent color photograph with white background (not older than 3 months).",
      icon: PhotoCameraOutlinedIcon,
    },
    {
      title: "Address Proof",
      des: "Utility bill, bank statement, or other valid address proof (not older than 3 months).",
      image: BankStatementImage,
    },
    {
      title: "Business Registration",
      des: "Company registration documents if applying for an organizational certificate.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Email & Mobile",
      des: "Internationally accessible email address and mobile number for verification throughout the 3-year period.",
      icon: EmailOutlinedIcon,
    }
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
