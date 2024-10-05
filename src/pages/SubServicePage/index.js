import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
const renderLoader = () => <></>;

const SubServicePage = ({ jsonData }) => {
  const components = [
    {
      component: lazy(() => import("./Hero")),
      props: { jsonData: jsonData.Hero },
    },
    {
      component: lazy(() => import("./DocumentChecklist")),
      props: { jsonData: jsonData.DocumentChecklist },
    },
    {
      component: lazy(() => import("./Considerations")),
      props: { jsonData: jsonData.Considerations },
    },
    {
      component: lazy(() => import("./Resources")),
      props: { jsonData: jsonData.Resources },
    },
    {
      component: lazy(() => import("./Faq")),
      props: { jsonData: jsonData.Faq },
    },
    {
      component: lazy(() => import("./Contact")),
      props: { jsonData: jsonData.Contact },
    },
  ];

  return (
    <>
      {components.map(({ component: Component, props }, index) => (
        <Suspense key={index} fallback={renderLoader()}>
          <Component {...props} />
        </Suspense>
      ))}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
SubServicePage.propTypes = {
  jsonData: PropTypes.shape({
    Hero: PropTypes.object.isRequired,
    DocumentChecklist: PropTypes.object.isRequired,
    Considerations: PropTypes.object.isRequired,
    Resources: PropTypes.object.isRequired,
    Faq: PropTypes.object.isRequired,
    Contact: PropTypes.object.isRequired,
  }).isRequired,
};

export default SubServicePage;
