// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\Net Worth Certificate\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: AccountBalanceWalletOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "We conduct a comprehensive review of all your assets and liabilities documentation.",
        "Our chartered accountants perform accurate valuations according to recognized accounting principles.",
        "We analyze and include both financial and physical assets as per appropriate valuation methods.",
        "We account for all legitimate liabilities to provide an accurate net worth assessment.",
        "We prepare an official certificate that is legally valid and widely accepted by institutions.",
        "We provide detailed breakdowns of asset classes and liabilities for transparency and credibility.",
      ],
    },
    {
      leftIcon: ScheduleOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Timeline & Charges",
      bullets: [
        "Standard processing time: 3-5 working days after receiving complete documentation.",
        "Express service available within 24-48 hours for urgent requirements at additional charges.",
        "Basic net worth certificate for individuals: ₹3,000-5,000 depending on asset complexity.",
        "Business entity net worth certificates: ₹5,000-10,000 based on scale and complexity.",
        "Multiple-purpose certificates with specialized formats: Additional ₹1,000-2,000.",
        "Annual packages available for clients requiring regular net worth updates.",
      ],
    },
  ],
  buttonText: "Request Certificate",
};
