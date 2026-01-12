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
      heading: "Key Audit Requirements",
      bullets: [
        "**Applicability Thresholds** – Tax audit is mandatory for businesses with turnover exceeding ₹1 crore (₹10 million), or ₹2 crores for professionals (if cash receipts/payments are less than 5% of total receipts/payments).",
        "**Filing Deadlines** – Tax audit reports must be filed by September 30th following the end of the financial year, with extensions occasionally provided by the tax department.",
        "**Form Selection** – Different forms (3CA/3CB/3CD) are required based on whether the entity is already subject to statutory audit and other factors.",
      ],
    },
    {
      leftIcon: AccessTimeOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Compliance Considerations",
      bullets: [
        "**Disallowance Risk** – Improper documentation or non-compliance with tax provisions can lead to disallowances and penalties during assessment.",
        "**Record Keeping Duration** – Maintaining books of accounts and supporting documents for at least 6 years is advisable to address any future queries.",
        "**Cash Transaction Limits** – Special attention to cash transactions exceeding ₹10,000 and compliance with Section 40A(3) of the Income Tax Act is essential.",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Understanding Tax Audits",
  title: "Key Considerations for Tax Audits",
};
