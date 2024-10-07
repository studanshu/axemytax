import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

export const DefaultConsiderations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: CenterFocusStrongOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Verifying Tax Deductions",
      bullets: [
        "Ensure that all tax deductions are verified and accounted for.",
        "Check for any discrepancies in the tax deductions.",
        "Ensure that all tax deductions are accounted for in the tax return.",
        "Verify the accuracy of the tax deductions.",
        "Review the tax deductions for any errors or omissions.",
      ],
    },
    {
      leftIcon: FactCheckOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Reviewing Tax Credits",
      bullets: [
        "Ensure that all tax credits are reviewed and accounted for.",
        "Check for any discrepancies in the tax credits.",
        "Ensure that all tax credits are accounted for in the tax return.",
        "Verify the accuracy of the tax credits.",
        "Review the tax credits for any errors or omissions.",
      ],
    },
    {
      leftIcon: CalculateOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Calculating Tax Liability",
      bullets: [
        "Ensure that the tax liability is calculated accurately.",
        "Check for any discrepancies in the tax liability.",
        "Ensure that the tax liability is accounted for in the tax return.",
        "Verify the accuracy of the tax liability.",
        "Review the tax liability for any errors or omissions.",
      ],
    },
    {
      leftIcon: AnalyticsOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Analyzing Tax Returns",
      bullets: [
        "Ensure that the tax returns are analyzed thoroughly.",
        "Check for any discrepancies in the tax returns.",
        "Ensure that the tax returns are accurate and complete.",
        "Verify the accuracy of the tax returns.",
        "Review the tax returns for any errors or omissions.",
      ],
    },
    {
      leftIcon: CenterFocusStrongOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Filing Tax Returns",
      bullets: [
        "Ensure that the tax returns are filed on time.",
        "Check for any discrepancies in the tax returns.",
        "Ensure that the tax returns are filed accurately and completely.",
        "Verify the accuracy of the tax returns.",
        "Review the tax returns for any errors or omissions.",
      ],
    },
  ],
  buttonText: "Get Started",
};
