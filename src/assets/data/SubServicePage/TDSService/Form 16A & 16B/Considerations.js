// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\Form 16A & 16B\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: FactCheckOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "Verification of TDS return filing status to ensure eligibility for certificate generation",
        "Login to TRACES portal using registered TAN credentials for secure access",
        "Submission of certificate generation request for the relevant quarter/period",
        "Monitoring of certificate processing status with the tax department",
        "Download of digitally signed Form 16A/16B certificates once generated",
        "Thorough verification of certificate details for accuracy and completeness",
        "Secure distribution of certificates to respective deductees through email or physical copies",
        "Record-keeping and maintenance of certificate issuance logs for future reference",
      ],
    },
    {
      leftIcon: AccessTimeOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Timeline & Charges",
      bullets: [
        "Certificate generation request: 1 business day after TDS return processing",
        "Processing by Income Tax Department: 1-3 business days",
        "Certificate verification and distribution: 1-2 business days",
        "Total timeline from request to delivery: 3-6 business days",
        "Form 16A (non-salary) issuance deadline: Within 15 days from due date of filing TDS returns",
        "Form 16B (property) issuance deadline: Within 15 days from TDS deposit date",
        "Basic charges: ₹100-₹200 per certificate for volumes under 20",
        "Volume-based pricing: ₹75-₹150 per certificate for higher volumes",
      ],
    },
  ],
  buttonText: "Get Started",
};
