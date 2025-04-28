// @mui material icons
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/BookKeepingService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Comprehensive Bookkeeping Solutions",
  title: "Our Bookkeeping Services",
  cta: {
    "PROVIDING SERVICES UP TO 100 ENTRIES": {
      image: ctaImage,
      title: "Efficient Bookkeeping for Small Businesses",
      des: "Our entry-level bookkeeping package is perfect for small businesses and startups with limited monthly transactions, providing essential financial recording and organization.",
      action: "Learn More",
      content: [
        {
          icon: <ReceiptOutlinedIcon sx={iconStyle} />,
          title: "Transaction Recording",
          des: "Systematic recording and categorization of up to 100 financial transactions per month.",
        },
        {
          icon: <EventNoteOutlinedIcon sx={iconStyle} />,
          title: "Monthly Reconciliation",
          des: "Regular bank statement reconciliation to ensure all transactions are accurately recorded.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Basic Financial Statements",
          des: "Preparation of income statements and balance sheets for clear financial visibility.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Tax-Ready Reports",
          des: "Organized financial information ready for tax filing and compliance requirements.",
        },
      ],
    },
  },
};
