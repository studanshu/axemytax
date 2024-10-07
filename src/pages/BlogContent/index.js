import BlogContentMap from "assets/data/Blog/BlogPage";
import { DefaultSubscribeJson } from "assets/data/Blog/BlogPage/DefaultSubscribeJson";
import MKBox from "components/MKBox";
import footerRoutes from "footer.routes";
import PageContextProvider from "providers/PageContextProvider";
import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
const renderLoader = () => <></>;

const flatten = (dict, contentId) => {
  const filteredEntries = Object.entries(dict)
    .filter(([key]) => key !== contentId)
    .flatMap(([, value]) => value);

  return filteredEntries.length > 5
    ? filteredEntries.sort(() => 0.5 - Math.random()).slice(0, 5)
    : filteredEntries;
};

const BlogContent = () => {
  const { category, relatedType, contentId } = useParams();
  let relatedBlogs = React.useMemo(
    () => flatten(BlogContentMap[category]?.[relatedType], contentId),
    [category, relatedType, contentId]
  );

  let contentData = BlogContentMap[category]?.[relatedType]?.[contentId];
  contentData["relatedBlogs"] = relatedBlogs;

  const components = [
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
    <>
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
    </>
  );
};
export default BlogContent;
