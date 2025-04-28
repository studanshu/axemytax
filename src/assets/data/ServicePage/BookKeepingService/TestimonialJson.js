import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What our clients say about our bookkeeping services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Rahul Khanna",
      duration: "3 months ago",
      comment:
        "“ Outsourcing our bookkeeping to AxeMyTax has been one of the best business decisions we've made. Their team is thorough, responsive, and has streamlined our financial record-keeping completely. Highly recommended for small businesses! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Sneha Patel",
      duration: "2 months ago",
      comment:
        "“ As a startup founder, I was struggling to manage finances alongside operations. AxeMyTax took over our bookkeeping, organizing our transactions and providing monthly reports that help me understand our financial position clearly. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Vikrant Mehta",
      duration: "1 month ago",
      comment:
        "“ The bookkeeping team at AxeMyTax has been exceptional at handling our financial records. Their attention to detail caught several discrepancies that would have caused issues during tax filing. Their service is worth every rupee. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Priya Sharma",
      duration: "4 months ago",
      comment:
        "“ We've been using AxeMyTax's bookkeeping services for our retail business for over a year. Their team maintains accurate records, provides timely reports, and has made tax season so much less stressful for us. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Arjun Singh",
      duration: "2 weeks ago",
      comment:
        "“ Their bookkeeping service is efficient and reliable. Having organized financial records has helped us secure business loans and make informed expansion decisions. The team is professional and always available for questions. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
