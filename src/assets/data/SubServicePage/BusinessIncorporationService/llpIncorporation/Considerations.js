// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\llpIncorporation\Considerations.js
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
        "Consultation to understand business objectives and partner expectations for optimal structuring",
        "Name reservation application with the Ministry of Corporate Affairs (MCA) with up to 6 name options",
        "DPIN/DSC (Digital Signature Certificate) application for designated partners",
        "Preparation of comprehensive LLP Agreement tailored to your specific business requirements",
        "Filing of incorporation documents (Form FiLLiP) with the Registrar of Companies",
        "Post-incorporation compliance handling including PAN, TAN, and GSTIN registration",
        "Bank account opening assistance with all required documentation",
        "Initial compliance setup including letterhead design and statutory registers",
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
        "Name approval: 3-5 business days",
        "DSC and DPIN processing: 3-4 business days",
        "LLP incorporation filing: 7-10 business days",
        "Post-incorporation registrations: 7-10 business days",
        "Complete LLP setup: 20-30 business days",
        "Basic LLP incorporation package: ₹12,999/- onwards",
        "Standard package with GST and compliance: ₹16,999/- onwards",
        "Premium package with all registrations: ₹21,999/- onwards",
      ],
    },
  ],
  buttonText: "Get Started",
};
