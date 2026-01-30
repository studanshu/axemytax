import { createContext } from "react";

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export interface PageViewEvent {
  path: string;
  title?: string;
}

export interface AnalyticsContextValue {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (event: PageViewEvent) => void;
  setUserId: (userId: string) => void;
  setUserProperties: (properties: Record<string, any>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextValue>({
  trackEvent: () => {},
  trackPageView: () => {},
  setUserId: () => {},
  setUserProperties: () => {},
});
