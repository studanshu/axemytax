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
        "Identify Duplicate PAN – We verify which PANs are linked to you and identify the one to surrender.",
        "Prepare Surrender Request – We draft the official request for PAN cancellation.",
        "Submit Online Form – We file the request with the Income Tax Department online or assist with physical filing if needed.",
        "Confirm Deactivation – You’ll receive confirmation once the extra PAN is successfully surrendered.",
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
        "Time Required: 10 – 15 days",
        "Charges: ₹2000 + GST",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Avoid Penalties, Keep Only One PAN",
  title: "Surrender of PAN – Our Approach",
};
