import 'config/cms'; // Initialize CMS
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
    // Build full message with additional info
    const mainMessage = formatMessage(data);
    const additionalNotes = formatNotes(data);
    const fullMessage = additionalNotes 
      ? `${mainMessage}\n\n---\nAdditional Information:\n${additionalNotes}`
      : mainMessage;

    // Transform data to match ContactFormData interface
    const contactData = {
      name: data.name || 'Website Visitor',
      email: data.email || 'noreply@axemytax.com',
      subject: data.subject || data.service || 'General Inquiry',
      message: fullMessage,
      source: data.source || 'website',
      honeypot: '',
    };

    mutate(contactData);
  };

  // Helper function to format all form data into message
  const formatMessage = (data: any): string => {
    let message = data.message || data.query || '';
    
    // If no message/query, create a default one based on context
    if (!message || message.trim() === '') {
      message = 'New inquiry submitted';
    }
    
    return message;
  };

  // Helper function to format additional fields into notes
  const formatNotes = (data: any): string => {
    const additionalFields: string[] = [];
    
    // Add phone first if provided
    if (data.phone) additionalFields.push(`Phone: ${data.phone}`);
    
    // Add all non-standard fields to notes
    Object.keys(data).forEach((key) => {
      if (!['name', 'email', 'phone', 'message', 'query', 'source', 'honeypot', 'subject', 'service'].includes(key) && data[key]) {
        if (key === 'meta' && typeof data[key] === 'object') {
          // Handle meta object
          Object.keys(data[key]).forEach((metaKey) => {
            if (data[key][metaKey]) {
              additionalFields.push(`${metaKey}: ${data[key][metaKey]}`);
            }
          });
        } else {
          const value = Array.isArray(data[key]) ? data[key].join(', ') : data[key];
          additionalFields.push(`${key}: ${value}`);
        }
      }
    });
    
    return additionalFields.join('\n');
  };

  return {
    submitForm,
    isSubmitting: isPending,
    status: isSuccess ? 'success' : isError ? 'error' : 'idle',
    mutation: { isPending, isSuccess, isError },
  };
};
