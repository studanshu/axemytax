// Material Kit 2 React components

// Self - Created
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import Hero from "./Hero";

const SubServicePage = ({ jsonData }) => {
  console.log(jsonData);
  return (
    <>
      <Hero jsonData={jsonData.HeroJson} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};
SubServicePage.propTypes = {
  jsonData: PropTypes.shape({
    HeroJson: PropTypes.object.isRequired,
  }).isRequired,
};

export default SubServicePage;
