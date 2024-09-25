import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import TopLayout from "pages/utils/TopLayout";
import PropTypes from "prop-types";
import { Suspense } from "react";
import Overview from "./Overview";
import Subscribe from "./Subscribe";
const renderLoader = () => <p>Loading</p>;

const BlogOverview = ({ jsonData }) => {
  console.log(jsonData);
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Overview jsonData={jsonData.Overview} />
      <Subscribe jsonData={jsonData.Subscribe} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </Suspense>
  );
};
BlogOverview.propTypes = {
  jsonData: PropTypes.shape({
    Hero: PropTypes.object.isRequired,
    Overview: PropTypes.object.isRequired,
    Subscribe: PropTypes.object.isRequired,
  }).isRequired,
};

export default BlogOverview;
