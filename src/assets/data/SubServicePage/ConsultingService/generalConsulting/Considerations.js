// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\ConsultingService\generalConsulting\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: FactCheckOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "Initial discovery session to thoroughly understand your specific challenges and objectives",
        "Comprehensive situation analysis using established frameworks and industry benchmarks",
        "Collaborative problem-solving sessions with experienced domain specialists",
        "Development of personalized action plans with clear implementation steps",
        "Regular progress reviews to ensure solutions remain effective and relevant",
        "Knowledge transfer sessions to build your team's capabilities",
        "Ongoing support during implementation phase to navigate any challenges",
        "Post-implementation evaluation to measure effectiveness and refine strategies",
      ],
    },
    {
      leftIcon: AccessTimeOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Timeline & Charges",
      bullets: [
        "Initial consultation (1-2 hours): Complimentary",
        "Problem diagnosis phase: 1-2 weeks depending on complexity",
        "Solution development: 2-4 weeks based on scope and urgency",
        "Implementation support: Typically 1-3 months for comprehensive engagements",
        "Basic consulting package: ₹15,000 - ₹30,000 for focused issue resolution",
        "Standard consulting package: ₹30,000 - ₹75,000 for moderate complexity challenges",
        "Premium consulting package: ₹75,000+ for comprehensive business transformation",
        "Specialized industry consulting and retainer arrangements available on request",
      ],
    },
  ],
  buttonText: "Get Started",
};
