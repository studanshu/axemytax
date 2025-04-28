// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\DigitalSignaturesService\Domestic - 2 Years\Considerations.js
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
        "We begin with verification of your identity and address documents to ensure compliance with certification authority requirements.",
        "Our team assists you in completing the Digital Signature Certificate (DSC) application form with accurate details.",
        "We handle the submission process with the authorized Certifying Authority on your behalf.",
        "We provide step-by-step guidance on installation and activation of your digital signature on your device.",
        "Our experts ensure proper token driver installation and configuration for seamless usage.",
        "We offer post-issuance support to resolve any usage or technical questions you may have.",
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
        "Standard processing time: 1-2 working days from submission of all required documents.",
        "Express processing available for urgent requirements (additional charges apply).",
        "Base cost for Domestic DSC (2 years): ₹1,200 - ₹1,800 (including token device).",
        "Additional charges may apply for document verification and physical token delivery.",
        "Annual maintenance and technical support included in the package.",
        "One-time setup assistance and installation guidance at no extra cost.",
      ],
    },
  ],
  buttonText: "Apply Now",
};
