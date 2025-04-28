// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\privateLimited\Considerations.js
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
        "Strategic consultation to understand business objectives, shareholding structure, and growth plans",
        "Name reservation application with the Ministry of Corporate Affairs (MCA) with multiple options",
        "Director Identification Number (DIN) and Digital Signature Certificate (DSC) for all directors",
        "Customized drafting of Memorandum of Association (MOA) and Articles of Association (AOA)",
        "Preparation and filing of incorporation forms (SPICe+) with the Registrar of Companies",
        "Post-incorporation compliance handling including PAN, TAN, GST registration, and ESIC/PF",
        "Assistance with bank account opening and initial share certificate issuance",
        "Guidance on statutory registers maintenance and initial board meeting documentation",
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
        "Name approval: 2-3 business days",
        "DIN and DSC processing: 3-5 business days",
        "MOA/AOA preparation: 2-3 business days",
        "Incorporation filing and processing: 10-15 business days",
        "Post-incorporation compliances: 7-10 business days",
        "Complete Private Limited setup: 20-35 business days",
        "Basic incorporation package: ₹15,999/- onwards",
        "Standard package with compliances: ₹21,999/- onwards",
        "Premium package with all registrations: ₹27,999/- onwards",
      ],
    },
  ],
  buttonText: "Get Started",
};
