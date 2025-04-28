// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\IndirectTaxationService\GST Filing\Considerations.js
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
        "Comprehensive data collection of all sales and purchase transactions",
        "Meticulous reconciliation of purchase and sales data with vendor and customer returns",
        "Identification and maximization of eligible input tax credits",
        "Proper classification of goods and services under correct HSN/SAC codes",
        "Accurate calculation of tax liabilities under different tax heads (CGST, SGST, IGST)",
        "Timely preparation and submission of all applicable returns (GSTR-1, GSTR-3B, etc.)",
        "Resolution of mismatches and discrepancies in return data",
        "Ongoing guidance for compliance improvement and tax optimization",
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
        "Monthly returns: Documentation by 5th, filing completed by due dates (10th/20th)",
        "Quarterly returns (composition scheme): Filing completed by 18th of the month following quarter end",
        "Annual returns: Completed 15 days prior to due date for review",
        "Monthly filing charges: ₹1,000 - ₹3,500 (based on transaction volume)",
        "Quarterly filing (composition scheme): ₹750 - ₹2,000 per quarter",
        "Annual return filing: ₹3,000 - ₹10,000 (based on turnover and complexity)",
        "Additional charges for reconciliation statement (GSTR-9C) if applicable",
      ],
    },
  ],
  buttonText: "Start Filing",
};
