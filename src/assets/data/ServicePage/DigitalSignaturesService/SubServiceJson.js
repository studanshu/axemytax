// @mui material icons
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/DigitalSignaturesService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Digital Signature Options",
  title: "Choose Your Digital Signature Solution",
  cta: {
    "DOMESTIC - 2 YEARS": {
      image: ctaImage,
      title: "Domestic DSC (2-Year Validity)",
      des: "Digital signature certificates issued by Indian Certifying Authorities for domestic regulatory compliance with a standard 2-year validity period.",
      action: "Learn More",
      content: [
        {
          icon: <VerifiedUserOutlinedIcon sx={iconStyle} />,
          title: "Indian Compliance",
          des: "Fully compliant with Indian IT Act and recognized by all government portals.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Multiple Classes",
          des: "Available in Class 2 and Class 3 formats based on your verification needs.",
        },
        {
          icon: <SpeedOutlinedIcon sx={iconStyle} />,
          title: "Quick Processing",
          des: "Standard processing with issuance within 1-3 business days.",
        },
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "Broad Acceptance",
          des: "Valid for MCA filings, income tax returns, GST, and e-tendering in India.",
        },
      ],
    },
    "DOMESTIC - 3 YEARS": {
      image: ctaImage,
      title: "Domestic DSC (3-Year Validity)",
      des: "Extended validity digital signature certificates for long-term regulatory compliance needs, saving you from frequent renewal processes.",
      action: "Learn More",
      content: [
        {
          icon: <VerifiedUserOutlinedIcon sx={iconStyle} />,
          title: "Extended Usage",
          des: "Longer validity period for uninterrupted compliance for three years.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Cost Effective",
          des: "More economical than purchasing multiple shorter-term certificates.",
        },
        {
          icon: <SpeedOutlinedIcon sx={iconStyle} />,
          title: "Same Processing Time",
          des: "Efficient issuance process despite the extended validity period.",
        },
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "Comprehensive Coverage",
          des: "Compatible with all domestic platforms requiring digital authentication.",
        },
      ],
    },
    "INTERNATIONAL - 2 YEARS": {
      image: ctaImage,
      title: "International DSC (2-Year Validity)",
      des: "Globally recognized digital signature certificates for international business transactions and cross-border document authentication.",
      action: "Learn More",
      content: [
        {
          icon: <VerifiedUserOutlinedIcon sx={iconStyle} />,
          title: "Global Recognition",
          des: "Accepted across multiple countries for international transactions.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Enhanced Security",
          des: "Advanced encryption standards for international security compliance.",
        },
        {
          icon: <SpeedOutlinedIcon sx={iconStyle} />,
          title: "Standard Validity",
          des: "Two-year validity period for medium-term international requirements.",
        },
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "Cross-Border Usage",
          des: "Useful for foreign tenders, export documentation, and international contracts.",
        },
      ],
    },
    "INTERNATIONAL - 3 YEARS": {
      image: ctaImage,
      title: "International DSC (3-Year Validity)",
      des: "Long-term international digital signature solution for businesses with regular global transactions and continuous foreign compliance requirements.",
      action: "Learn More",
      content: [
        {
          icon: <VerifiedUserOutlinedIcon sx={iconStyle} />,
          title: "Extended Global Access",
          des: "Three years of uninterrupted access to international digital authentication.",
        },
        {
          icon: <SecurityOutlinedIcon sx={iconStyle} />,
          title: "Premium Security",
          des: "Highest level of encryption and security for sensitive international documents.",
        },
        {
          icon: <SpeedOutlinedIcon sx={iconStyle} />,
          title: "Value Proposition",
          des: "Most cost-effective solution for regular international business operations.",
        },
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "Comprehensive Solution",
          des: "Covers all international digital signature needs for an extended period.",
        },
      ],
    },
  },
};
