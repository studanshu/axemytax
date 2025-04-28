// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\IndirectTaxationService\GST Audit\Considerations.js
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
        "Comprehensive review of financial statements and GST returns for the audit period",
        "Detailed reconciliation of turnover as per financial statements with GST returns",
        "Input tax credit verification and reconciliation with supplier data",
        "Assessment of reverse charge mechanism applicability and compliance",
        "Evaluation of tax rate classifications for goods and services",
        "Review of exemptions and zero-rated supplies claimed",
        "Identification of compliance gaps and potential tax exposure areas",
        "Preparation and certification of audit reports and reconciliation statements",
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
        "Statutory GST audit: 4-6 weeks from receipt of complete documentation",
        "Self-assessment GST audit: 2-3 weeks for comprehensive review",
        "GST health check: 1-2 weeks for focused compliance examination",
        "Statutory GST audit fees: ₹15,000 - ₹50,000 (based on turnover and complexity)",
        "Self-assessment audit: ₹10,000 - ₹30,000 (based on transaction volume)",
        "GST health check: ₹7,500 - ₹20,000 (focused review of specific areas)",
        "Additional charges for extensive discrepancies requiring detailed rectification",
      ],
    },
  ],
  buttonText: "Request Audit",
};
