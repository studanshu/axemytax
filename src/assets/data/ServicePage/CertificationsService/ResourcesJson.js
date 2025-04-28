import {
  AccountBalanceOutlined,
  ApartmentOutlined,
  DescriptionOutlined,
  GavelOutlined,
  ImportExportOutlined,
  PublicOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful Certification Resources",
  title: "Official Certification Resources",
  resources: [
    {
      headline: "Income Tax Department",
      description:
        "Official portal for Lower TDS Certificate applications and tax-related certifications.",
      link: "https://www.incometaxindia.gov.in",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "Reserve Bank of India",
      description:
        "Guidelines and regulations related to foreign remittances and repatriation certificates.",
      link: "https://www.rbi.org.in",
      icon: <ImportExportOutlined />,
    },
    {
      headline: "Ministry of Housing and Urban Affairs",
      description:
        "Resources related to property valuation and house property certificates.",
      link: "https://mohua.gov.in",
      icon: <ApartmentOutlined />,
    },
    {
      headline: "Institute of Chartered Accountants of India",
      description:
        "Standards and guidelines for certification and attestation services.",
      link: "https://www.icai.org",
      icon: <DescriptionOutlined />,
    },
    {
      headline: "Ministry of Corporate Affairs",
      description:
        "Information on company-related certifications and corporate compliance.",
      link: "https://www.mca.gov.in",
      icon: <GavelOutlined />,
    },
    {
      headline: "Foreign Exchange Management Act (FEMA) Guidelines",
      description:
        "Regulations and resources pertaining to foreign exchange transactions and certifications.",
      link: "https://www.rbi.org.in/Scripts/Fema.aspx",
      icon: <PublicOutlined />,
    },
  ],
};
