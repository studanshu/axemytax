// @mui material icons
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/AuditingService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Comprehensive Audit Solutions",
  title: "Our Auditing Services",
  cta: {
    "STATUTORY AUDITING": {
      image: ctaImage,
      title: "Statutory Audit Services",
      des: "Professional examination of financial statements to ensure compliance with laws and regulations, providing stakeholders with reliable financial information.",
      action: "Learn More",
      content: [
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Regulatory Compliance",
          des: "Ensure compliance with Companies Act and other applicable financial reporting frameworks.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Financial Statement Verification",
          des: "Thorough examination of financial statements to ensure they reflect a true and fair view.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Control Assessment",
          des: "Evaluation of internal financial controls and reporting mechanisms.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Comprehensive Reporting",
          des: "Detailed audit reports with findings and recommendations for improvement.",
        },
      ],
    },
    "TAX AUDITING": {
      image: ctaImage,
      title: "Tax Audit Services",
      des: "Verification of financial records and tax compliance as required under Section 44AB of the Income Tax Act for businesses meeting specified turnover thresholds.",
      action: "Learn More",
      content: [
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Income Tax Compliance",
          des: "Ensure adherence to tax laws and accurate reporting of taxable income.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Form 3CA/3CB & 3CD",
          des: "Preparation and certification of required tax audit forms and statements.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Deduction Verification",
          des: "Verification of eligibility for claimed deductions and exemptions.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Disallowance Prevention",
          des: "Identify potential issues to prevent tax disallowances and penalties.",
        },
      ],
    },
    "STOCK AUDITING": {
      image: ctaImage,
      title: "Stock Audit Services",
      des: "Independent verification of inventory quantities, valuation, and management systems to ensure accuracy in financial reporting and effective inventory control.",
      action: "Learn More",
      content: [
        {
          icon: <InventoryOutlinedIcon sx={iconStyle} />,
          title: "Physical Verification",
          des: "Systematic physical counting and verification of inventory items.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Valuation Assessment",
          des: "Review of inventory valuation methods for compliance with accounting standards.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Storage Evaluation",
          des: "Assessment of storage conditions and handling procedures.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Reconciliation",
          des: "Reconciliation of physical stock with book records and identification of discrepancies.",
        },
      ],
    },
    "INTERNAL AUDIT": {
      image: ctaImage,
      title: "Internal Audit Services",
      des: "Systematic evaluation of internal controls, risk management processes, and governance to improve organizational effectiveness and efficiency.",
      action: "Learn More",
      content: [
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Control Evaluation",
          des: "Assessment of internal control systems and identification of weaknesses.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Risk Assessment",
          des: "Identification and evaluation of business risks and mitigation strategies.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Compliance Monitoring",
          des: "Verification of compliance with internal policies and procedures.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Process Improvement",
          des: "Recommendations for enhancing operational efficiency and effectiveness.",
        },
      ],
    },
    "FIXED ASSET VERIFICATION": {
      image: ctaImage,
      title: "Fixed Asset Verification Services",
      des: "Comprehensive verification of fixed assets to ensure accurate recording, proper valuation, and effective asset management.",
      action: "Learn More",
      content: [
        {
          icon: <InventoryOutlinedIcon sx={iconStyle} />,
          title: "Physical Verification",
          des: "On-site inspection and confirmation of the existence of fixed assets.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Valuation Review",
          des: "Assessment of asset valuation and depreciation calculations.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Documentation Audit",
          des: "Verification of ownership documents and asset registry maintenance.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Reconciliation",
          des: "Reconciliation of physical assets with fixed asset registers and financial records.",
        },
      ],
    },
  },
};
