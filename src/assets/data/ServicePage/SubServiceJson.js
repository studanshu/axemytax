// @mui material icons
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/tax_image.png";

const iconStyle = {
  fontSize: `36px !important`,
  color: colors.info.main,
};

export const SubServiceJson = {
  caption: "Eliminate tax Worries",
  title: "Leave Your Tax Filing To The Experts",
  subServicesList: ["ITR FILING", "GST FILING", "TDS FILING", "COMPANY FILING"],
  cta: {
    "ITR FILING": {},
    "GST FILING": {
      image: ctaImage,
      title: "Let Us Take Care Of Filing Your Return",
      des: "Leave the complexity of tax laws to the professionals, and let us file your return accurately while maximizing your savings.",
      action: "Start GST Filing",
    },
    "TDS FILING": {},
    "COMPANY FILING": {},
  },
  content: {
    "ITR FILING": [],
    "GST FILING": [
      {
        icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
        title: "Personal Attention",
        des: "Your success is important to us. Therefore, we believe in providing best customer service.",
      },
      {
        icon: <FactCheckOutlinedIcon sx={iconStyle} />,
        title: "Latest Compliance",
        des: "We are always above and aboard the latest tax compliances introduced by the government.",
      },
      {
        icon: <CalculateOutlinedIcon sx={iconStyle} />,
        title: "Expert Tax Calculation",
        des: "We help you with filing your returns at monthly cadence. Auto Follow ups.",
      },
      {
        icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
        title: "Intelligent Analytics",
        des: "With our advanced tooling, we can derive intelligent insights and help to save taxes for you.",
      },
      {
        icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
        title: "Personal Attention",
        des: "Your success is important to us. Therefore, we believe in providing best customer service.",
      },
      {
        icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
        title: "Intelligent Analytics",
        des: "With our advanced tooling, we can derive intelligent insights and help to save taxes for you.",
      },
    ],
    "TDS FILING": [],
    "COMPANY FILING": [],
  },
};
