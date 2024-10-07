import {
  AccountBalanceOutlined,
  AccountBalanceWalletOutlined,
  AirportShuttleOutlined,
  GavelOutlined,
  LanOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Still unsure where to start",
  title: "Check Out Government Resources",
  resources: [
    {
      headline: "Income Tax Department",
      description:
        "Find information on income tax rules, regulations, and filing procedures.",
      link: "https://www.incometaxindia.gov.in",
      icon: <AccountBalanceWalletOutlined />,
    },
    {
      headline: "Goods and Services Tax",
      description:
        "Access resources and updates on GST policies, rates, and compliance.",
      link: "https://www.gst.gov.in",
      icon: <AirportShuttleOutlined />,
    },
    {
      headline: "Ministry of Corporate Affairs",
      description:
        "Explore corporate laws, regulations, and services provided by the Ministry of Corporate Affairs on their official website.",
      link: "https://www.mca.gov.in",
      icon: <GavelOutlined />,
    },
    {
      headline: "Central Board of Indirect Taxes and Customs",
      description:
        "Get information on indirect taxes, customs regulations, and related services.",
      link: "https://www.cbic.gov.in",
      icon: <LanOutlined />,
    },
    {
      headline: "Securities and Exchange Board of India",
      description:
        "Learn about securities market regulations, investor protection, and market development.",
      link: "https://www.sebi.gov.in",
      icon: <ShowChartOutlined />,
    },
    {
      headline: "Reserve Bank of India",
      description:
        "Access information on monetary policy, banking regulations, and financial stability.",
      link: "https://www.rbi.org.in",
      icon: <AccountBalanceOutlined />,
    },
  ],
};
