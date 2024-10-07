import MKBox from "components/MKBox";
import footerRoutes from "footer.routes";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
const renderLoader = () => <></>;

const BlogOverview = ({ jsonData }) => {
  const LazyTopLayout = lazy(() => import("pages/utils/TopLayout"));
  const LazyOverview = lazy(() => import("./Overview"));
  const LazySubscribe = lazy(() => import("./Subscribe"));
  const LazyDefaultFooter = lazy(
    () => import("examples/Footers/DefaultFooter")
  );

  const components = [
    { component: LazyTopLayout, props: {} },
    { component: LazyOverview, props: { jsonData: jsonData.Overview } },
    { component: LazySubscribe, props: { jsonData: jsonData.Subscribe } },
    {
      component: LazyDefaultFooter,
      props: { content: footerRoutes },
      wrapper: MKBox,
      wrapperProps: { pt: 6, px: 1, mt: 6 },
    },
  ];

  return (
    <>
      {components.map(
        (
          { component: Component, props, wrapper: Wrapper, wrapperProps },
          index
        ) => (
          <Suspense key={index} fallback={renderLoader()}>
            {Wrapper ? (
              <Wrapper {...wrapperProps}>
                <Component {...props} />
              </Wrapper>
            ) : (
              <Component {...props} />
            )}
          </Suspense>
        )
      )}
    </>
  );
};
BlogOverview.propTypes = {
  jsonData: PropTypes.shape({
    Overview: PropTypes.object.isRequired,
    Subscribe: PropTypes.object.isRequired,
  }).isRequired,
};

export default BlogOverview;
