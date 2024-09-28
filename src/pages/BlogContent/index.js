import BlogContentMap from "assets/data/Blog/BlogPage";
import { DefaultSubscribeJson } from "assets/data/Blog/BlogPage/DefaultSubscribeJson";
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import TopLayout from "pages/utils/TopLayout";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import Content from "./Content";
import Subscribe from "./Subscribe";
const renderLoader = () => <p>Loading</p>;

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
  let relatedBlogs = flatten(
    BlogContentMap[category]?.[relatedType],
    contentId
  );
  let contentData = BlogContentMap[category]?.[relatedType]?.[contentId];
  contentData["relatedBlogs"] = relatedBlogs;

  return (
    <Suspense fallback={renderLoader()}>
      <TopLayout />
      <Content jsonData={contentData} />
      <Subscribe jsonData={DefaultSubscribeJson} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </Suspense>
  );
};
export default BlogContent;
