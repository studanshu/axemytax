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
      heading: "Key Audit Principles",
      bullets: [
        "**Scope Definition** – Clearly defining the scope of the internal audit is crucial to ensure focus on areas with the highest risk or greatest need for improvement.",
        "**Independence** – Internal auditors need sufficient independence from the operations they audit to maintain objectivity and provide unbiased assessments.",
        "**Risk-Based Approach** – Adopting a risk-based approach allows internal audit resources to be directed toward areas that pose the greatest risks to organizational objectives.",
      ],
    },
    {
      leftIcon: AccessTimeOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Implementation Factors",
      bullets: [
        "**Continuous Improvement** – Internal audits should not only identify issues but also suggest practical improvements and monitor implementation of recommendations.",
        "**Management Support** – Strong support from senior management is essential for an effective internal audit function and implementation of audit recommendations.",
        "**Audit Committee Oversight** – Regular reporting to the audit committee provides governance oversight and reinforces the authority of the internal audit function.",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Understanding Internal Audits",
  title: "Key Considerations for Internal Audits",
};
