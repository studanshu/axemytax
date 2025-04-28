// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS Correction Returns\Considerations.js
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
        "Thorough analysis of TDS return statements to identify errors and discrepancies",
        "Review of Form 26AS of deductees to spot mismatches in TDS credit",
        "Verification of deductee details including correct PAN, name, and address information",
        "Reconciliation of challan information with actual TDS deposits",
        "Preparation of correction statements using the latest Correction Statement Preparation Utility",
        "Validation of correction files through File Validation Utility (FVU)",
        "Electronic filing of correction returns through the TRACES portal",
        "Follow-up to ensure corrections are processed and reflected in deductees' Form 26AS",
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
        "Initial assessment of errors: 1-2 business days",
        "Data collection and verification: 2-3 business days",
        "Correction statement preparation: 1-2 business days",
        "Filing and processing time: 1-3 business days",
        "Processing by income tax department: 7-14 business days",
        "Basic charges (minor corrections): ₹2,500 - ₹4,000 per statement",
        "Standard charges (multiple corrections): ₹4,000 - ₹7,500 per statement",
        "Comprehensive charges (major revisions): ₹7,500+ based on complexity and volume",
      ],
    },
  ],
  buttonText: "Get Consultation",
};
