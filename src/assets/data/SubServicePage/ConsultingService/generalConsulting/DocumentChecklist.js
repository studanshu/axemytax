// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\ConsultingService\generalConsulting\DocumentChecklist.js
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import DefaultFormFields from "../../../Form/DefaultFormFields";

export const DocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Information Checklist",
  documents: [
    {
      title: "Business Overview Document",
      des: "Current business structure, mission statement, and primary objectives of the organization.",
      icon: BusinessOutlinedIcon,
    },
    {
      title: "Financial Statements",
      des: "Recent financial statements including balance sheets, P&L statements, and cash flow reports.",
      icon: ReceiptOutlinedIcon,
    },
    {
      title: "Strategic Plans",
      des: "Current strategic or business plans, including goals and key performance indicators.",
      icon: TrendingUpOutlinedIcon,
    },
    {
      title: "Market Research Data",
      des: "Any existing market research, competitive analysis, or industry reports you have.",
      icon: AssessmentOutlinedIcon,
    },
    {
      title: "Process Documentation",
      des: "Documentation of current workflows, operational processes, or organizational charts.",
      icon: DescriptionOutlinedIcon,
    },
    {
      title: "Budget Allocations",
      des: "Current budget documents including resource allocation and spending priorities.",
      icon: AccountBalanceOutlinedIcon,
    },
  ],
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    {
      label: "Organization Name",
      name: "organization_name",
      type: "text",
    },
    {
      label: "Primary Challenge/Goal",
      name: "primary_challenge",
      type: "text",
    },
  ],
  buttonText: "Request Callback",
};
