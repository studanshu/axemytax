// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\InvestmentAdvisoryService\Capital Gains\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: FactCheckOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "Comprehensive portfolio review to identify all potential capital gains and losses across different asset classes",
        "Detailed analysis of short-term versus long-term capital gains implications based on holding periods",
        "Strategic advice on timing of asset sales to optimize tax outcomes",
        "Exploration of tax-loss harvesting opportunities to offset gains",
        "Examination of exemptions and deductions available under various sections of the Income Tax Act",
        "Guidance on reinvestment options to defer capital gains tax through specific schemes",
        "Documentation preparation for accurate reporting in income tax returns",
        "Ongoing monitoring and adjustment of strategies based on changing tax laws and regulations",
      ],
    },
    {
      leftIcon: AccessTimeOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Timeline & Charges",
      bullets: [
        "Initial consultation and portfolio assessment: 2-3 business days",
        "Comprehensive capital gains analysis: 3-5 business days",
        "Strategy development and recommendation report: 5-7 business days",
        "Basic capital gains advisory: ₹5,000 - ₹10,000 (for portfolios under ₹25 lakhs)",
        "Standard advisory package: ₹10,000 - ₹20,000 (for portfolios between ₹25 lakhs to ₹1 crore)",
        "Premium advisory services: ₹20,000+ (for portfolios above ₹1 crore or with complex multi-asset structures)",
        "Additional charges may apply for implementation assistance and ongoing advisory",
        "Fees may be adjusted based on complexity and scope of required services",
      ],
    },
  ],
  buttonText: "Get Consultation",
};
