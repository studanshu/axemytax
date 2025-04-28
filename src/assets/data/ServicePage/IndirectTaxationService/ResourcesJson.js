import {
  AccountBalanceOutlined,
  ArticleOutlined,
  CalculateOutlined,
  GavelOutlined,
  ImportExportOutlined,
  SchoolOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful GST Resources",
  title: "Official GST Resources",
  resources: [
    {
      headline: "GST Portal",
      description:
        "Official GST portal for registration, return filing, payment, and other GST-related services.",
      link: "https://www.gst.gov.in",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "GST Rates Finder App",
      description:
        "Official app to search for applicable GST rates for different goods and services.",
      link: "https://cbic-gst.gov.in/gst-goods-services-rates.html",
      icon: <CalculateOutlined />,
    },
    {
      headline: "Central Board of Indirect Taxes and Customs",
      description:
        "Access circulars, notifications, and latest updates on GST and other indirect taxes.",
      link: "https://www.cbic.gov.in",
      icon: <GavelOutlined />,
    },
    {
      headline: "GST Council",
      description:
        "Information about GST Council meetings, decisions, and policy updates.",
      link: "https://gstcouncil.gov.in",
      icon: <ImportExportOutlined />,
    },
    {
      headline: "GST E-Invoice System",
      description:
        "Portal for generation and management of e-invoices under GST.",
      link: "https://einvoice1.gst.gov.in",
      icon: <ArticleOutlined />,
    },
    {
      headline: "National Academy of Customs, Indirect Taxes and Narcotics",
      description:
        "Educational resources and publications on indirect taxation.",
      link: "https://www.nacin.gov.in",
      icon: <SchoolOutlined />,
    },
  ],
};
