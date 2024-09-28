import blogHieraData from "assets/data/Blog/BlogPage";
const blogModulesPerCategory = () => {
  return Object.keys(blogHieraData).reduce((blogsPerCategory, cat) => {
    blogsPerCategory[cat] = Object.keys(blogHieraData[cat]).reduce(
      (acc, type) => {
        Object.keys(blogHieraData[cat][type]).forEach((id) => {
          let content = blogHieraData[cat][type][id];
          acc.push(content);
          blogHieraData[cat][type][id]["href"] = `/blog/${cat}/${type}/${id}`;
        });
        return acc;
      },
      []
    );
    return blogsPerCategory;
  }, {});
};

export const DefaultOverviewJson = {
  caption: "Stay Informed with Our Latest Blog Posts",
  title: "Insight And Updates",
  blogOverview: blogModulesPerCategory(),
};
