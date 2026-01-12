import BlogContentMap from "assets/data/Blog/BlogPage/index";
import { DefaultSubscribeJson } from "assets/data/Blog/BlogPage/DefaultSubscribeJson";
import MKBox from "components/MKBox";
import footerRoutes from "footer.routes";
import PageContextProvider from "providers/PageContextProvider";
import React, { lazy, Suspense, FC, LazyExoticComponent } from "react";
import { useParams } from "react-router-dom";

interface ComponentConfig {
  component: LazyExoticComponent<FC<any>>;
  props: Record<string, any>;
  wrapper?: React.ComponentType<any>;
  wrapperProps?: Record<string, any>;
}

interface BlogData {
  [key: string]: any;
  relatedBlogs?: any[];
}

const renderLoader = () => <></>;

const flatten = (dict: Record<string, any> | undefined, contentId: string): any[] => {
  if (!dict) return [];
  
  const filteredEntries = Object.entries(dict)
    .filter(([key]) => key !== contentId)
    .flatMap(([, value]) => value);

  return filteredEntries.length > 5
    ? filteredEntries.sort(() => 0.5 - Math.random()).slice(0, 5)
    : filteredEntries;
};

const BlogContent: FC = () => {
  const params = useParams();
  const category = (params as any).category || "";
  const relatedType = (params as any).relatedType || "";
  const contentId = (params as any).contentId || "";

  const relatedBlogs = React.useMemo(
    () =>
      flatten(
        (BlogContentMap as any)[category]?.[relatedType],
        contentId
      ),
    [category, relatedType, contentId]
  );

  const contentData: BlogData = {
    ...((BlogContentMap as any)[category]?.[relatedType]?.[contentId] || {}),
    relatedBlogs,
  };

  const components: ComponentConfig[] = [
    { component: lazy(() => import("pages/utils/TopLayout")), props: {} },
    {
      component: lazy(() => import("./Content")),
      props: { jsonData: contentData },
    },
    {
      component: lazy(() => import("./Subscribe")),
      props: { jsonData: DefaultSubscribeJson },
    },
    {
      component: lazy(() => import("examples/Footers/DefaultFooter")),
      props: { content: footerRoutes },
      wrapper: MKBox,
      wrapperProps: { pt: 6, px: 1, mt: 6 },
    },
  ];

  return (
    <PageContextProvider
      dict={{ name: `${category}-${relatedType}-${contentId}` }}
    >
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
    </PageContextProvider>
  );
};

export default BlogContent;
