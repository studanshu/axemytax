// @mui material icons
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/BusinessIncorporationService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Business Structure Options",
  title: "Choose the Right Business Structure",
  cta: {
    "SOLE PROPRIETORSHIP": {
      image: ctaImage,
      title: "Sole Proprietorship Registration",
      des: "A simple business structure ideal for individual entrepreneurs. We assist with the necessary registrations to get your sole proprietorship legally established.",
      action: "Learn More",
      content: [
        {
          icon: <PersonOutlinedIcon sx={iconStyle} />,
          title: "Simple Formation",
          des: "Minimal paperwork and formalities required to establish your business.",
        },
        {
          icon: <BusinessOutlinedIcon sx={iconStyle} />,
          title: "Complete Control",
          des: "Maintain full control over business decisions and operations.",
        },
        {
          icon: <GroupsOutlinedIcon sx={iconStyle} />,
          title: "Direct Profit Access",
          des: "All profits flow directly to you without corporate taxation.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Minimal Compliance",
          des: "Lower ongoing compliance requirements compared to other business structures.",
        },
      ],
    },
    "PARTNERSHIP FIRM": {
      image: ctaImage,
      title: "Partnership Firm Registration",
      des: "Formalize your business partnership with proper legal documentation and registration. We ensure your partnership is established on a solid legal foundation.",
      action: "Learn More",
      content: [
        {
          icon: <PersonOutlinedIcon sx={iconStyle} />,
          title: "Partnership Deed",
          des: "Professionally drafted partnership deed customized to your specific needs.",
        },
        {
          icon: <BusinessOutlinedIcon sx={iconStyle} />,
          title: "Firm Registration",
          des: "Registration under the Partnership Act to give legal recognition to your firm.",
        },
        {
          icon: <GroupsOutlinedIcon sx={iconStyle} />,
          title: "Liability Protection",
          des: "Clear terms on profit sharing, responsibilities, and liability management.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Business Registrations",
          des: "Assistance with GST, PAN, and other necessary business registrations.",
        },
      ],
    },
    "LIMITED LIABILITY PARTNERSHIP": {
      image: ctaImage,
      title: "LLP Formation Services",
      des: "Combine the flexibility of a partnership with the limited liability protection of a company. We handle the complete LLP registration process.",
      action: "Learn More",
      content: [
        {
          icon: <PersonOutlinedIcon sx={iconStyle} />,
          title: "Limited Liability",
          des: "Protection of personal assets from business liabilities and debts.",
        },
        {
          icon: <BusinessOutlinedIcon sx={iconStyle} />,
          title: "Perpetual Succession",
          des: "Business continues regardless of changes in partners or ownership.",
        },
        {
          icon: <GroupsOutlinedIcon sx={iconStyle} />,
          title: "Tax Benefits",
          des: "Avoids double taxation while maintaining partnership tax treatment.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Flexible Structure",
          des: "Internal structure can be organized according to business needs.",
        },
      ],
    },
    "PRIVATE LIMITED COMPANY": {
      image: ctaImage,
      title: "Private Limited Company Incorporation",
      des: "Establish a legally separate entity with enhanced credibility and liability protection. Our experts manage the entire incorporation process for you.",
      action: "Learn More",
      content: [
        {
          icon: <PersonOutlinedIcon sx={iconStyle} />,
          title: "Limited Liability",
          des: "Complete separation between personal and business assets and liabilities.",
        },
        {
          icon: <BusinessOutlinedIcon sx={iconStyle} />,
          title: "Enhanced Credibility",
          des: "Greater business credibility with clients, vendors, and investors.",
        },
        {
          icon: <GroupsOutlinedIcon sx={iconStyle} />,
          title: "Capital Raising",
          des: "Ability to raise capital through share issuance to investors.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Perpetual Existence",
          des: "Business continues regardless of changes in shareholders or directors.",
        },
      ],
    },
  },
};
