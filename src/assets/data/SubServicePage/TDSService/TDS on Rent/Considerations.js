// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS on Rent\Considerations.js
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
        "Assessment of TDS applicability based on the type of rent payment and threshold limits",
        "Verification of rental agreement terms to determine correct TDS category and rate",
        "Assistance with TAN registration for the tenant/payer if not already obtained",
        "Calculation of the correct TDS amount (2% for property rent, 10% for equipment/machinery rent)",
        "Processing of monthly rent TDS deduction and maintenance of records",
        "Timely deposit of TDS with government treasury as per due dates",
        "Filing of quarterly TDS returns (Form 24Q/26Q) to report rent TDS deductions",
        "Generation and timely issuance of Form 16A (TDS certificate) to landlords",
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
        "Initial assessment and documentation: 1-2 business days",
        "Monthly TDS calculation and challan preparation: By 5th of every month",
        "TDS payment deadline: 7th of the following month for each rent payment",
        "Quarterly TDS return filing: By due dates (July 31, Oct 31, Jan 31, May 31)",
        "Form 16A issuance: Within 15 days from the due date of filing TDS return",
        "Basic monthly service: ₹1,500 - ₹2,500 per month",
        "Quarterly compliance package: ₹4,000 - ₹6,000 per quarter",
        "Annual package (all compliances): ₹15,000 - ₹25,000 per year based on transaction volume",
      ],
    },
  ],
  buttonText: "Get Started",
};
