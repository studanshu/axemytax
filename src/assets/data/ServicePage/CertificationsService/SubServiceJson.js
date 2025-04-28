// @mui material icons
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/CertificationsService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Comprehensive Certification Solutions",
  title: "Our Certification Services",
  cta: {
    "LOWER TDS CERTIFICATE": {
      image: ctaImage,
      title: "Lower TDS Certificate Services",
      des: "Professional assistance in obtaining certificates for reduced tax deduction at source, helping you optimize cash flow by avoiding excess tax withholding.",
      action: "Learn More",
      content: [
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Application Preparation",
          des: "Thorough preparation of Form 13 with supporting documentation.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Income Analysis",
          des: "Detailed income projection and tax liability assessment.",
        },
        {
          icon: <VerifiedOutlinedIcon sx={iconStyle} />,
          title: "Authority Liaison",
          des: "Follow-ups and coordination with tax authorities.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Certificate Management",
          des: "Distribution of certificates to relevant deductors.",
        },
      ],
    },
    "REPATRIATION CERTIFICATE": {
      image: ctaImage,
      title: "Repatriation Certificate Services (15CA/15CB)",
      des: "Expert preparation and certification of forms required for foreign remittances, ensuring compliance with FEMA regulations and RBI guidelines.",
      action: "Learn More",
      content: [
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "Transaction Review",
          des: "Thorough examination of remittance details and supporting documents.",
        },
        {
          icon: <VerifiedOutlinedIcon sx={iconStyle} />,
          title: "Certificate Issuance",
          des: "Professional certification in compliance with income tax provisions.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Tax Implication Analysis",
          des: "Assessment of tax implications for various types of remittances.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Regulatory Guidance",
          des: "Expert advice on FEMA compliance and foreign exchange regulations.",
        },
      ],
    },
    "HOUSE PROPERTY CERTIFICATE": {
      image: ctaImage,
      title: "House Property Certificate Services",
      des: "Professional valuation and certification of residential and commercial properties for various legal, financial, and tax purposes.",
      action: "Learn More",
      content: [
        {
          icon: <HomeOutlinedIcon sx={iconStyle} />,
          title: "Property Assessment",
          des: "Thorough evaluation of property characteristics and condition.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Market Analysis",
          des: "Comprehensive review of local real estate market conditions.",
        },
        {
          icon: <VerifiedOutlinedIcon sx={iconStyle} />,
          title: "Value Determination",
          des: "Application of appropriate valuation methods based on property type.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Certificate Issuance",
          des: "Preparation of detailed certificate with supporting documentation.",
        },
      ],
    },
    "NET WORTH CERTIFICATE": {
      image: ctaImage,
      title: "Net Worth Certificate Services",
      des: "Comprehensive assessment and certification of an individual's or organization's financial position, documenting assets, liabilities, and net worth.",
      action: "Learn More",
      content: [
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Asset Verification",
          des: "Thorough assessment and documentation of all asset classes.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Liability Evaluation",
          des: "Comprehensive review and verification of all outstanding liabilities.",
        },
        {
          icon: <VerifiedOutlinedIcon sx={iconStyle} />,
          title: "Net Worth Calculation",
          des: "Precise computation of net worth following regulatory guidelines.",
        },
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "Certificate Preparation",
          des: "Creation of professionally formatted certificates for specific purposes.",
        },
      ],
    },
    "OTHER ATTESTATIONS": {
      image: ctaImage,
      title: "Specialized Attestation Services",
      des: "Professional certification and attestation services for various specialized financial, legal, and regulatory requirements.",
      action: "Learn More",
      content: [
        {
          icon: <VerifiedOutlinedIcon sx={iconStyle} />,
          title: "Document Verification",
          des: "Thorough examination and verification of source documentation.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Compliance Check",
          des: "Assessment of adherence to applicable laws and regulations.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Professional Attestation",
          des: "Formal attestation with the chartered accountant's seal.",
        },
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "Specialized Reporting",
          des: "Customized reporting based on specific attestation requirements.",
        },
      ],
    },
  },
};
