// Self - Created
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";

import  {HeroJson}  from "assets/data/ServicePage/HeroJson";
import  {SubServiceJson}  from "assets/data/ServicePage/SubServiceJson";
import  {TestimonialJson}  from "assets/data/ServicePage/TestimonialJson";
import  {WhyUsJson}  from "assets/data/ServicePage/WhyUsJson";
import  {FaqJson}  from "assets/data/ServicePage/FaqJson"; 
import  {ResourcesJson}  from "assets/data/ServicePage/ResourcesJson";

const ServicePage = ({ jsonData }) => {
  const components = [
    {
      component: lazy(() => import("./Hero")),
      props: { jsonData: jsonData.HeroJson || HeroJson },
    },
    {
      component: lazy(() => import("./SubService")),
      props: { jsonData: jsonData.SubServiceJson || SubServiceJson },
    },
    {
      component: lazy(() => import("./Testimonial")),
      props: { jsonData: jsonData.TestimonialJson || TestimonialJson },
    },
    {
      component: lazy(() => import("./WhyUs")),
      props: { jsonData: jsonData.WhyUsJson || WhyUsJson },
    },
    {
      component: lazy(() => import("./Faq")),
      props: { jsonData: jsonData.FaqJson || FaqJson },
    },
    {
      component: lazy(() => import("./Resources")),
      props: { jsonData: jsonData.ResourcesJson || ResourcesJson },
    },
  ];

  return (
    <>
      {components.map(({ component: Component, props }, index) => (
        <Suspense key={index}>
          <Component {...props} />
        </Suspense>
      ))}
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
