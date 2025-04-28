// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\soleProprietorshipIncorporation\Considerations.js
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
        "Personalized consultation to understand your business requirements and advise on ideal structure",
        "Assistance with business name selection and verification for uniqueness in your operating region",
        "Preparation and filing of Udyam/MSME registration to access government benefits and schemes",
        "Handling Shop & Establishment Act registration process with local municipal authorities",
        "Facilitating trade license applications specific to your business activities and location",
        "Processing GST registration if your business meets the turnover threshold requirements",
        "Professional assistance with PAN and current account opening for your business entity",
        "Comprehensive guidance on compliance requirements, record-keeping, and tax obligations",
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
        "Basic Sole Proprietorship setup: 3-5 business days",
        "MSME/Udyam Registration: 1-2 business days after document submission",
        "Shop & Establishment Registration: 4-7 business days",
        "GST Registration (if applicable): 3-5 business days",
        "Complete setup including all registrations: 7-15 business days",
        "Basic registration package starting from ₹2,999/-",
        "Standard package with GST registration starting from ₹5,999/-",
        "Premium package with all licenses and compliances starting from ₹9,999/-",
      ],
    },
  ],
  buttonText: "Get Started",
};
