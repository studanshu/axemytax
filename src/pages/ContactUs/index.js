// Material Kit 2 React components

// Self - Created
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { Suspense, lazy } from "react";

const ContactUs = ({ jsonData }) => {
  const components = [
    {
      component: lazy(() => import("./ContactField")),
      props: { jsonData: jsonData.Field },
    },
    {
      component: lazy(() => import("./ContactDetails")),
      props: { jsonData: jsonData.Details },
    },
    {
      component: DefaultFooter,
      props: { content: footerRoutes },
      wrapper: MKBox,
      wrapperProps: { pt: 6, px: 1, mt: 6 },
    },
  ];

  return (
    <>
      {components.map(
        (
          { component: Component, props, wrapper: Wrapper, wrapperProps },
          index
        ) => (
          <Suspense key={index} fallback={<></>}>
            {Wrapper ? (
              <Wrapper {...wrapperProps}>
                <Component {...props} />
              </Wrapper>
            ) : (
              <Component {...props} />
            )}
          </Suspense>
        )
      )}
    </>
  );
};
ContactUs.propTypes = {
  jsonData: PropTypes.shape({
    Field: PropTypes.object.isRequired,
    Details: PropTypes.object.isRequired,
  }).isRequired,
};

export default ContactUs;
