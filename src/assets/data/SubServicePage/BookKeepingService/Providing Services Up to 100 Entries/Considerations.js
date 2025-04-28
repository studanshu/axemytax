// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BookKeepingService\Providing Services Up to 100 Entries\Considerations.js
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
        "📋 **Initial Assessment** – We begin by reviewing your current financial records and understanding your business structure to create a tailored bookkeeping system.",
        "📊 **Data Organization** – We sort and categorize all your financial transactions, ensuring each entry is properly classified and documented.",
        "💼 **Entry Processing** – We meticulously record up to 100 accounting entries, including sales, purchases, expenses, and other financial transactions.",
        "📝 **Financial Reporting** – We prepare basic financial statements including income statements and balance sheets to give you clear visibility into your business's financial health.",
        "🔄 **Regular Updates** – We maintain ongoing communication, providing you with updated financial records and answering any questions you may have.",
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
        "⏳ Time Required: 5-7 business days for initial setup, then ongoing monthly services",
        "💰 Charges: Starting from ₹3,000 + GST per month for up to 100 entries",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "How We Help You",
  title: "Bookkeeping Services – Our Approach",
};
