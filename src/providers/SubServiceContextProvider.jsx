/* eslint-disable react/prop-types */
import DefaultFormFields from "assets/data/Form/DefaultFormFields";
import PropTypes from "prop-types";
import { SubServiceContext } from "./Context";

const SERVICE_FIELD = "service";
const OPTIONS_FIELD = "options";

const SubServiceContextProvider = ({ dict, children }) => {
  const { serviceName, name } = dict;

  if (
    !Object.keys(DefaultFormFields[SERVICE_FIELD][OPTIONS_FIELD]).includes(
      serviceName
    )
  ) {
    throw new Error("Service name is not valid");
  }
  if (
    !DefaultFormFields[SERVICE_FIELD][OPTIONS_FIELD][serviceName][
      OPTIONS_FIELD
    ].includes(name)
  ) {
    throw new Error("Sub-Service name is not valid");
  }

  return (
    <SubServiceContext.Provider value={dict}>
      {children}
    </SubServiceContext.Provider>
  );
};

SubServiceContextProvider.propTypes = {
  dict: PropTypes.shape({
    serviceName: PropTypes.oneOf(
      Object.keys(DefaultFormFields[SERVICE_FIELD][OPTIONS_FIELD])
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default SubServiceContextProvider;
