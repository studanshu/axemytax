import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What clients say about our certification services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Sunil Kapoor",
      duration: "2 months ago",
      comment:
        "“ AxeMyTax helped me obtain a Lower TDS Certificate quickly and efficiently. Their team guided me through the entire process, from documentation to follow-ups with tax authorities. The certificate has significantly improved my cash flow situation. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Meena Agarwal",
      duration: "3 months ago",
      comment:
        "“ We needed repatriation certificates for several international transactions. The team at AxeMyTax provided expert guidance on Form 15CA/15CB requirements and ensured compliance with all FEMA regulations. Their prompt service saved us from potential regulatory issues. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Vikas Malhotra",
      duration: "1 month ago",
      comment:
        "“ The house property certificate prepared by AxeMyTax was thorough and professional. Their valuation methodology was transparent, and they considered all relevant factors. The certificate was accepted without question by our bank for mortgage refinancing. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Leela Reddy",
      duration: "4 months ago",
      comment:
        "“ I required a net worth certificate for visa application purposes. AxeMyTax prepared a comprehensive document that clearly presented my financial position. Their attention to detail and professional presentation made the visa application process smooth. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Rajan Desai",
      duration: "2 weeks ago",
      comment:
        "“ We've used AxeMyTax for various attestation services over the past year. Their team consistently provides accurate, reliable certifications that meet all regulatory requirements. Their expertise has been invaluable for our company's compliance needs. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
