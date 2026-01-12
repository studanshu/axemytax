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
      heading: "Verification Essentials",
      bullets: [
        "**Verification Frequency** – Fixed assets should be physically verified at least annually, with high-value or mobile assets potentially requiring more frequent verification.",
        "**Asset Tagging** – A proper asset tagging system with unique identification numbers facilitates efficient verification and tracking of fixed assets.",
        "**Depreciation Methods** – Consistency in applying depreciation methods and accurate calculation of depreciation is crucial for proper financial reporting.",
      ],
    },
    {
      leftIcon: AccessTimeOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Management Practices",
      bullets: [
        "**Impairment Assessment** – Regular assessment of assets for potential impairment ensures assets are not carried at values exceeding their recoverable amount.",
        "**Asset Classification** – Proper classification of assets by type, location, and department helps in systematic verification and tracking.",
        "**Documentation of Changes** – Maintaining proper documentation for additions, disposals, and transfers ensures the fixed asset register remains accurate and up-to-date.",
      ],
    },
  ],
  buttonText: "Get Started",
  caption: "Understanding Asset Verification",
  title: "Key Considerations for Fixed Asset Verification",
};
