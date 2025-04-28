import {
  SecurityOutlined,
  GavelOutlined,
  BusinessCenterOutlined,
  VerifiedUserOutlined,
  AccountBalanceOutlined,
  ComputerOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful Digital Signature Resources",
  title: "Official DSC Resources & References",
  resources: [
    {
      headline: "Controller of Certifying Authorities (CCA)",
      description:
        "Official regulatory body for digital signatures and certifying authorities in India.",
      link: "http://www.cca.gov.in",
      icon: <GavelOutlined />,
    },
    {
      headline: "Ministry of Corporate Affairs (MCA)",
      description:
        "Information on DSC requirements for company registrations and filings.",
      link: "https://www.mca.gov.in",
      icon: <BusinessCenterOutlined />,
    },
    {
      headline: "Income Tax Department",
      description:
        "Guidelines on digital signature usage for income tax return filing.",
      link: "https://www.incometaxindia.gov.in",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "CERT-In (Indian Computer Emergency Response Team)",
      description:
        "Information on digital security practices and certificate handling.",
      link: "https://www.cert-in.org.in",
      icon: <SecurityOutlined />,
    },
    {
      headline: "eMudhra Certification Services",
      description:
        "Leading Certifying Authority providing digital signature certificates in India.",
      link: "https://www.emudhra.com",
      icon: <VerifiedUserOutlined />,
    },
    {
      headline: "National Informatics Centre (NIC)",
      description:
        "Government portal with resources on e-governance and digital authentication.",
      link: "https://www.nic.in",
      icon: <ComputerOutlined />,
    },
  ],
};
