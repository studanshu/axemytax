// @mui material icons
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/IndirectTaxationService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Comprehensive GST Solutions",
  title: "Our GST Services",
  cta: {
    "GST REGISTRATION": {
      image: ctaImage,
      title: "Simple GST Registration Process",
      des: "Get your business GST-registered with our expert assistance. We handle the paperwork, follow up with authorities, and ensure a smooth registration process.",
      action: "Start Registration",
      content: [
        {
          icon: <ArticleOutlinedIcon sx={iconStyle} />,
          title: "Documentation Assistance",
          des: "We help you gather and prepare all required documents for GST registration.",
        },
        {
          icon: <AssignmentOutlinedIcon sx={iconStyle} />,
          title: "Application Filing",
          des: "Our experts file your GST registration application accurately to avoid delays.",
        },
        {
          icon: <GavelOutlinedIcon sx={iconStyle} />,
          title: "Compliance Guidance",
          des: "We provide guidance on post-registration compliance requirements.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "GST Portal Management",
          des: "We help you set up and navigate the GST portal for your business needs.",
        },
      ],
    },
    "GST FILING": {
      image: ctaImage,
      title: "Timely and Accurate GST Return Filing",
      des: "Our experts ensure your GST returns are filed correctly and on time, helping you avoid penalties and maintain compliance.",
      action: "Start GST Filing",
      content: [
        {
          icon: <ArticleOutlinedIcon sx={iconStyle} />,
          title: "Data Organization",
          des: "We help organize your sales and purchase data for accurate return filing.",
        },
        {
          icon: <AssignmentOutlinedIcon sx={iconStyle} />,
          title: "Return Preparation",
          des: "Our experts prepare all required GST returns (GSTR-1, GSTR-3B, etc.) for your business.",
        },
        {
          icon: <GavelOutlinedIcon sx={iconStyle} />,
          title: "Reconciliation",
          des: "We reconcile your input tax credits and ensure they match with supplier data.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Compliance Calendar",
          des: "We maintain a compliance calendar to ensure all filings are completed before deadlines.",
        },
      ],
    },
    "GST AUDIT": {
      image: ctaImage,
      title: "Comprehensive GST Audit Solutions",
      des: "Our thorough GST audit services help identify compliance gaps and strengthen your tax position while minimizing the risk of penalties.",
      action: "Request GST Audit",
      content: [
        {
          icon: <ArticleOutlinedIcon sx={iconStyle} />,
          title: "Documentation Review",
          des: "We thoroughly review all your GST documentation to identify any discrepancies.",
        },
        {
          icon: <AssignmentOutlinedIcon sx={iconStyle} />,
          title: "Reconciliation",
          des: "We reconcile your returns with books of accounts to ensure consistency.",
        },
        {
          icon: <GavelOutlinedIcon sx={iconStyle} />,
          title: "Compliance Check",
          des: "Our experts ensure all GST provisions and regulations have been properly followed.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Audit Report Preparation",
          des: "We prepare and file comprehensive audit reports as required by law.",
        },
      ],
    },
  },
};
