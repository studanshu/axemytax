// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\partnershipIncorporation\Considerations.js
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
        "Initial consultation to understand business objectives, partner contributions, and operational structure",
        "Drafting of comprehensive partnership deed with clear clauses on profit sharing, roles, and liabilities",
        "Registration of partnership firm with the Registrar of Firms in your state",
        "PAN and TAN application processing for the partnership entity",
        "GST registration if your business meets the threshold requirements",
        "Professional bank account opening assistance with all required documentation",
        "Business licenses procurement specific to your industry and location",
        "Guidance on statutory compliances, book-keeping requirements, and tax filing obligations",
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
        "Partnership deed drafting: 3-5 business days",
        "Firm registration with Registrar: 10-15 business days (state dependent)",
        "PAN and GST registration: 5-7 business days",
        "Bank account opening: 3-5 business days (bank dependent)",
        "Complete partnership setup: 15-25 business days",
        "Basic partnership registration: ₹8,999/- onwards",
        "Standard package with GST and bank account: ₹12,999/- onwards",
        "Premium package with all licenses: ₹16,999/- onwards",
      ],
    },
  ],
  buttonText: "Get Started",
};
