import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What our clients say about our GST services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Rajesh Sharma",
      duration: "3 months ago",
      comment:
        "“ The GST registration process was so smooth with AxeMyTax. Their team handled everything professionally and got our registration completed within the promised timeframe. Highly recommended! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Priya Mehta",
      duration: "2 months ago",
      comment:
        "“ We were struggling with GST compliance before we found AxeMyTax. Their monthly filing service has taken a huge burden off our shoulders. Their team is knowledgeable and always available for queries. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Vijay Patel",
      duration: "1 month ago",
      comment:
        "“ The GST audit service provided by AxeMyTax was excellent. They identified several areas where we could optimize our tax position and helped us become fully compliant. Very professional approach! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Kavita Singh",
      duration: "3 weeks ago",
      comment:
        "“ Their GST filing service is reliable and cost-effective. We never miss a deadline now and their reconciliation process has helped us claim all eligible input tax credits. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Amit Joshi",
      duration: "1 week ago",
      comment:
        "“ We faced some challenges with GST registration due to our complex business structure, but AxeMyTax guided us through the entire process with expertise. Great service at reasonable rates! ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
