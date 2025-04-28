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
        "Identify the Mistake – We compare your filed return with the CPC order or intimation to pinpoint the issue.",
        "Choose Correction Type – Based on the error, we pick the appropriate method (online correction or Section 154).",
        "File Rectification Request – We submit the correction through the Income Tax portal with accurate details.",
        "Track Status – We monitor updates from the IT Department and keep you informed once it’s accepted.",
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
        "⏳ Time Required: 7 – 15 days",
        "💰 Charges: ₹3000 + GST",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Fix Errors in Filed Returns",
  title: "Rectification Return – Our Approach",
};
