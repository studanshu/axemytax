import {
  AccountBalanceOutlined,
  BusinessCenterOutlined,
  CorporateFareOutlined,
  GavelOutlined,
  MonetizationOnOutlined,
  ReceiptOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful Business Registration Resources",
  title: "Official Business Incorporation Resources",
  resources: [
    {
      headline: "Ministry of Corporate Affairs (MCA)",
      description:
        "Official portal for company registration, filings, and compliance in India.",
      link: "https://www.mca.gov.in",
      icon: <CorporateFareOutlined />,
    },
    {
      headline: "Registrar of Companies (ROC)",
      description:
        "Government body responsible for registering companies and LLPs in India.",
      link: "https://www.mca.gov.in/MinistryV2/registrarofcompanies.html",
      icon: <BusinessCenterOutlined />,
    },
    {
      headline: "MSME Registration Portal",
      description:
        "Official portal for registering as a Micro, Small, or Medium Enterprise in India.",
      link: "https://udyamregistration.gov.in",
      icon: <ReceiptOutlined />,
    },
    {
      headline: "Income Tax Department",
      description:
        "For PAN and TAN registration required for business incorporation.",
      link: "https://www.incometaxindia.gov.in",
      icon: <MonetizationOnOutlined />,
    },
    {
      headline: "GST Portal",
      description:
        "For GST registration after business incorporation.",
      link: "https://www.gst.gov.in",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "Startup India",
      description:
        "Government initiative providing resources and benefits for startups in India.",
      link: "https://www.startupindia.gov.in",
      icon: <GavelOutlined />,
    },
  ],
};
