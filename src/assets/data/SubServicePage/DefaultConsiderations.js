import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SendIcon from "@mui/icons-material/SendOutlined";

import colors from "assets/theme/base/colors";

const leftIconColor = {
  color: colors.primary.main,
};

const rightIconColor = {
  color: colors.secondary.main,
};

export const DefaultConsiderations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: <CenterFocusStrongOutlinedIcon sx={leftIconColor} />,
      rightIcon: <SendIcon sx={rightIconColor} />,
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
      leftIcon: <FactCheckOutlinedIcon sx={leftIconColor} />,
      rightIcon: <SendIcon sx={rightIconColor} />,
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
      leftIcon: <CalculateOutlinedIcon sx={leftIconColor} />,
      rightIcon: <SendIcon sx={rightIconColor} />,
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
      leftIcon: <AnalyticsOutlinedIcon sx={leftIconColor} />,
      rightIcon: <SendIcon sx={rightIconColor} />,
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
      leftIcon: <CenterFocusStrongOutlinedIcon sx={leftIconColor} />,
      rightIcon: <SendIcon sx={rightIconColor} />,
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
