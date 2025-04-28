// @mui material icons
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/TaxService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Income Tax Services - Making Taxes Simple for You",
  title: "Leave Your Tax Filing To The Experts",
  cta: {
    "Appeals & Assessment": {
      image: ctaImage,
      title: "If You Get an Income Tax Notice",
      des: "Leave the complexity of tax laws to the professionals, and let us file your return accurately while maximizing your savings.",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Review the Notice",
          des: "We carefully check why you received the notice.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Prepare Response",
          des: "We gather the required documents.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "File Appeal (If Needed)",
          des: "If the tax department made an error, we help you appeal.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Follow-up with Tax Offices",
          des: "We track the status until it’s resolved.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: " Time Required",
          des: "10-30 days (depends on case complexity).",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: " Charges",
          des: "Starting from 500+GST (For Reviewing the Notice).",
        },{
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: "PAN card, ITR Portal Credentials ,tax return copy,bank statements, tax notice copy.",
        },
      ],
    },
    
    "Change in Particulars of PAN": {
      image: ctaImage,
      title: "Updating a Previously Filed ITR before Due Date",
      des: "If you made a mistake/ missed out an entry in your original tax return, you can file a revised return under Section 139(5).",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Check Defect Reason ",
          des: "We identify why the return was rejected.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Make Necessary Corrections",
          des: "We fix the errors.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Refile the Return",
          des: " We submit the corrected return.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive Confirmation",
          des: " You get a new ITR acknowledgment.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: " 5 - 7 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: " 5000 + GST.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: " PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.", 
        },
      ],
    },
    "Fresh ITR Filing": {
      image: ctaImage,
      title: "Filing Your Income Tax Return for the First Time",
      des: "Every year, you must report your income to the government by filing an Income Tax Return (ITR).",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Collect Your Income Details",
          des: "Salary slips, bank statements, rent receipts, etc.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Check Tax Deductions",
          des: "See if you can save taxes under Section 80C, 80D, etc.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Prepare & File ITR",
          des: "We calculate your tax and file your return online.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive ITR Acknowledgment",
          des: "You get confirmation from the Income Tax Department.",
        },
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Personal Attention",
          des: "Your success is important to us. Therefore, we believe in providing best customer service.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: "2 - 7 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents",
          des: "PAN and IT credentials" + "Aadhar Card Number" + "Savings and Fixed Deposits  Bank Interest certificate" + "Form 16 with component wise salary breakup / Annual Payslip" + "Form 16" + "Rent Receipts" + "Investment Proofs (80C, 80D, etc.)" + "Other Income Details (if any)" + "Tax Payment Receipts",

        },
      ],
    },
    "Previous Year's ITR Filing": {
      image: ctaImage,
      title: "If You Missed Filing Last Year's Return",
      des: "If you forgot to file your tax return last year, don’t worry! You can still file it as an Updated Return before the deadline.",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Check Eligibility",
          des: "We confirm if your return can still be filed",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Prepare Tax Calculation",
          des: "We calculate your tax based on last year’s income.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "File the Belated Return",
          des: " We submit the return online.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive Confirmation",
          des: "You get an official acknowledgment.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: "2 - 3 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: "Starting from 5000 +GSt.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required:",
          des: "PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis."
        },
      ],
    },
    "Rectification Return": {
      image: ctaImage,
      title: "Fixing Errors in a Filed Return",
      des: "Made a mistake in your tax return? You can correct it by filing a rectification return.",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Identify the Mistake",
          des: " We check what needs to be corrected.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Submit Correction Request",
          des: "We apply for rectification under Section 154.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Income Tax Department Reviews It",
          des: "They process the request.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Receive Updated Acknowledgment",
          des: "Your corrected return is approved.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: " Time Required",
          des: "7 - 5 Business Days.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: "3000/ + GST.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: "PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.",
        },
      ],
    },
    "Defective Return": {
      image: ctaImage,
      title: "Fixing a Rejected Tax Return",
      des: "If the Income Tax Department marks your return as defective, you need to fix and refile it within the deadline.",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Check Defect Reason ",
          des: "We identify why the return was rejected.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Make Necessary Corrections",
          des: "We fix the errors.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Refile the Return",
          des: " We submit the corrected return.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive Confirmation",
          des: " You get a new ITR acknowledgment.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: " 5 - 7 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: " 5000 + GST.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: " PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.", 
        },
      ]
    },
    "Revised Return": {
      image: ctaImage,
      title: "Updating a Previously Filed ITR before Due Date",
      des: "If you made a mistake/ missed out an entry in your original tax return, you can file a revised return under Section 139(5).",
      action: "See How It Works",
      content: [
          {
            icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
            title: "Check Defect Reason ",
            des: "We identify why the return was rejected.",
          },
          {
            icon: <FactCheckOutlinedIcon sx={iconStyle} />,
            title: "Make Necessary Corrections",
            des: "We fix the errors.",
          },
          {
            icon: <CalculateOutlinedIcon sx={iconStyle} />,
            title: "Refile the Return",
            des: " We submit the corrected return.",
          },
          {
            icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
            title: "Receive Confirmation",
            des: " You get a new ITR acknowledgment.",
          },
          {
            icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
            title: "Time Required",
            des: " 5 - 7 Business Days.",
          },
          {
            icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
            title: "Charges",
            des: " 5000 + GST.",
          },
          {
            icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
            title: "Documents Required",
            des: " PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.", 
          },
      ],
    },
    "New PAN": {
      image: ctaImage,
      title: "Updating a Previously Filed ITR before Due Date",
      des: "If you made a mistake/ missed out an entry in your original tax return, you can file a revised return under Section 139(5).",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Check Defect Reason ",
          des: "We identify why the return was rejected.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Make Necessary Corrections",
          des: "We fix the errors.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Refile the Return",
          des: " We submit the corrected return.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive Confirmation",
          des: " You get a new ITR acknowledgment.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: " 5 - 7 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: " 5000 + GST.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: " PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.", 
        },
      ],
    },
    "PAN Activation": {
      image: ctaImage,
      title: "Updating a Previously Filed ITR before Due Date",
      des: "If you made a mistake/ missed out an entry in your original tax return, you can file a revised return under Section 139(5).",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Check Defect Reason ",
          des: "We identify why the return was rejected.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Make Necessary Corrections",
          des: "We fix the errors.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Refile the Return",
          des: " We submit the corrected return.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive Confirmation",
          des: " You get a new ITR acknowledgment.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: " 5 - 7 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: " 5000 + GST.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: " PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.", 
        },
      ],
    },
    "Relocation of PAN": {
      image: ctaImage,
      title: "Updating a Previously Filed ITR before Due Date",
      des: "If you made a mistake/ missed out an entry in your original tax return, you can file a revised return under Section 139(5).",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Check Defect Reason ",
          des: "We identify why the return was rejected.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Make Necessary Corrections",
          des: "We fix the errors.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Refile the Return",
          des: " We submit the corrected return.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive Confirmation",
          des: " You get a new ITR acknowledgment.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: " 5 - 7 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: " 5000 + GST.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: " PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.", 
        },
      ],
    },
    "Surrender of PAN": {
      image: ctaImage,
      title: "Updating a Previously Filed ITR before Due Date",
      des: "If you made a mistake/ missed out an entry in your original tax return, you can file a revised return under Section 139(5).",
      action: "See How It Works",
      content: [
        {
          icon: <CenterFocusStrongOutlinedIcon sx={iconStyle} />,
          title: "Check Defect Reason ",
          des: "We identify why the return was rejected.",
        },
        {
          icon: <FactCheckOutlinedIcon sx={iconStyle} />,
          title: "Make Necessary Corrections",
          des: "We fix the errors.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Refile the Return",
          des: " We submit the corrected return.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Receive Confirmation",
          des: " You get a new ITR acknowledgment.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Time Required",
          des: " 5 - 7 Business Days.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Charges",
          des: " 5000 + GST.",
        },
        {
          icon: <AnalyticsOutlinedIcon sx={iconStyle} />,
          title: "Documents Required",
          des: " PAN and IT credentials + Reasons for not Filing ITR + Aadhar Card Number + Check with an Expert for further documents as it depends on Case to Case Basis.", 
        },
      ],
    },
  },
};
