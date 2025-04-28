import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What clients say about our specialized services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Vikram Joshi",
      duration: "2 months ago",
      comment:
        "“ AxeMyTax provided exceptional support for our MSME registration. Their thorough understanding of the process and requirements saved us considerable time and effort. The registration was completed smoothly, allowing us to access various government schemes and benefits. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Ananya Patel",
      duration: "3 months ago",
      comment:
        "“ When we needed assistance with FEMA compliance for our international business operations, AxeMyTax delivered expert guidance that was both practical and comprehensive. Their knowledge of cross-border regulations helped us navigate complex requirements with confidence. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Suresh Menon",
      duration: "1 month ago",
      comment:
        "“ The team at AxeMyTax prepared specialized documentation for our unique business structure with remarkable attention to detail. Their ability to understand our specific requirements and translate them into proper legal format was impressive. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Lakshmi Rajan",
      duration: "4 months ago",
      comment:
        "“ We approached AxeMyTax for assistance with a regulatory issue that didn't fit into standard service categories. Their team took time to understand our situation and developed a customized solution that resolved our compliance concerns effectively. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Harish Kumar",
      duration: "2 weeks ago",
      comment:
        "“ As a startup with unique financial structures, we needed specialized advice beyond conventional accounting services. AxeMyTax provided tailored solutions that addressed our specific challenges and set us up for success. Their versatility and expertise are truly valuable. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
