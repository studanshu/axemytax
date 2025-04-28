import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What clients say about our investment advisory",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Rajiv Khanna",
      duration: "3 months ago",
      comment:
        "“ The capital gains advisory from AxeMyTax saved me over ₹2 lakhs in taxes when selling my property. Their strategic approach to timing the sale and utilizing appropriate exemptions made a significant difference. Their advice was clear, practical, and highly valuable. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Shikha Desai",
      duration: "2 months ago",
      comment:
        "“ I was looking for better returns than bank FDs without taking too much risk. AxeMyTax guided me through various corporate fixed deposit options, helping me select companies with strong credit ratings. I'm now earning 2% more interest with confidence in my investments. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Karan Malhotra",
      duration: "1 month ago",
      comment:
        "“ After years of random investing, I approached AxeMyTax for a structured investment plan. Their comprehensive approach to understanding my goals and risk profile resulted in a diversified portfolio that's performing well even in volatile markets. Their tax optimization strategies have been particularly beneficial. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Priyanka Sharma",
      duration: "4 months ago",
      comment:
        "“ AxeMyTax's investment advisors helped me create a balanced corporate FD portfolio across different companies, giving me better returns than bank deposits while maintaining appropriate risk levels. Their due diligence in selecting companies with strong financial health has given me great peace of mind. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Anand Mehta",
      duration: "2 weeks ago",
      comment:
        "“ The personalized attention I received from AxeMyTax for my investment planning was exceptional. They took time to understand my specific needs and created a strategy that balanced growth with tax efficiency. Regular portfolio reviews keep my investments aligned with changing market conditions. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
  ],
};
