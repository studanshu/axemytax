// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\Lower TDS Certificate\DocumentChecklist.js
// Images
import AadharCardImage from "assets/images/default/aadhar.png";
import PanCardImage from "assets/images/default/pan_card.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

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
      title: "Aadhar Card",
      des: "Valid Aadhaar card issued by UIDAI for identity and address verification.",
      image: AadharCardImage,
    },
    {
      title: "Income Projections",
      des: "Detailed estimate of your projected income for the current financial year with supporting documents.",
      icon: AssignmentIndOutlinedIcon,
    },
    {
      title: "Bank Statements",
      des: "Last 6 months' bank statements showing your regular income patterns.",
      icon: AccountBalanceOutlinedIcon,
    },
    {
      title: "Tax Planning Statement",
      des: "Document outlining your tax-saving investments and deductions for the year.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Previous Year's ITR",
      des: "Copy of Income Tax Returns filed for the previous financial year.",
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
