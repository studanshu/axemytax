import 'config/cms'; // Initialize CMS
import { useContactForm, CaptureField } from '@studanshu/google-sheets-cms';
import { zodResolver } from '@hookform/resolvers/zod';
import { SendOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import typography from 'assets/theme/base/typography';
import MKButton from 'components/MKButton';
import PropTypes from 'prop-types';
import {
  PageContext,
  ServiceContext,
  SubServiceContext,
} from 'providers/Context';
import { useContext, useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import createSchema from './CreateSchema';
import CustomSnackbar, { CustomSnackbarHandle } from './CustomSnackbar';
import RenderDropdown from './RenderDropdown';
import RenderTextField from './RenderTextField';
import RenderMultiSelect from './RenderMultiSelect';
import { useFormTracking } from 'hooks/useFormTracking';

const { size } = typography;

interface FormInput {
  id: string;
  type?: string;
  label?: string;
  fieldType: string;
  formLabel: string;
  placeholder?: string;
  required?: boolean;
  spacing?: string;
  options?: string[] | Record<string, any>;
  [key: string]: any;
}

interface CustomFormProps {
  jsonData: {
    inputs: FormInput[];
    button?: string;
  };
}

const CustomForm = ({ jsonData }: CustomFormProps) => {
  const { trackFormView, trackFormStart, trackFormSubmit } = useFormTracking();
  
  const customSchema = z.object(
    createSchema(jsonData.inputs as any) // To avoid modifying the original data
  ).refine(
    (data) => {
      // At least one of email or phone must be filled
      const hasEmail = data.email && data.email.trim().length > 0;
      const hasPhone = data.phone && data.phone.trim().length > 0;
      return hasEmail || hasPhone;
    },
    {
      message: "Please provide either email or phone number",
      path: ["email"], // Show error on email field
    }
  );

  const subServiceData = useContext(SubServiceContext);
  const serviceData = useContext(ServiceContext);
  const pageContext = useContext(PageContext);

  const serviceName = subServiceData.serviceName || serviceData.name;
  const subServiceName = subServiceData.name;

  const methods = useForm({
    resolver: zodResolver(customSchema),
    defaultValues: {
      service: serviceName,
      subService: subServiceName,
      budget: '',
      businessType: '',
    },
  });

  const { handleSubmit, reset } = methods;

  // Use the google-sheets-cms contact form hook
  const { mutate: submitContactForm, isPending, isSuccess, isError, error } = useContactForm({
    capture: [CaptureField.UserAgent], // Optionally capture user agent
  });

  const onSubmit = async (data: any) => {
    // Build message with main content and additional info
    const mainMessage = data.message || data.query || 'Contact form inquiry';
    const additionalInfo = formatAdditionalInfo(data);
    const fullMessage = additionalInfo 
      ? `${mainMessage}\n\n---\nAdditional Information:\n${additionalInfo}`
      : mainMessage;

    // Transform data to match ContactFormData interface
    const contactData = {
      name: data.name || 'Website Visitor',
      email: data.email || 'noreply@axemytax.com',
      subject: data.service ? `${data.service} - ${data.subService || ''}` : 'General Inquiry',
      message: fullMessage,
      source: pageContext !== undefined
        ? `page-${pageContext.name}`
        : `${serviceName}-${subServiceName}`,
      honeypot: '',
    };

    submitContactForm(contactData);
  };

  // Helper function to format additional information for notes field
  const formatAdditionalInfo = (data: any) => {
    const additionalFields = [];
    
    if (data.phone) additionalFields.push(`Phone: ${data.phone}`);
    if (data.businessType) additionalFields.push(`Business Type: ${data.businessType}`);
    if (data.budget) additionalFields.push(`Budget: ${data.budget}`);
    if (data.service) additionalFields.push(`Service: ${data.service}`);
    if (data.subService) additionalFields.push(`Sub-Service: ${data.subService}`);
    
    // Handle multi-select services
    if (data.services && Array.isArray(data.services)) {
      additionalFields.push(`Services: ${data.services.join(', ')}`);
    }
    
    return additionalFields.length > 0 ? additionalFields.join('\n') : '';
  };

  const snackbarRef = useRef<CustomSnackbarHandle>(null);

  // Track form view on mount
  useEffect(() => {
    trackFormView('Contact Request Form');
  }, [trackFormView]);
  
  useEffect(() => {
    if (isSuccess) {
      trackFormSubmit('Contact Request Form', true);
      reset();
      snackbarRef.current?.showSnackbar(
        'Form submitted successfully! We will get back to you soon.',
        'success'
      );
    } else if (isError) {
      trackFormSubmit('Contact Request Form', false);
      if (error) console.error('Form submission error:', error);
      snackbarRef.current?.showSnackbar(
        'We are unable to take in your request. Please reach out to us by phone or email.',
        'error'
      );
    } else if (isPending) {
      snackbarRef.current?.showSnackbar('Taking in your request', 'info');
    }
  }, [isSuccess, isError, isPending, reset, error, trackFormSubmit]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} className="formContent" onClick={() => trackFormStart('Contact Request Form')}>
          <Grid
            container
            className="formInputs"
            spacing={4}
            justifyContent="center"
          >
            {jsonData.inputs.map((input: FormInput, index: number) => (
              <Grid
                item
                xs={12}
                lg={input.spacing === 'full' ? 12 : 6}
                key={index}
              >
                {input.fieldType === 'input' ||
                input.fieldType === 'textarea' ? (
                  <RenderTextField input={input as any} />
                ) : input.fieldType === 'dropdown' ? (
                  <RenderDropdown input={input as any} gap={4} />
                ) : input.fieldType === 'multi-select' ? (
                  <RenderMultiSelect input={input as any} gap={4} />
                ) : (
                  <></>
                )}
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              type="submit"
              disabled={isPending}
              sx={{ fontSize: size.md }}
            >
              {isPending ? 'Submitting...' : (jsonData.button || 'Submit')}{' '}
              <SendOutlined sx={{ ml: 1 }} fontSize="small" />
            </MKButton>
          </Grid>
          <CustomSnackbar ref={snackbarRef} />
        </Grid>
      </form>
    </FormProvider>
  );
};

CustomForm.propTypes = {
  jsonData: PropTypes.shape({
    inputs: PropTypes.arrayOf(PropTypes.object).isRequired,
    button: PropTypes.string,
  }).isRequired,
};

export default CustomForm;
