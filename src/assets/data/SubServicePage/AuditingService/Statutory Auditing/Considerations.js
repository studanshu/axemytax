// Icons
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

export const ConsiderationsJson = {
  considerationList: [
    {
      leftIcon: FactCheckOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Key Statutory Audit Factors",
      bullets: [
        "**Timeline Requirements** – Statutory audits must be completed within the deadlines prescribed by law. For companies, this is typically within 6 months from the end of the financial year.",
        "**Auditor Independence** – Statutory auditors must maintain independence from the company being audited to ensure objective assessment and reporting.",
        "**Compliance with Auditing Standards** – The audit must be conducted in accordance with Standards on Auditing (SAs) issued by the Institute of Chartered Accountants of India."
      ],
    },
    {
      leftIcon: AccessTimeOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Process Considerations",
      bullets: [
        "**Materiality Concept** – The audit focuses on material items that could significantly impact the financial statements or users' decisions.",
        "**Internal Control Evaluation** – Assessment of internal controls is a critical component of statutory audits to identify weaknesses and recommend improvements.",
        "**Management Responsibilities** – Management remains responsible for preparation of financial statements, while the auditor's role is to express an opinion on them."
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Understanding Statutory Audits",
  title: "Key Considerations for Statutory Audits",
};