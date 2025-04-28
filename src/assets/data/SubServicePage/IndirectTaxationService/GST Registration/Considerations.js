// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\IndirectTaxationService\GST Registration\Considerations.js
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
        "Initial consultation to determine eligibility and registration category (Regular/Composition)",
        "Collection and verification of all required documents (PAN, address proof, bank details, etc.)",
        "Preparation of GST application form with accurate business details",
        "Submission of registration application on the GST portal",
        "Tracking application status and addressing any deficiencies raised",
        "Verification of business details through OTP/EVC process",
        "Obtaining GST Registration Certificate with GSTIN",
        "Post-registration guidance on compliance requirements",
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
        "Standard processing time: 3-7 working days from document submission",
        "Express service available for urgent registrations (additional charges apply)",
        "Base charge: ₹1,500 - ₹3,000 for individual/proprietorship registrations",
        "Partnership/LLP/Company registrations: ₹2,500 - ₹4,000",
        "Additional charges for special category registrations (e-commerce, non-resident)",
        "Fee includes initial compliance guidance and setup assistance",
      ],
    },
  ],
  buttonText: "Register Now",
};
