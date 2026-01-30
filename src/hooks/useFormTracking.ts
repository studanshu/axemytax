import { useContext } from "react";
import { ServiceContext, SubServiceContext, PageContext } from "../providers/Context";
import { useAnalytics } from "./useAnalytics";

/**
 * Hook for tracking form events with automatic context
 */
export const useFormTracking = () => {
  const { trackEvent } = useAnalytics();
  const serviceContext = useContext(ServiceContext);
  const subServiceContext = useContext(SubServiceContext);
  const pageContext = useContext(PageContext);

  const getFormContext = () => {
    return subServiceContext?.name || serviceContext?.name || pageContext?.name || "Unknown";
  };

  const trackFormView = (formName: string = "Contact Form") => {
    trackEvent({
      category: "Form",
      action: "view",
      label: `${formName} - ${getFormContext()}`,
    });
  };

  const trackFormStart = (formName: string = "Contact Form") => {
    trackEvent({
      category: "Form",
      action: "start",
      label: `${formName} - ${getFormContext()}`,
    });
  };

  const trackFormSubmit = (formName: string = "Contact Form", success: boolean = true) => {
    trackEvent({
      category: "Form",
      action: success ? "submit_success" : "submit_error",
      label: `${formName} - ${getFormContext()}`,
    });
  };

  const trackFieldInteraction = (fieldName: string, formName: string = "Contact Form") => {
    trackEvent({
      category: "Form",
      action: "field_interaction",
      label: `${fieldName} - ${formName} - ${getFormContext()}`,
    });
  };

  return {
    trackFormView,
    trackFormStart,
    trackFormSubmit,
    trackFieldInteraction,
    getFormContext,
  };
};
