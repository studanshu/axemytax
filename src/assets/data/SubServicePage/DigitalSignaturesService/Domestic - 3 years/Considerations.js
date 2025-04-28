// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\DigitalSignaturesService\Domestic - 3 Years\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: PublicOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "We perform comprehensive identity verification to ensure compliance with certification authority requirements.",
        "Our experts guide you through the application process with detailed instructions for the 3-year validity certificate.",
        "We handle direct coordination with authorized Certifying Authorities to expedite processing.",
        "We provide personalized setup assistance to ensure proper installation on your preferred device.",
        "Our team configures the USB token drivers and software for seamless integration with your systems.",
        "We offer extended technical support throughout the 3-year validity period of your certificate.",
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
        "Standard processing time: 1-2 working days after complete document submission.",
        "Rush processing available for urgent requirements within 24 hours (additional charges apply).",
        "Base cost for Domestic DSC (3 years): ₹1,800 - ₹2,400 (including USB token device).",
        "Premium options available for organizational or multiple-user certificates.",
        "Free technical support included for the entire 3-year validity period.",
        "Cost-effective compared to purchasing two separate certificates over the same period.",
      ],
    },
  ],
  buttonText: "Apply Now",
};
