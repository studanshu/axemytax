import { Rating } from "@mui/material";

export const TestimonialJson = {
  caption: "What clients say about our incorporation services",
  title: "Client Testimonials",
  reviews: [
    {
      name: "Arun Kapoor",
      duration: "2 months ago",
      comment:
        "“ AxeMyTax guided us through the entire process of registering our private limited company. Their team was thorough, knowledgeable, and ensured all compliance requirements were met. Highly recommended for business incorporation! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Meera Joshi",
      duration: "3 months ago",
      comment:
        "“ Setting up an LLP seemed overwhelming until we consulted with AxeMyTax. They simplified the process, handled all documentation, and even helped with post-registration compliance. Their expertise made our business formation journey smooth. ”",
      rating: <Rating name="read-only" value={4.5} precision={0.5} readOnly />,
    },
    {
      name: "Rahul Singhania",
      duration: "1 month ago",
      comment:
        "“ After struggling with partnership registration on our own, we approached AxeMyTax. They drafted a comprehensive partnership deed addressing all our concerns and completed the registration swiftly. Professional service at reasonable rates. ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
    {
      name: "Priya Venkat",
      duration: "4 months ago",
      comment:
        "“ AxeMyTax helped us select the right business structure for our startup. Their clear explanations of different options and implications helped us make an informed decision. The registration process was handled expertly. ”",
      rating: <Rating name="read-only" value={4} precision={0.5} readOnly />,
    },
    {
      name: "Vikram Mehta",
      duration: "2 weeks ago",
      comment:
        "“ As an NRI looking to establish a business in India, the incorporation process seemed daunting. AxeMyTax provided exceptional guidance and handled all regulatory requirements professionally. Exceeded my expectations! ”",
      rating: <Rating name="read-only" value={5} precision={0.5} readOnly />,
    },
  ],
};
