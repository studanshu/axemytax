// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\DigitalSignaturesService\Domestic - 3 Years\DocumentChecklist.js
import AadharCardImage from "assets/images/default/aadhar.png";
import PanCardImage from "assets/images/default/pan_card.png";
import PhotoImage from "assets/images/default/passport.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card issued by the Income Tax Department.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Card",
      des: "Valid Aadhaar card issued by UIDAI for identity and address verification.",
      image: AadharCardImage,
    },
    {
      title: "Passport Size Photograph",
      des: "Recent color photograph with white background (not older than 6 months).",
      image: PhotoImage,
    },
    {
      title: "Mobile Number",
      des: "Active mobile number for OTP verification and communication purposes.",
      icon: PhotoCameraOutlinedIcon,
    },
    {
      title: "Email Address",
      des: "Valid and accessible email address for receiving certificate activation details.",
      icon: EmailOutlinedIcon,
    },
    {
      title: "Address Proof",
      des: "Utility bill, bank statement, or other valid address proof (if different from Aadhaar).",
      image: BankStatementImage,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
};
