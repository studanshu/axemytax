import { ReactNode, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ServiceContext } from "./Context";
import { SubServiceContext } from "./Context";
import { PageContext } from "./Context";
import { useAnalytics } from "../hooks/useAnalytics";

interface EventTrackingProviderProps {
  children: ReactNode;
}

/**
 * Enhanced provider that automatically tracks contextual events
 * based on Service, SubService, and Page context
 */
const EventTrackingProvider = ({ children }: EventTrackingProviderProps) => {
  const location = useLocation();
  const { trackEvent, trackPageView } = useAnalytics();
  const serviceContext = useContext(ServiceContext);
  const subServiceContext = useContext(SubServiceContext);
  const pageContext = useContext(PageContext);

  // Track page views with context
  useEffect(() => {
    const pageTitle = 
      subServiceContext?.name || 
      serviceContext?.name || 
      pageContext?.name || 
      document.title;

    trackPageView({
      path: location.pathname + location.search,
      title: pageTitle,
    });

    // Track service/subservice navigation
    if (serviceContext?.name) {
      trackEvent({
        category: "Navigation",
        action: "view_service",
        label: serviceContext.name,
      });
    }

    if (subServiceContext?.name) {
      trackEvent({
        category: "Navigation",
        action: "view_subservice",
        label: `${subServiceContext.serviceName || serviceContext?.name} - ${subServiceContext.name}`,
      });
    }
  }, [location, serviceContext, subServiceContext, pageContext]);

  return <>{children}</>;
};

export default EventTrackingProvider;
