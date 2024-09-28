const hieraDataForBlogPageModules = () => {
  const categories = {};
  const context = require.context(
    "assets/data/Blog/BlogPage",
    true,
    /assets\/data\/Blog\/BlogPage\/[^/]+\/[^/]+\/[^/]+.js$/
  );
  context.keys().forEach((key) => {
    const pathParts = key.split("/");
    const category = pathParts.at(-3);
    const relatedType = pathParts.at(-2);
    const contentId = pathParts.at(-1).replace(".js", "");
    if (!categories[category]) {
      categories[category] = {};
    }
    if (!categories[category][relatedType]) {
      categories[category][relatedType] = {};
    }
    categories[category][relatedType][contentId] = context(key)[contentId];
  });
  return categories;
};

export default hieraDataForBlogPageModules();
