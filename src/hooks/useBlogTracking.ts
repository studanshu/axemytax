import { useAnalytics } from "./useAnalytics";

/**
 * Track blog-related events
 */
export const useBlogTracking = () => {
  const { trackEvent } = useAnalytics();

  const trackBlogView = (blogTitle: string, category: string) => {
    trackEvent({
      category: "Blog",
      action: "view",
      label: `${category} - ${blogTitle}`,
    });
  };

  const trackBlogShare = (blogTitle: string, platform: string) => {
    trackEvent({
      category: "Blog",
      action: "share",
      label: `${platform} - ${blogTitle}`,
    });
  };

  const trackCategoryFilter = (category: string) => {
    trackEvent({
      category: "Blog",
      action: "filter_category",
      label: category,
    });
  };

  const trackRelatedPostClick = (blogTitle: string) => {
    trackEvent({
      category: "Blog",
      action: "related_post_click",
      label: blogTitle,
    });
  };

  return {
    trackBlogView,
    trackBlogShare,
    trackCategoryFilter,
    trackRelatedPostClick,
  };
};
