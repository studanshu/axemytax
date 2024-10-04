import DefaultFormFields from "assets/data/Form/DefaultFormFields";
import PropTypes from "prop-types";

const { ServiceContext } = require("./Context");

const SERVICE_FIELD = "service";
const OPTIONS_FIELD = "options";

const ServiceContextProvider = ({ dict, children }) => {
  console.log("Service Context Provider", dict);
  return (
    <ServiceContext.Provider value={dict}>{children}</ServiceContext.Provider>
  );
};

ServiceContextProvider.propTypes = {
  dict: PropTypes.instanceOf({
    name: PropTypes.oneOf(
      Object.keys(DefaultFormFields[SERVICE_FIELD][OPTIONS_FIELD]).isRequired
    ),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default ServiceContextProvider;
