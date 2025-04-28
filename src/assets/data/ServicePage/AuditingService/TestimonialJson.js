import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What clients say about our audit services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Sanjay Goyal",
      duration: "2 months ago",
      comment:
        "“ The statutory audit conducted by AxeMyTax was thorough and professional. Their team identified several areas for improvement in our financial reporting process that have been invaluable. Highly recommend their services! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Neha Sharma",
      duration: "3 months ago",
      comment:
        "“ We've been using AxeMyTax for our tax audit requirements for three years now. Their attention to detail and knowledge of tax regulations has helped us maintain perfect compliance while optimizing our tax position. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Ramesh Kapoor",
      duration: "1 month ago",
      comment:
        "“ The stock audit services provided by AxeMyTax transformed our inventory management. Their methodical approach identified discrepancies we had missed for years and provided practical solutions for better inventory control. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Anita Desai",
      duration: "4 months ago",
      comment:
        "“ We engaged AxeMyTax for internal audit when our company was scaling rapidly. Their structured approach and insightful recommendations helped us establish robust internal controls during a critical growth phase. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Vimal Agarwal",
      duration: "2 weeks ago",
      comment:
        "“ The fixed asset verification conducted by AxeMyTax was extremely detailed and well-organized. They not only verified our assets but also helped us optimize our asset register and depreciation calculations. Worth every rupee! ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
