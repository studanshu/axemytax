// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\publicLimited\Considerations.js
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
        "Comprehensive consultation to evaluate business readiness for public limited structure",
        "Strategic guidance on capital structure, shareholding patterns, and governance framework",
        "Name reservation application with careful review to ensure compliance with MCA guidelines",
        "DIN and DSC processing for minimum three directors (including independent directors)",
        "Meticulously drafted MOA/AOA addressing the complex regulatory requirements",
        "Expert handling of incorporation filing with heightened statutory compliances",
        "Assistance with creating robust governance systems including board committees",
        "Guidance on post-incorporation compliance including enhanced disclosure requirements",
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
        "Preliminary consultation and planning: 5-7 business days",
        "Name approval process: 3-5 business days",
        "DIN/DSC processing for directors: 5-7 business days",
        "MOA/AOA preparation with legal review: 7-10 business days",
        "Incorporation filing and approval: 15-20 business days",
        "Post-incorporation compliances: 10-15 business days",
        "Complete Public Limited setup: 45-60 business days",
        "Standard incorporation package: ₹45,999/- onwards",
        "Comprehensive package with governance setup: ₹65,999/- onwards",
      ],
    },
  ],
  buttonText: "Get Started",
};
