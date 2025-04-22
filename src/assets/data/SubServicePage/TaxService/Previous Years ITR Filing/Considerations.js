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
        "Check Eligibility – We verify if you can still file a Belated Return.",
        "Calculate Tax – We compute your total tax liability including any applicable interest or late fees.",
        "Prepare & File Belated ITR – We e-file your ITR under Section 139(4).",
        "Receive Acknowledgment – You get an official confirmation of your filed return.",
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
        "⏳ Time Required: 2– 4 days",
        "💰 Charges: Starting from ₹5000 + GST",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "File Even After the Deadline",
  title: "Belated ITR – Our Approach",
};
