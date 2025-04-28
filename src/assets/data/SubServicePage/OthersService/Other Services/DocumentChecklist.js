// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\OthersService\Other Services\DocumentChecklist.js
import PanCardImage from "assets/images/default/pan_card.png";
import AadharCardImage from "assets/images/default/aadhar.png";
import BankStatementImage from "assets/images/default/bank_statement.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
  documents: [
    {
      title: "PAN Card",
      des: "Valid Permanent Account Number (PAN) card is required for most professional services and financial transactions.",
      image: PanCardImage,
    },
    {
      title: "Aadhaar Card",
      des: "Aadhaar Card for identity verification and KYC compliance, often necessary for various attestations and certifications.",
      image: AadharCardImage,
    },
    {
      title: "Bank Statements",
      des: "Recent bank statements may be required for financial analysis, attestations, or verification purposes.",
      image: BankStatementImage,
    },
    {
      title: "Service-Specific Documents",
      des: "Specific documents relevant to your unique service requirement will be communicated after initial consultation.",
      icon: ArticleOutlinedIcon,
    },
    {
      title: "Authorization Letters",
      des: "Authorization letters or power of attorney documents where representation before authorities is needed.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Previous Reports/Certificates",
      des: "Any previously issued reports, certificates, or relevant correspondence related to your service requirement.",
      icon: AssignmentOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    DefaultFormFields.companyName,
    DefaultFormFields.query,
  ],
  buttonText: "Request Callback",
};
