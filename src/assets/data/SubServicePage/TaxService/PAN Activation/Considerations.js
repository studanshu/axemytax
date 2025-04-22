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
        "Check PAN Status – We confirm the current status and reason for inactivity.",
        "Initiate Aadhaar-PAN Linking – If applicable, we complete the linking process.",
        "Submit Reactivation Request – We raise a request with the Income Tax Department.",
        "Receive Confirmation – PAN status is updated and reactivated.",
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
        "⏳ Time Required: 7 –15 days",
        "💰 Charges: ₹2000 (Govt Fine) + ₹1000 + GST",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Get Your PAN Back in Action",
  title: "PAN Activation – Our Approach",
};

