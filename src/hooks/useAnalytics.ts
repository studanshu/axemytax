import { useContext } from "react";
import { AnalyticsContext } from "../providers/AnalyticsContext";

/**
 * Hook to access analytics functions throughout the app
 * 
 * @example
 * ```tsx
 * const { trackEvent, trackPageView } = useAnalytics();
 * 
 * // Track button click
 * trackEvent({
 *   category: 'User Interaction',
 *   action: 'click',
 *   label: 'Contact Form Submit',
 * });
 * 
 * // Track page view
 * trackPageView({
 *   path: '/services/itr-filing',
 *   title: 'ITR Filing Service',
 * });
 * ```
 */
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);

  if (!context) {
    throw new Error("useAnalytics must be used within AnalyticsProvider");
  }

  return context;
};
