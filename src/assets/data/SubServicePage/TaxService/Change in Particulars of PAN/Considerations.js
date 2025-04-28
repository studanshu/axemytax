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
        "Submit Correction Form – Provide old and new details.",
        "Upload Proof of Change – Submit Aadhaar or other legal documents.",
        "Receive Updated PAN – A new PAN card is issued.",
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
        "⏳ Time Required: 10– 15 days",
        "💰 Charges: ₹1,000 + GST + ₹110/- Government Charges",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "What You Can Expect",
  title: "Change in PAN Details – Our Approach",
};
