// @mui material icons
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/TDSService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Comprehensive TDS Solutions",
  title: "Our TDS Services",
  cta: {
    "TAN CREATION": {
      image: ctaImage,
      title: "TAN Registration Services",
      des: "We assist in obtaining Tax Deduction Account Numbers (TAN) for businesses and individuals who are required to deduct tax at source, ensuring a smooth and error-free registration process.",
      action: "Learn More",
      content: [
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Application Assistance",
          des: "Complete guidance in filling and submitting the TAN application form (Form 49B).",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Documentation Support",
          des: "Help in gathering and verifying all required documents for TAN registration.",
        },
        {
          icon: <ReceiptOutlinedIcon sx={iconStyle} />,
          title: "Status Tracking",
          des: "Regular follow-ups with authorities and tracking of application status.",
        },
        {
          icon: <BusinessOutlinedIcon sx={iconStyle} />,
          title: "Post-Registration Guidance",
          des: "Advice on TDS compliance requirements after obtaining your TAN.",
        },
      ],
    },
    "TDS ON DOMESTIC SALE OF PROPERTY": {
      image: ctaImage,
      title: "TDS on Property Transactions",
      des: "Expert services for handling TDS requirements on property purchases, ensuring compliance with Section 194-IA of the Income Tax Act and proper tax deduction and payment.",
      action: "Learn More",
      content: [
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "TDS Calculation",
          des: "Accurate calculation of TDS amount (1% of the property value) as per tax regulations.",
        },
        {
          icon: <ReceiptOutlinedIcon sx={iconStyle} />,
          title: "Form 26QB Filing",
          des: "Assistance in filing Form 26QB for remittance of TDS on property transactions.",
        },
        {
          icon: <DocumentScannerOutlinedIcon sx={iconStyle} />,
          title: "Form 16B Generation",
          des: "Help in obtaining Form 16B (TDS certificate) for property sellers.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Payment Processing",
          des: "Support in making TDS payments through proper banking channels.",
        },
      ],
    },
    "TDS ON RENT": {
      image: ctaImage,
      title: "TDS on Rental Payments",
      des: "Comprehensive assistance for TDS compliance on rent payments, helping individuals and businesses meet their tax deduction obligations on residential and commercial rentals.",
      action: "Learn More",
      content: [
        {
          icon: <HomeWorkOutlinedIcon sx={iconStyle} />,
          title: "Threshold Assessment",
          des: "Evaluation of rental agreements to determine TDS applicability and thresholds.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Rate Determination",
          des: "Application of correct TDS rates (2% for equipment, 10% for land/building/furniture).",
        },
        {
          icon: <ReceiptOutlinedIcon sx={iconStyle} />,
          title: "Quarterly Compliance",
          des: "Regular filing of quarterly TDS returns for rent payments (Form 26Q).",
        },
        {
          icon: <DocumentScannerOutlinedIcon sx={iconStyle} />,
          title: "Certificate Issuance",
          des: "Generation and delivery of Form 16A to landlords as proof of tax deduction.",
        },
      ],
    },
    "TDS ON PURCHASE OF PROPERTY FROM NRI": {
      image: ctaImage,
      title: "NRI Property TDS Services",
      des: "Specialized service for handling TDS on property purchases from Non-Resident Indians, ensuring compliance with Section 195 of the Income Tax Act and FEMA regulations.",
      action: "Learn More",
      content: [
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Higher Rate Application",
          des: "Implementation of special TDS rate (20%) applicable for NRI property sellers.",
        },
        {
          icon: <ReceiptOutlinedIcon sx={iconStyle} />,
          title: "Form 15CA/15CB",
          des: "Preparation and submission of specialized forms for foreign remittances.",
        },
        {
          icon: <DocumentScannerOutlinedIcon sx={iconStyle} />,
          title: "FEMA Compliance",
          des: "Ensuring adherence to Foreign Exchange Management Act regulations.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "International Tax Provisions",
          des: "Application of DTAA benefits if applicable for the NRI seller.",
        },
      ],
    },
    "TDS RETURN FILING": {
      image: ctaImage,
      title: "TDS Return Filing Services",
      des: "End-to-end assistance for quarterly TDS return filing, ensuring accurate reporting of tax deductions and compliance with filing deadlines and requirements.",
      action: "Learn More",
      content: [
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Data Compilation",
          des: "Collection and organization of TDS transaction data for accurate filing.",
        },
        {
          icon: <ReceiptOutlinedIcon sx={iconStyle} />,
          title: "Form Selection",
          des: "Filing appropriate forms (24Q, 26Q, 27Q) based on payment types.",
        },
        {
          icon: <DocumentScannerOutlinedIcon sx={iconStyle} />,
          title: "Challan Verification",
          des: "Reconciliation of payment challans with deduction records for consistency.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Deadline Compliance",
          des: "Timely submission of returns within mandated quarterly deadlines.",
        },
      ],
    },
    "TDS CORRECTION RETURNS": {
      image: ctaImage,
      title: "TDS Correction Services",
      des: "Professional assistance for filing TDS correction statements to rectify errors in previously filed returns, ensuring proper credit to deductees and compliance with tax regulations.",
      action: "Learn More",
      content: [
        {
          icon: <DescriptionOutlinedIcon sx={iconStyle} />,
          title: "Error Identification",
          des: "Thorough review of TDS returns to identify discrepancies and errors.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Correction Statement",
          des: "Preparation and filing of correction statements for erroneous returns.",
        },
        {
          icon: <ReceiptOutlinedIcon sx={iconStyle} />,
          title: "PAN Verification",
          des: "Correction of invalid PANs and other deductee details for proper credit.",
        },
        {
          icon: <DocumentScannerOutlinedIcon sx={iconStyle} />,
          title: "Default Resolution",
          des: "Resolution of defaults or notices related to TDS filing issues.",
        },
      ],
    },
    "FORM 16A & 16B": {
      image: ctaImage,
      title: "TDS Certificate Generation",
      des: "Assistance in generating and distributing Form 16A and Form 16B certificates to deductees as proof of tax deduction, ensuring they receive proper tax credit.",
      action: "Learn More",
      content: [
        {
          icon: <DescriptionOutlinedIcon sx={iconStyle} />,
          title: "Form 16A Issuance",
          des: "Generation of Form 16A for non-salary TDS deductions through TRACES.",
        },
        {
          icon: <HomeWorkOutlinedIcon sx={iconStyle} />,
          title: "Form 16B Processing",
          des: "Downloading and providing Form 16B for property transaction TDS.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Certificate Validation",
          des: "Ensuring certificates contain accurate deduction and challan details.",
        },
        {
          icon: <DocumentScannerOutlinedIcon sx={iconStyle} />,
          title: "Timely Distribution",
          des: "Delivering certificates to deductees within the statutory timeframe.",
        },
      ],
    },
  },
};
