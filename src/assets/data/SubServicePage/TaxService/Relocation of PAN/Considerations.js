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
        "Understand Your New Jurisdiction – We check where your PAN should be relocated based on your new address.",
        "Submit Change Request – We prepare and file the official application with your jurisdiction change request.",
        "Coordinate with Tax Authorities – We handle the communication with the assessing officer, if needed.",
        "Confirm PAN Relocation – You’ll be notified once your PAN is officially relocated to the new jurisdiction.",
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
        "Time Required: 15 – 20 days",
        "Charges: ₹5000 + GST",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Moved to a New City?",
  title: "Relocation of PAN – Our Approach",
};
