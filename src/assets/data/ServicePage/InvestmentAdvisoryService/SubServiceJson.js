// @mui material icons
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Images
import ctaImage from "assets/images/ServicePage/InvestmentAdvisoryService/sub_service.png";

const iconStyle = {
  color: colors.primary.main,
};

export const SubServiceJson = {
  caption: "Investment Advisory Solutions",
  title: "Our Investment Services",
  cta: {
    "CAPITAL GAINS": {
      image: ctaImage,
      title: "Capital Gains Tax Advisory",
      des: "Expert guidance on optimizing investments to minimize capital gains tax liability while maximizing returns, including strategic planning for asset sales and acquisitions.",
      action: "Learn More",
      content: [
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Tax-Efficient Planning",
          des: "Strategic timing of asset sales to optimize between short-term and long-term capital gains rates.",
        },
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Loss Harvesting",
          des: "Identifying opportunities to offset capital gains with strategic realization of capital losses.",
        },
        {
          icon: <TrendingUpOutlinedIcon sx={iconStyle} />,
          title: "Exemption Utilization",
          des: "Leveraging available exemptions under Sections 54, 54F, and 54EC for property-related gains.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Investment Structuring",
          des: "Designing your investment portfolio with tax-efficiency as a core consideration.",
        },
      ],
    },
    "CREATE CORPORATE FDS": {
      image: ctaImage,
      title: "Corporate Fixed Deposit Advisory",
      des: "Comprehensive assistance in identifying, evaluating, and investing in high-quality corporate fixed deposits with attractive interest rates and appropriate risk profiles.",
      action: "Learn More",
      content: [
        {
          icon: <AssessmentOutlinedIcon sx={iconStyle} />,
          title: "Risk Assessment",
          des: "Thorough evaluation of company credit ratings and financial stability before recommending investments.",
        },
        {
          icon: <CalculateOutlinedIcon sx={iconStyle} />,
          title: "Rate Comparison",
          des: "Analysis of interest rates across various corporate FD options to maximize your returns.",
        },
        {
          icon: <TrendingUpOutlinedIcon sx={iconStyle} />,
          title: "Tenure Optimization",
          des: "Guidance on selecting the most advantageous tenure periods based on your liquidity needs and interest rate trends.",
        },
        {
          icon: <AccountBalanceOutlinedIcon sx={iconStyle} />,
          title: "Diversification Strategy",
          des: "Creating a balanced corporate FD portfolio across different companies and sectors to mitigate risk.",
        },
      ],
    },
  },
};
