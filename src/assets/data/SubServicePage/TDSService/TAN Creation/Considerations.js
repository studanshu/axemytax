// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TAN Creation\Considerations.js
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
        "Initial consultation to determine eligibility and necessity for TAN registration",
        "Collection and verification of required documents including PAN, address proof, and identity proof",
        "Preparation of Form 49B with accurate entity and responsible person details",
        "Digital signature application on the form where applicable",
        "Submission of application through NSDL/UTIITSL portal or physical submission as appropriate",
        "Real-time tracking of application status through dedicated follow-ups",
        "Prompt addressing of any deficiencies or additional requirements raised by authorities",
        "Delivery of TAN allotment letter and guidance on next steps for TDS compliance",
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
        "Document collection and verification: 1-2 business days",
        "Application preparation and submission: 1 business day",
        "Processing time by tax authorities: Typically 5-7 business days",
        "Total timeline from engagement to TAN receipt: 7-10 business days",
        "Standard charges: ₹1,500 - ₹2,000 (including government fees)",
        "Additional charges for expedited processing: ₹500 - ₹1,000",
        "Physical TAN card (if required): Additional ₹50-100",
        "Corporate/foreign entity applications: ₹2,500 - ₹3,500",
      ],
    },
  ],
  buttonText: "Get Started",
};
