// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\CertificationsService\Other Attestations\Considerations.js
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  SendOutlined,
} from "@mui/icons-material";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

export const Considerations = {
  caption: "Key Focus Areas",
  title: "Essential Considerations",
  considerationList: [
    {
      leftIcon: VerifiedOutlinedIcon,
      rightOpenIcon: [SendOutlined, KeyboardArrowUpOutlined],
      rightCloseIcon: [SendOutlined, KeyboardArrowDownOutlined],
      leftIconColor: "primary",
      rightIconColor: "secondary",
      heading: "Our Approach",
      bullets: [
        "We conduct thorough verification of all documents requiring attestation or certification.",
        "Our chartered accountants analyze each document according to relevant accounting and legal standards.",
        "We ensure adherence to specific attestation requirements based on the purpose and receiving authority.",
        "We authenticate documents with official seals, signatures, and unique attestation numbers.",
        "We maintain confidentiality while providing professional credibility to your financial documents.",
        "We offer guidance on format requirements for different regulatory bodies and institutions.",
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
        "Standard processing time: 1-3 working days depending on document complexity.",
        "Express service available within 24 hours for urgent requirements (additional charges apply).",
        "Basic financial statement attestation: ₹1,500-3,000 based on document size and scope.",
        "Balance confirmation certificates: ₹1,000-2,000 per certificate.",
        "Specialized certificates (including capital contribution, turnover): ₹2,000-5,000.",
        "Volume discounts available for businesses requiring multiple attestations.",
      ],
    },
  ],
  buttonText: "Request Attestation",
};
