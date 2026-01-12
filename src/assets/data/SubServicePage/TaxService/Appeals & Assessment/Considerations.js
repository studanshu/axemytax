// Icons
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const Considerations = {
  considerationList: [
    {
      leftIcon: FactCheckOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "**Review the Notice** – We carefully examine the tax notice to understand the issue, the deadline, and the section under which it has been issued.",
        "**Prepare Response** – We gather relevant documents and draft a precise response that addresses all points raised by the department.",
        "**File Appeal (If Needed)** – If the issue cannot be resolved through a response, we prepare and file an official appeal with supporting evidence.",
        "**Follow-up with Tax Office** – We regularly check the status, respond to any follow-up queries, and keep you updated till closure.",
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
        "Time Required: 10 – 30 days (depends on case complexity)",
        "Charges: Starting from ₹500 + GST (for reviewing the notice)",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "How We Help You",
  title: "Appeals & Assessments – Our Approach",
};
