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
        "Collect Your Income Details – Salary slips, bank statements, rent receipts, etc.",
        "Check Tax Deductions – See if you can save taxes under Section 80C, 80D, etc.",
        "Prepare & File ITR – We calculate your tax and file your return online.",
        "Receive ITR Acknowledgment – You get confirmation from the Income Tax Department.",
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
        "⏳ Time Required: 2 – 7 days",
        `💰 Charges:
        • ITR-1: ₹1500 + GST
        • ITR-2: ₹3000 onwards + GST
        • ITR-3: ₹5000 onwards + GST`,
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Simple Steps to File Your Return",
  title: "Fresh ITR Filing – Our Approach",
};
