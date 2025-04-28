// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\InvestmentAdvisoryService\Create Corporate FDs\Considerations.js
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
        "Initial consultation to understand your investment goals, risk appetite, and liquidity needs",
        "Comprehensive market research to identify the best corporate FD options currently available",
        "Due diligence on companies offering FDs, analyzing credit ratings, financial health, and repayment track records",
        "Comparison of interest rates, tenure options, and special features across different corporate FDs",
        "Analysis of taxation implications and post-tax returns for various deposit options",
        "Personalized recommendations based on your specific requirements and risk profile",
        "Complete assistance with paperwork and application process for selected corporate FDs",
        "Regular monitoring of your corporate FD portfolio and timely advice for renewals or reinvestments",
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
        "Initial consultation and requirement gathering: 1-2 business days",
        "Market research and options analysis: 3-5 business days",
        "Recommendation presentation and discussion: 1 business day",
        "Application process and documentation: 2-3 business days",
        "Total timeline from consultation to corporate FD creation: 7-10 business days",
        "Basic advisory fee: ₹2,500 - ₹5,000 (for investments up to ₹10 lakhs)",
        "Standard package: ₹5,000 - ₹10,000 (for investments between ₹10-50 lakhs)",
        "Premium advisory services: ₹10,000+ (for investments above ₹50 lakhs or multi-company FD portfolios)",
      ],
    },
  ],
  buttonText: "Get Consultation",
};
