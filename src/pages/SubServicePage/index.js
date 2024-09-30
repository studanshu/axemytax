import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { Suspense } from "react";
import Considerations from "./Considerations";
import Contact from "./Contact";
import DocumentChecklist from "./DcoumentChecklist";
import Faq from "./Faq";
import Hero from "./Hero";
import Resources from "./Resources";
const renderLoader = () => <p>Loading</p>;

const SubServicePage = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Hero jsonData={jsonData.Hero} />
      <DocumentChecklist jsonData={jsonData.DocumentChecklist} />
      <Considerations jsonData={jsonData.Considerations} />
      <Resources jsonData={jsonData.Resources} />
      <Faq jsonData={jsonData.Faq} />
      <Contact jsonData={jsonData.Contact} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </Suspense>
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
