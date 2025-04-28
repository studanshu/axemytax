// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS Return Filing\Considerations.js
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
        "Collection and organization of all TDS-related data including deductee details and payment information",
        "Determination of correct form types (24Q for salaries, 26Q for payments to residents, 27Q for payments to non-residents)",
        "Validation of PAN details of all deductees to ensure accuracy and avoid higher TDS rates",
        "Preparation of returns using latest Return Preparation Utility (RPU) issued by income tax department",
        "Thorough verification and error correction before submission to minimize validation failures",
        "Generation of FVU (File Validation Utility) validated files for error-free submissions",
        "Electronic filing of returns through TRACES portal before due dates",
        "Downloading and maintaining acknowledgments and confirmation receipts for future reference",
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
        "Quarterly filing deadlines: Q1 (Apr-Jun): July 31, Q2 (Jul-Sep): October 31, Q3 (Oct-Dec): January 31, Q4 (Jan-Mar): May 31",
        "Data collection and organization: 3-5 business days before deadline",
        "Return preparation and validation: 1-2 business days",
        "Filing and acknowledgment receipt: 1 business day",
        "Basic charges (up to 50 deductees): ₹2,000 - ₹3,500 per quarter",
        "Standard charges (51-200 deductees): ₹3,500 - ₹7,000 per quarter",
        "Premium charges (200+ deductees): Custom pricing based on volume",
        "Annual package (all four quarters): 10-15% discount on total quarterly charges",
      ],
    },
  ],
  buttonText: "Get Started",
};
