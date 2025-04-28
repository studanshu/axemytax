import {
  AccountBalanceOutlined,
  BalanceOutlined,
  BusinessCenterOutlined,
  DescriptionOutlined,
  GavelOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful Auditing Resources",
  title: "Official Audit Resources & References",
  resources: [
    {
      headline: "Institute of Chartered Accountants of India (ICAI)",
      description:
        "Access auditing standards, guidance notes, and technical resources for audit practitioners.",
      link: "https://www.icai.org",
      icon: <BalanceOutlined />,
    },
    {
      headline: "Ministry of Corporate Affairs",
      description:
        "Find regulations regarding statutory audits, company filing requirements, and corporate governance.",
      link: "https://www.mca.gov.in",
      icon: <BusinessCenterOutlined />,
    },
    {
      headline: "Income Tax Department",
      description:
        "Access guidelines on tax audit requirements and compliance under section 44AB.",
      link: "https://www.incometaxindia.gov.in",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "Reserve Bank of India",
      description:
        "Guidelines for audits of banks, NBFCs and financial institutions.",
      link: "https://www.rbi.org.in",
      icon: <GavelOutlined />,
    },
    {
      headline: "Comptroller and Auditor General of India",
      description:
        "Standards and methodologies for government and public sector audits.",
      link: "https://cag.gov.in",
      icon: <DescriptionOutlined />,
    },
    {
      headline: "The Institute of Internal Auditors India",
      description:
        "Resources and best practices for internal audit professionals.",
      link: "https://www.iiaindia.org",
      icon: <SchoolOutlined />,
    },
  ],
};
