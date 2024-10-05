import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
const renderLoader = () => <p></p>;

const About = ({ jsonData }) => {
  const components = {
    Hero: lazy(() => import("./Hero")),
    Mission: lazy(() => import("./Mission")),
    Team: lazy(() => import("./Team")),
    Clients: lazy(() => import("./Clients")),
    Contact: lazy(() => import("./Contact")),
  };

  return (
    <>
      {Object.keys(components).map((key) => {
        const Component = components[key];
        return (
          <Suspense fallback={renderLoader()} key={key}>
            <Component jsonData={jsonData[key]} />
          </Suspense>
        );
      })}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
About.propTypes = {
  jsonData: PropTypes.shape({
    Hero: PropTypes.object.isRequired,
    Mission: PropTypes.object.isRequired,
    Team: PropTypes.object.isRequired,
    Clients: PropTypes.object.isRequired,
    Contact: PropTypes.object.isRequired,
  }).isRequired,
};

export default About;
