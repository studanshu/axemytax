import MKBox from "components/MKBox";
import footerRoutes from "footer.routes";
import { lazy, Suspense, FC, ComponentType } from "react";

const renderLoader = () => <></>;

interface BlogOverviewJsonData {
  Overview: Record<string, any>;
  Subscribe: Record<string, any>;
}

interface BlogOverviewProps {
  jsonData: BlogOverviewJsonData;
}

interface ComponentConfig {
  component: ComponentType<any>;
  props: Record<string, any>;
  wrapper?: ComponentType<any>;
  wrapperProps?: Record<string, any>;
}

const BlogOverview: FC<BlogOverviewProps> = ({ jsonData }) => {
  const LazyTopLayout = lazy(() => import("pages/utils/TopLayout"));
  const LazyOverview = lazy(() => import("./Overview"));
  const LazySubscribe = lazy(() => import("./Subscribe"));
  const LazyDefaultFooter = lazy(
    () => import("examples/Footers/DefaultFooter")
  );

  const components: ComponentConfig[] = [
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

export default BlogOverview;
