import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What clients say about our TDS services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Varun Singh",
      duration: "2 months ago",
      comment:
        "“ AxeMyTax made the TAN registration process incredibly simple for our new business. Their team handled all the paperwork and followed up with the authorities, saving us valuable time and effort. Highly professional service! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Deepika Sharma",
      duration: "3 months ago",
      comment:
        "“ We were struggling with quarterly TDS returns until we found AxeMyTax. Their systematic approach to data organization and filing has eliminated errors and ensured timely submissions. We haven't missed a deadline since! ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Ajay Malhotra",
      duration: "1 month ago",
      comment:
        "“ The team at AxeMyTax provided excellent guidance when we purchased a property and needed to handle TDS. Their step-by-step support with Form 26QB filing and Form 16B generation made the process stress-free. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Nisha Patel",
      duration: "4 months ago",
      comment:
        "“ We had received notices for TDS return discrepancies before approaching AxeMyTax. Their correction return service resolved all issues efficiently, and their preventive measures have kept us compliant since then. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Rajat Verma",
      duration: "2 weeks ago",
      comment:
        "“ As a landlord, receiving Form 16A was always a hassle until my tenant started using AxeMyTax's TDS services. Now I receive accurate certificates on time, making my tax filing process much smoother. I've recommended them to other property owners as well. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
