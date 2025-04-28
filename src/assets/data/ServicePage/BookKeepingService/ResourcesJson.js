import {
  AccountBalanceOutlined,
  CalculateOutlined,
  DescriptionOutlined,
  ImportExportOutlined,
  MenuBookOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful Bookkeeping Resources",
  title: "Bookkeeping & Accounting Resources",
  resources: [
    {
      headline: "Institute of Chartered Accountants of India",
      description:
        "Access accounting standards, guidelines, and technical resources for financial record-keeping.",
      link: "https://www.icai.org",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "Ministry of Corporate Affairs",
      description:
        "Find regulations regarding company accounting requirements and financial reporting.",
      link: "https://www.mca.gov.in",
      icon: <ImportExportOutlined />,
    },
    {
      headline: "Income Tax Department",
      description:
        "Access guidelines on maintaining proper books of accounts for tax purposes.",
      link: "https://www.incometaxindia.gov.in",
      icon: <DescriptionOutlined />,
    },
    {
      headline: "GST Portal",
      description:
        "Information on GST record-keeping requirements and compliance.",
      link: "https://www.gst.gov.in",
      icon: <CalculateOutlined />,
    },
    {
      headline: "MSME Ministry",
      description:
        "Guidelines and support for small business accounting and record keeping.",
      link: "https://msme.gov.in",
      icon: <SchoolOutlined />,
    },
    {
      headline: "Institute of Cost Accountants of India",
      description:
        "Resources on cost accounting and management accounting practices.",
      link: "https://icmai.in",
      icon: <MenuBookOutlined />,
    },
  ],
};
