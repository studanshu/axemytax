// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS on Purchase of Property from NRI\Considerations.js
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
        "Verification of seller's NRI status through documentation and residential status confirmation",
        "Comprehensive review of property sale agreement to determine exact consideration amount",
        "Obtaining TAN for the buyer if not already registered, as it's mandatory for Section 195 TDS",
        "Accurate calculation of TDS at 20% (plus applicable surcharge and cess)",
        "Assistance with lower TDS rate application under Section 197 if applicable",
        "Preparation and submission of Form 15CA/15CB for reporting foreign remittance",
        "Online deposit of TDS amount with government treasury within specified timeline",
        "Generation and delivery of Form 16A to the NRI seller for their tax credit",
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
        "Initial documentation and verification: 2-3 business days",
        "TAN application (if required): 7-10 business days",
        "TDS calculation and Form 15CA/CB preparation: 1-2 business days",
        "TDS payment deadline: Within 7 days from the end of the month in which payment is made",
        "Form 16A generation: Within 15 days from filing quarterly TDS return",
        "Service charges: ₹5,000 - ₹10,000 based on property value",
        "Additional charge for TAN application: ₹1,500 - ₹2,000",
        "Expedited service option: Additional ₹2,000 - ₹3,000 for urgent processing",
      ],
    },
  ],
  buttonText: "Get Consultation",
};
