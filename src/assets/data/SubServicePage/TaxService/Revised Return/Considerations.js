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
        "Review Original Return – We go through your previously filed ITR to identify the errors or omissions.",
        "Gather Corrected Information – We collect updated income details, deductions, or investments.",
        "File Revised Return – We file your corrected ITR under Section 139(5) before the due date.",
        "Receive Acknowledgment – You get confirmation of your successfully filed revised return.",
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
        "Time Required: 3 – 7 days",
        `Charges:
        • ITR-1: ₹1500 + GST
        • ITR-2: ₹3000 onwards + GST
        • ITR-3: ₹5000 onwards + GST`,
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Correct Mistakes Before It’s Late",
  title: "Revised Return – Our Approach",
};

