// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\BusinessIncorporationService\hufIncorporation\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: FactCheckOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "Initial consultation to understand family structure and financial objectives",
        "Identification of appropriate Karta (head of family) and coparceners (members with rights)",
        "Preparation of comprehensive HUF formation deed with clear member definitions",
        "Application and procurement of PAN card in the HUF name",
        "Assistance with HUF bank account opening with proper documentation",
        "Guidance on initial capital contribution and asset transfer strategies",
        "Establishment of proper books of accounts and record-keeping practices",
        "Strategic advice on tax planning benefits and ongoing compliance requirements",
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
        "HUF formation deed preparation: 2-3 business days",
        "PAN application and processing: 7-10 business days",
        "Bank account opening assistance: 3-5 business days (bank dependent)",
        "Complete HUF formation process: 10-15 business days",
        "Basic HUF incorporation package: ₹4,999/-",
        "Standard package with bank account setup: ₹7,999/-",
        "Premium package with tax planning consultation: ₹12,999/-",
        "Additional services (GST registration, investment advice): Priced separately",
      ],
    },
  ],
  buttonText: "Get Started",
};
