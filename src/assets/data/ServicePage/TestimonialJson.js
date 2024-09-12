// @mui material components
import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "Reviews on Google",
  title: "What Do Clients Say About Us?",
  reviews: [
    {
      name: "Sumeeet Gupta",
      duration: "1 day ago",
      comment:
        "“ Hemanshu has great knowledge and understanding about the returns and technical matters. He was extremely helpful in filing up the return. Great work. Keep going.!”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Arijit Khemka",
      duration: "7 hours ago",
      comment:
        "“ Very prompt and responsive. Helped me file my revised returns on the last day. Highly recommended. Looking forward to file this year’s returns as well. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Kunal Mukhtar",
      duration: "19 mins ago",
      comment:
        "“ Very prompt and responsive. Helped me file my revised returns on the last day. Highly recommended. Looking forward to file this year’s returns as well. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Sumeeet Gupta 1",
      duration: "1 day ago",
      comment:
        "“ Hemanshu has great knowledge and understanding about the returns and technical matters. He was extremely helpful in filing up the return. Great work. Keep going. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Arijit Khemka 1",
      duration: "7 hours ago",
      comment:
        "“ Very prompt and responsive. Helped me file my revised returns on the last day. Highly recommended. Looking forward to file this year’s returns as well. ”",
      rating: <Rating name="read-only" value={3} precision={0.5} readOnly />,
    },
    {
      name: "Kunal Mukhtar 1",
      duration: "19 mins ago",
      comment:
        "“ Very prompt and responsive. Helped me file my revised returns on the last day. Highly recommended. Looking forward to file this year’s returns as well. ”",
      rating: <Rating name="read-only" value={3.5} precision={0.5} readOnly />,
    },
  ],
};
