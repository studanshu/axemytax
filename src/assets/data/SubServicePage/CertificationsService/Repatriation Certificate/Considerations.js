// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\Repatriation Certificate\Considerations.js
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
        "We begin with a comprehensive review of your remittance details and transaction documents.",
        "Our chartered accountants analyze the nature of the payment to determine tax implications and applicable DTAA benefits.",
        "We verify all supporting documents to ensure compliance with FEMA regulations and RBI guidelines.",
        "Our experts prepare Form 15CB with professional certification and tax calculations as required.",
        "We guide you through generating Form 15CA on the income tax portal based on our certified Form 15CB.",
        "We provide comprehensive support for bank submissions and any follow-up queries.",
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
        "Standard turnaround time: 24-48 hours from receipt of complete documentation.",
        "Express service available with same-day issuance (additional charges apply).",
        "Basic certification starts at ₹1,500 per certificate for standard transactions.",
        "Complex transactions involving DTAA benefits or specialized assessments: ₹2,500-3,500 per certificate.",
        "Bundle packages available for businesses with frequent remittances at discounted rates.",
        "Consultation on optimal remittance structuring available at additional charges.",
      ],
    },
  ],
  buttonText: "Request Certificate",
};
