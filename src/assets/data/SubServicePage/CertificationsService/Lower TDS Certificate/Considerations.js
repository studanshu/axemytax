// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\Lower TDS Certificate\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: AssignmentOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "We assess your income scenario and determine eligibility for lower TDS certificate.",
        "Our experts prepare Form 13 with accurate income projections and tax calculations.",
        "We compile all required supporting documents and evidence.",
        "Our team submits the application to the Income Tax department and follows up regularly.",
        "Upon approval, we assist in distributing certificates to your deductors.",
        "We provide ongoing support throughout the validity period of the certificate.",
      ],
    },
    {
      leftIcon: PendingActionsOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Timeline & Charges",
      bullets: [
        "Processing time: 10-20 working days from document submission to certificate issuance.",
        "Expedited services available for urgent requirements.",
        "Basic service charges start at ₹3,500 for individuals and ₹5,500 for businesses.",
        "Complex cases with multiple income sources or high-value transactions may incur additional charges.",
        "Renewal services with discounted rates available for returning clients.",
        "Transparent fee structure with no hidden charges.",
      ],
    },
  ],
  buttonText: "Apply Now",
};
