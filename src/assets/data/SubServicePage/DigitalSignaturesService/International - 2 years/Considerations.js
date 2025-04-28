// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\DigitalSignaturesService\International - 2 Years\Considerations.js
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
        "We conduct thorough identity verification compliant with international standards and protocols.",
        "Our experts facilitate completion of the international DSC application with special attention to cross-border compliance requirements.",
        "We process your application through globally recognized Certifying Authorities that offer international validity.",
        "We ensure proper USB token configuration with international certificate compatibility.",
        "We provide detailed guidance on using your certificate across different international platforms and systems.",
        "We offer specialized support for country-specific electronic signature requirements and standards.",
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
        "Standard processing time: 2-3 working days after complete document submission due to international verification requirements.",
        "Express processing available for urgent cases (additional charges apply).",
        "Base cost for International DSC (2 years): ₹3,000 - ₹4,500 (including USB token device).",
        "Additional fees may apply for specific country validations or special requirements.",
        "Technical support available for international platforms during Indian business hours.",
        "Free consultation on international compliance requirements for specific countries.",
      ],
    },
  ],
  buttonText: "Apply Now",
};
