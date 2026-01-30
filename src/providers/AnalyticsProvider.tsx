import { ReactNode, useEffect } from "react";
import {
  AnalyticsContext,
  AnalyticsEvent,
  PageViewEvent,
} from "./AnalyticsContext";

interface AnalyticsProviderProps {
  children: ReactNode;
  trackingId?: string;
  debug?: boolean;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const AnalyticsProvider = ({
  children,
  trackingId,
  debug = false,
}: AnalyticsProviderProps) => {
  useEffect(() => {
    // Only initialize if tracking ID is provided
    if (!trackingId) {
      if (debug) {
        console.warn("Google Analytics: No tracking ID provided");
      }
      return;
    }

    // Check if gtag is already loaded
    if (window.gtag) {
      if (debug) {
        console.log("Google Analytics: Already initialized");
      }
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer!.push(args);
    };

    // Configure gtag
    window.gtag("js", new Date());
    window.gtag("config", trackingId, {
      send_page_view: false, // We'll handle page views manually
    });

    // Load Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    if (debug) {
      console.log(`Google Analytics initialized with ID: ${trackingId}`);
    }

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll(
        `script[src*="googletagmanager.com/gtag/js"]`
      );
      scripts.forEach((script) => script.remove());
    };
  }, [trackingId, debug]);

  const trackEvent = ({ category, action, label, value }: AnalyticsEvent) => {
    if (!window.gtag) {
      if (debug) {
        console.log("Analytics Event (not sent):", {
          category,
          action,
          label,
          value,
        });
      }
      return;
    }

    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });

    if (debug) {
      console.log("Analytics Event:", { category, action, label, value });
    }
  };

  const trackPageView = ({ path, title }: PageViewEvent) => {
    if (!window.gtag || !trackingId) {
      if (debug) {
        console.log("Page View (not sent):", { path, title });
      }
      return;
    }

    window.gtag("config", trackingId, {
      page_path: path,
      page_title: title,
    });

    if (debug) {
      console.log("Page View:", { path, title });
    }
  };

  const setUserId = (userId: string) => {
    if (!window.gtag) {
      if (debug) {
        console.log("Set User ID (not sent):", userId);
      }
      return;
    }

    window.gtag("set", { user_id: userId });

    if (debug) {
      console.log("Set User ID:", userId);
    }
  };

  const setUserProperties = (properties: Record<string, any>) => {
    if (!window.gtag) {
      if (debug) {
        console.log("Set User Properties (not sent):", properties);
      }
      return;
    }

    window.gtag("set", "user_properties", properties);

    if (debug) {
      console.log("Set User Properties:", properties);
    }
  };

  return (
    <AnalyticsContext.Provider
      value={{
        trackEvent,
        trackPageView,
        setUserId,
        setUserProperties,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
