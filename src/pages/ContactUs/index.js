// Material Kit 2 React components

// Self - Created
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import ContactDetails from "./ContactDetails";
import ContactField from "./ContactField";

const ContactUs = ({ jsonData }) => {
  return (
    <>
      <ContactField jsonData={jsonData.Field} />
      <ContactDetails jsonData={jsonData.Details} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
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
