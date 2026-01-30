import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "./useAnalytics";

/**
 * Automatically tracks page views on route changes
 * Should be used once in the App component
 */
export const usePageTracking = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView({
      path: location.pathname + location.search,
      title: document.title,
    });
  }, [location, trackPageView]);
};
