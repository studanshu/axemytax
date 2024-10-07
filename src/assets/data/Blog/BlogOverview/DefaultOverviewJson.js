import blogHieraData from "assets/data/Blog/BlogPage";
const blogModulesPerCategory = () => {
  const tempData = JSON.parse(JSON.stringify(blogHieraData));
  return Object.keys(tempData).reduce((blogsPerCategory, cat) => {
    blogsPerCategory[cat] = Object.keys(tempData[cat]).reduce((acc, type) => {
      Object.keys(tempData[cat][type]).forEach((id) => {
        let currentBlogDict = tempData[cat][type][id];
        delete currentBlogDict["content"];
        acc.push(currentBlogDict);
        tempData[cat][type][id]["href"] = `/blog/${cat}/${type}/${id}`;
      });
      return acc;
    }, []);
    return blogsPerCategory;
  }, {});
};

export const DefaultOverviewJson = {
  caption: "Stay Informed with Our Latest Blog Posts",
  title: "Insight And Updates",
  blogOverview: blogModulesPerCategory(),
};
