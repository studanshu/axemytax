// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\House Property Certificate\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: HomeWorkOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "We conduct a detailed review of your property documentation and rental agreements.",
        "Our chartered accountants analyze income, expenses, and depreciation related to the property.",
        "We verify tax deductions claimed and ensure compliance with Section 24 of Income Tax Act.",
        "We prepare a comprehensive certificate detailing net annual value and taxable house property income.",
        "We offer professional guidance on maximizing legitimate deductions for house property income.",
        "We provide documentation suitable for various purposes including loan applications and visa processes.",
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
        "Standard processing time: 3-5 working days from receipt of complete documentation.",
        "Expedited services available within 24-48 hours for urgent requirements.",
        "Basic house property income certificate: ₹2,500 for a single property.",
        "Multiple property certification: ₹2,000 per additional property.",
        "Complex cases involving multiple sources of income or disputed property: ₹4,000-6,000.",
        "Annual renewal packages available at discounted rates for returning clients.",
      ],
    },
  ],
  buttonText: "Get Certificate",
};
