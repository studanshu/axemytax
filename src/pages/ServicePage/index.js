// Material Kit 2 React components

// Self - Created
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import Faq from "./Faq";
import Hero from "./Hero";
import { Resources } from "./Resources";
import SubService from "./SubService";
import Testimonial from "./Testimonial";
import WhyUs from "./WhyUs";

const ServicePage = ({ ServiceSpecificJson }) => {
  return (
    <>
      <Hero jsonData={ServiceSpecificJson.HeroJson} />
      <SubService jsonData={ServiceSpecificJson.SubServiceJson} />
      <Testimonial jsonData={ServiceSpecificJson.TestimonialJson} />
      <WhyUs jsonData={ServiceSpecificJson.WhyUsJson} />
      <Faq jsonData={ServiceSpecificJson.FaqJson} />
      <Resources jsonData={ServiceSpecificJson.ResourcesJson} />
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
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
ServicePage.propTypes = {
  ServiceSpecificJson: PropTypes.shape({
    HeroJson: PropTypes.object.isRequired,
    SubServiceJson: PropTypes.object.isRequired,
    TestimonialJson: PropTypes.object.isRequired,
    WhyUsJson: PropTypes.object.isRequired,
    FaqJson: PropTypes.object.isRequired,
    ResourcesJson: PropTypes.object.isRequired,
  }).isRequired,
};

export default ServicePage;
