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
      heading: "Key Audit Factors",
      bullets: [
        "**Timing of the Audit** – Stock audits are most effective when conducted at the end of an accounting period or during periods of low business activity to minimize disruptions.",
        "**Sampling Techniques** – For large inventories, appropriate sampling methods should be used to achieve reasonable accuracy while maintaining efficiency.",
        "**Valuation Methods** – Understanding the inventory valuation method (FIFO, LIFO, Weighted Average) is crucial for proper verification of inventory values.",
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
        "✂️ **Cut-off Procedures** – Proper cut-off procedures ensure that all goods received before the count are included and goods sold are excluded from the inventory.",
        "📦 **Slow-moving and Obsolete Items** – Special attention should be given to identifying slow-moving, damaged, or obsolete inventory items that may require valuation adjustments.",
        "🏢 **Third-party Inventories** – Goods held on consignment or at third-party locations require special verification procedures and confirmations.",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Understanding Stock Audits",
  title: "Key Considerations for Stock Audits",
};
