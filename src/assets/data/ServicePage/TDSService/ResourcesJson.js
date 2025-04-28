import {
  AccountBalanceOutlined,
  CalculateOutlined,
  DescriptionOutlined,
  ImportExportOutlined,
  ReceiptLongOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful TDS Resources",
  title: "Official TDS Resources & References",
  resources: [
    {
      headline: "Income Tax Department - TDS Section",
      description:
        "Official portal for TDS-related forms, rates, and compliance requirements.",
      link: "https://www.incometaxindia.gov.in/Pages/tax-services/tds-on-salary.aspx",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "TRACES (TDS Reconciliation Analysis and Correction Enabling System)",
      description:
        "Portal for TDS return processing, form generation, and statement downloads.",
      link: "https://www.tdscpc.gov.in",
      icon: <CalculateOutlined />,
    },
    {
      headline: "TAN Registration Portal",
      description:
        "Official portal for TAN (Tax Deduction Account Number) registration.",
      link: "https://www.tin-nsdl.com",
      icon: <DescriptionOutlined />,
    },
    {
      headline: "NSDL TIN",
      description:
        "Repository for TDS challan status verification and payment processing.",
      link: "https://www.tin-nsdl.com",
      icon: <ReceiptLongOutlined />,
    },
    {
      headline: "Income Tax Act Sections on TDS",
      description:
        "Legal provisions governing TDS under sections 192-196 of Income Tax Act.",
      link: "https://www.incometaxindia.gov.in/pages/acts/income-tax-act.aspx",
      icon: <ImportExportOutlined />,
    },
    {
      headline: "TDS Rate Chart",
      description:
        "Up-to-date chart of applicable TDS rates for different payment types.",
      link: "https://www.incometaxindia.gov.in/Pages/tax-services/tds-rate-chart.aspx",
      icon: <SchoolOutlined />,
    },
  ],
};
