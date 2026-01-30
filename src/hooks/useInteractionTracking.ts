import { useAnalytics } from "./useAnalytics";

/**
 * Track user interaction events
 */
export const useInteractionTracking = () => {
  const { trackEvent } = useAnalytics();

  const trackButtonClick = (buttonLabel: string, location: string) => {
    trackEvent({
      category: "User Interaction",
      action: "button_click",
      label: `${buttonLabel} - ${location}`,
    });
  };

  const trackLinkClick = (linkText: string, destination: string) => {
    trackEvent({
      category: "User Interaction",
      action: "link_click",
      label: `${linkText} - ${destination}`,
    });
  };

  const trackExternalLink = (url: string) => {
    trackEvent({
      category: "Outbound Link",
      action: "click",
      label: url,
    });
  };

  const trackServiceCardClick = (serviceName: string) => {
    trackEvent({
      category: "Service Selection",
      action: "card_click",
      label: serviceName,
    });
  };

  const trackFaqExpand = (question: string) => {
    trackEvent({
      category: "User Interaction",
      action: "faq_expand",
      label: question,
    });
  };

  const trackWhatsAppClick = (source: string) => {
    trackEvent({
      category: "Contact",
      action: "whatsapp_click",
      label: source,
    });
  };

  const trackPhoneClick = (source: string) => {
    trackEvent({
      category: "Contact",
      action: "phone_click",
      label: source,
    });
  };

  const trackEmailClick = (source: string) => {
    trackEvent({
      category: "Contact",
      action: "email_click",
      label: source,
    });
  };

  return {
    trackButtonClick,
    trackLinkClick,
    trackExternalLink,
    trackServiceCardClick,
    trackFaqExpand,
    trackWhatsAppClick,
    trackPhoneClick,
    trackEmailClick,
  };
};
