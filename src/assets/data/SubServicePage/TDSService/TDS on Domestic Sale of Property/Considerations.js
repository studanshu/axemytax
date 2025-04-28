// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS on Domestic Sale of Property\Considerations.js
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
        "Review of property purchase agreement and verification of transaction value",
        "Confirmation of seller's residential status to determine applicable TDS provisions",
        "Accurate calculation of 1% TDS amount as per Section 194-IA requirements",
        "Assistance with TAN application if buyer doesn't have one",
        "Preparation of Form 26QB for TDS payment within the prescribed deadline",
        "Online deposit of TDS amount with the government treasury",
        "Preparation and filing of TDS return to report the transaction",
        "Generation and delivery of Form 16B (TDS certificate) to the property seller",
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
        "Initial assessment and document review: 1-2 business days",
        "TDS calculation and Form 26QB preparation: 1 business day",
        "TDS payment deadline: By the 30th day from the end of the month in which property payment is made",
        "Form 16B generation: 7-14 days after TDS payment (system-dependent)",
        "Standard charges: ₹2,000 - ₹3,500 depending on property value",
        "Additional charge for TAN application (if required): ₹1,500 - ₹2,000",
        "Urgent processing fee (for tight deadlines): Additional ₹1,000",
        "Consultation on TDS implications and planning: ₹1,500 per session",
      ],
    },
  ],
  buttonText: "Get Consultation",
};
