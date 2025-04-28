import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What clients say about our digital signature services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Vivek Mehta",
      duration: "2 months ago",
      comment:
        "“ The domestic DSC provided by AxeMyTax has made our MCA filings so much easier. The application process was smooth, and they guided us through each step. We received our certificate within just one day of document submission! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Anita Gupta",
      duration: "3 months ago",
      comment:
        "“ We needed international DSCs for our export business. AxeMyTax not only provided the certificates promptly but also helped us understand how to use them for various international platforms. Their support team has been exceptional. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Prakash Shah",
      duration: "1 month ago",
      comment:
        "“ As a CA firm, we need multiple DSCs for various client filings. AxeMyTax has been our trusted partner for over two years. Their 3-year validity certificates have proven cost-effective, and their technical support for installation issues is always helpful. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Ritu Bajaj",
      duration: "4 months ago",
      comment:
        "“ I was struggling with e-tendering requirements until I got my Class 3 DSC from AxeMyTax. Their team explained the different certificate types and helped me choose the right one. The entire process was hassle-free. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Mohan Krishnan",
      duration: "2 weeks ago",
      comment:
        "“ When my previous DSC expired, I needed an urgent replacement for tax filing. AxeMyTax delivered an express service that saved me from missing critical deadlines. Their after-sales support for installation on my new laptop was excellent too. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
