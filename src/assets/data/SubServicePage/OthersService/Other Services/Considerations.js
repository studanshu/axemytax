// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\OthersService\Other Services\Considerations.js
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
        "Initial consultation to understand your specific needs and requirements that fall outside standard service categories",
        "Assessment of the scope, complexity, and specialized expertise required for your unique situation",
        "Custom proposal development with a clearly defined methodology and deliverables",
        "Assignment of subject matter experts best suited to handle your specific requirements",
        "Regular communication throughout the process with a dedicated point of contact",
        "Documentation and report preparation tailored to your specific objectives",
        "Quality review by senior professionals to ensure accuracy and completeness",
        "Implementation support and guidance on utilizing delivered work products",
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
        "Initial assessment and proposal: 2-5 business days depending on complexity",
        "Project execution: Typically 1-4 weeks based on scope and requirements",
        "Basic consultations: ₹2,000 - ₹5,000 per hour of professional time",
        "Standard projects: ₹10,000 - ₹30,000 based on complexity and deliverables",
        "Complex assignments: Custom pricing based on detailed scope assessment",
        "Retainer options: Available for ongoing specialized assistance at preferential rates",
        "Emergency/rush service: Additional 20-50% based on urgency and resource allocation",
        "Note: Exact pricing is determined after initial consultation and scope definition",
      ],
    },
  ],
  buttonText: "Get Consultation",
};
