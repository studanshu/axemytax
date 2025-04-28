// @mui material icons
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/OtherService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Specialized Solutions",
  title: "Additional Professional Services",
  cta: {
    "OTHER SERVICES": {
      image: ctaImage,
      title: "Customized Financial & Business Solutions",
      des: "Specialized services tailored to unique requirements that fall outside our standard service categories, delivered with the same expertise and professionalism.",
      action: "Learn More",
      content: [
        {
          icon: <BusinessCenterOutlinedIcon sx={iconStyle} />,
          title: "MSME Registration",
          des: "Complete assistance with registering your business as a Micro, Small, or Medium Enterprise to access government benefits.",
        },
        {
          icon: <PublicOutlinedIcon sx={iconStyle} />,
          title: "FEMA Compliance",
          des: "Expert guidance on Foreign Exchange Management Act regulations for international business transactions.",
        },
        {
          icon: <DescriptionOutlinedIcon sx={iconStyle} />,
          title: "Specialized Documentation",
          des: "Preparation of complex financial and legal documents tailored to specific business requirements.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Regulatory Liaison",
          des: "Representation and coordination with various regulatory authorities on your behalf.",
        },
      ],
    },
  },
};
