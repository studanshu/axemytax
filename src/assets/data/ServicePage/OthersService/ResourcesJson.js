import {
  AccountBalanceOutlined,
  BusinessCenterOutlined,
  GavelOutlined,
  ImportExportOutlined,
  PublicOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful Specialized Resources",
  title: "Additional Business & Financial Resources",
  resources: [
    {
      headline: "Ministry of Corporate Affairs",
      description:
        "Information on various corporate regulatory requirements and filings.",
      link: "https://www.mca.gov.in",
      icon: <BusinessCenterOutlined />,
    },
    {
      headline: "Ministry of MSME",
      description:
        "Resources and guidance for micro, small, and medium enterprises.",
      link: "https://msme.gov.in",
      icon: <SchoolOutlined />,
    },
    {
      headline: "Reserve Bank of India - FEMA",
      description:
        "Regulations and guidelines related to foreign exchange management.",
      link: "https://www.rbi.org.in/scripts/fema.aspx",
      icon: <PublicOutlined />,
    },
    {
      headline: "Directorate General of Foreign Trade",
      description:
        "Resources for export-import regulations and documentation requirements.",
      link: "https://www.dgft.gov.in",
      icon: <ImportExportOutlined />,
    },
    {
      headline: "Ministry of Finance",
      description:
        "Information on various financial policies and regulatory frameworks.",
      link: "https://www.finmin.nic.in",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "NITI Aayog",
      description:
        "Resources for policy frameworks and business development initiatives.",
      link: "https://www.niti.gov.in",
      icon: <GavelOutlined />,
    },
  ],
};
