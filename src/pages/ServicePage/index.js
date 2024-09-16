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

const ServicePage = ({ jsonData }) => {
  return (
    <>
      <Hero jsonData={jsonData.HeroJson} />
      <SubService jsonData={jsonData.SubServiceJson} />
      <Testimonial jsonData={jsonData.TestimonialJson} />
      <WhyUs jsonData={jsonData.WhyUsJson} />
      <Faq jsonData={jsonData.FaqJson} />
      <Resources jsonData={jsonData.ResourcesJson} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
ServicePage.propTypes = {
  jsonData: PropTypes.shape({
    HeroJson: PropTypes.object.isRequired,
    SubServiceJson: PropTypes.object.isRequired,
    TestimonialJson: PropTypes.object.isRequired,
    WhyUsJson: PropTypes.object.isRequired,
    FaqJson: PropTypes.object.isRequired,
    ResourcesJson: PropTypes.object.isRequired,
  }).isRequired,
};

export default ServicePage;
