import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import TopLayout from "pages/utils/TopLayout";
import PropTypes from "prop-types";
import { Suspense } from "react";
import Content from "./Content";
import Subscribe from "./Subscribe";
const renderLoader = () => <p>Loading</p>;

const BlogContent = ({ jsonData }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Content jsonData={jsonData.Content} />
      <Subscribe jsonData={jsonData.Subscribe} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </Suspense>
  );
};
BlogContent.propTypes = {
  jsonData: PropTypes.shape({
    Content: PropTypes.object.isRequired,
    Subscribe: PropTypes.object.isRequired,
  }).isRequired,
};

export default BlogContent;
