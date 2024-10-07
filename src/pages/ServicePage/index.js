// Material Kit 2 React components

// Self - Created
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";

const ServicePage = ({ jsonData }) => {
  const components = [
    {
      component: lazy(() => import("./Hero")),
      props: { jsonData: jsonData.HeroJson },
    },
    {
      component: lazy(() => import("./SubService")),
      props: { jsonData: jsonData.SubServiceJson },
    },
    {
      component: lazy(() => import("./Testimonial")),
      props: { jsonData: jsonData.TestimonialJson },
    },
    {
      component: lazy(() => import("./WhyUs")),
      props: { jsonData: jsonData.WhyUsJson },
    },
    {
      component: lazy(() => import("./Faq")),
      props: { jsonData: jsonData.FaqJson },
    },
    {
      component: lazy(() => import("./Resources")),
      props: { jsonData: jsonData.ResourcesJson },
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
