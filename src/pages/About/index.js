import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { Suspense } from "react";
import Clients from "./Clients";
import Contact from "./Contact";
import Hero from "./Hero";
import Mission from "./Mission";
import Team from "./Team";
const renderLoader = () => <p>Loading</p>;

const About = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Hero jsonData={jsonData.Hero} />
      <Mission jsonData={jsonData.Mission} />
      <Team jsonData={jsonData.Team} />
      <Clients jsonData={jsonData.Clients} />
      <Contact jsonData={jsonData.Contact} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </Suspense>
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
