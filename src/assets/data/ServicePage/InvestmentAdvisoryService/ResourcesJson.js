import {
  AccountBalanceOutlined,
  TrendingUpOutlined,
  BusinessCenterOutlined,
  SecurityOutlined,
  AnalyticsOutlined,
  AttachMoneyOutlined,
} from "@mui/icons-material";

export const ResourcesJson = {
  caption: "Helpful Investment Resources",
  title: "Investment Advisory Resources",
  resources: [
    {
      headline: "Securities and Exchange Board of India (SEBI)",
      description:
        "Regulatory framework, investor protection guidelines, and registered advisor information.",
      link: "https://www.sebi.gov.in",
      icon: <SecurityOutlined />,
    },
    {
      headline: "National Stock Exchange of India (NSE)",
      description:
        "Market data, investment products, and educational resources for equity investments.",
      link: "https://www.nseindia.com",
      icon: <TrendingUpOutlined />,
    },
    {
      headline: "Association of Mutual Funds in India (AMFI)",
      description:
        "Information on mutual funds, NAVs, and investor education materials.",
      link: "https://www.amfiindia.com",
      icon: <BusinessCenterOutlined />,
    },
    {
      headline: "Income Tax Department - Capital Gains",
      description:
        "Official guidance on taxation of various investment returns and capital gains.",
      link: "https://www.incometaxindia.gov.in/Pages/tax-services/capital-gains.aspx",
      icon: <AccountBalanceOutlined />,
    },
    {
      headline: "Reserve Bank of India - Fixed Deposits",
      description:
        "Regulations and guidelines related to bank and corporate fixed deposits.",
      link: "https://www.rbi.org.in",
      icon: <AttachMoneyOutlined />,
    },
    {
      headline: "Investor Education and Protection Fund (IEPF)",
      description:
        "Resources for investor education, awareness, and protection from frauds.",
      link: "https://www.iepf.gov.in",
      icon: <AnalyticsOutlined />,
    },
  ],
};
