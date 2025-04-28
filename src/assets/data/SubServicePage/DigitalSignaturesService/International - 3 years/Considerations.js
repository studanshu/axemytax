// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\DigitalSignaturesService\International - 3 Years\Considerations.js
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
        "We perform enhanced verification procedures compliant with strict international standards for 3-year validity certificates.",
        "Our specialists ensure your application meets the elevated security requirements of long-term international certificates.",
        "We coordinate with globally accredited Certifying Authorities that issue premium 3-year international certificates.",
        "We provide comprehensive setup support for integrating your international certificate with various global platforms.",
        "We offer customized configuration assistance to ensure compatibility across different countries' systems.",
        "We deliver extended technical support for the entire 3-year validity period with international usage guidance.",
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
        "Standard processing time: 2-3 working days after submission of all required documents.",
        "Priority processing available for urgent international requirements (additional charges apply).",
        "Base cost for 3-year International DSC: ₹4,500 - ₹6,000 (including USB token device).",
        "Premium packages available with additional features like cloud backup and multi-device support.",
        "More cost-effective compared to purchasing multiple shorter-term international certificates.",
        "Three full years of international compliance without renewal interruptions to your global operations.",
      ],
    },
  ],
  buttonText: "Apply Now",
};
