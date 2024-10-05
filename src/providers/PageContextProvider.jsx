import PropTypes from "prop-types";

const { PageContext } = require("./Context");

const PageContextProvider = ({ dict, children }) => {
  return <PageContext.Provider value={dict}>{children}</PageContext.Provider>;
};

PageContextProvider.propTypes = {
  dict: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default PageContextProvider;
