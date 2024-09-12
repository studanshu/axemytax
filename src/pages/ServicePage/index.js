// Material Kit 2 React components

// Self - Created
import Faq from "./Faq";
import Hero from "./Hero";
import SubService from "./SubService";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

export default function ServicePage() {
  return (
    <>
      <Hero />
      <SubService />
      <Testimonial />
      <WhyUs />
      <Faq />
      {/* <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.5),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { info } }) => info,
        }}
      ></Card> */}
      {/* <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox> */}
    </>
  );
}
