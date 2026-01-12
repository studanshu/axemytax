import '../../../config/cms'; // Initialize CMS
import { useContactForm, CaptureField } from '@studanshu/google-sheets-cms';

/**
 * Legacy compatibility hook for existing form components
 * Wraps useContactForm to match the old useFormSubmit API
 */
export const useFormSubmit = () => {
  const { mutate, isPending, isSuccess, isError } = useContactForm({
    capture: [CaptureField.UserAgent],
  });

  const submitForm = async (data: any): Promise<void> => {
    // Transform data to match ContactFormData interface
    const contactData = {
      name: data.name || '',
      email: data.email || '',
      subject: data.subject || data.service || 'General Inquiry',
      message: formatMessage(data),
      source: data.source || 'website',
      honeypot: '',
    };

    mutate(contactData);
  };

  // Helper function to format all form data into message
  const formatMessage = (data: any): string => {
    let message = data.message || data.query || data.email || '';
    
    const additionalFields: string[] = [];
    
    // Add all non-standard fields to message
    Object.keys(data).forEach((key) => {
      if (!['name', 'email', 'message', 'query', 'source', 'honeypot'].includes(key) && data[key]) {
        const value = Array.isArray(data[key]) ? data[key].join(', ') : data[key];
        additionalFields.push(`${key}: ${value}`);
      }
    });
    
    if (additionalFields.length > 0) {
      message += '\n\n---\nAdditional Information:\n' + additionalFields.join('\n');
    }
    
    return message;
  };

  return {
    submitForm,
    isSubmitting: isPending,
    status: isSuccess ? 'success' : isError ? 'error' : 'idle',
    mutation: { isPending, isSuccess, isError },
  };
};
