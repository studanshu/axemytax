import '../config/cms'; // Initialize CMS
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
  const customSchema = z.object(
    createSchema(jsonData.inputs as any) // To avoid modifying the original data
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
  const { mutate: submitContactForm, isPending, isSuccess, isError } = useContactForm({
    capture: [CaptureField.UserAgent], // Optionally capture user agent
  });

  const onSubmit = async (data: any) => {
    // Transform data to match ContactFormData interface
    const contactData = {
      name: data.name || '',
      email: data.email || '',
      subject: data.service ? `${data.service} - ${data.subService || ''}` : 'General Inquiry',
      message: formatMessage(data),
      source: pageContext !== undefined
        ? `page-${pageContext.name}`
        : `${serviceName}-${subServiceName}`,
      honeypot: '', // Add honeypot field for spam protection
    };

    submitContactForm(contactData);
  };

  // Helper function to format all form data into message
  const formatMessage = (data: any) => {
    let message = data.message || data.query || '';
    
    // Add additional fields to message
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
    
    if (additionalFields.length > 0) {
      message += '\n\n---\nAdditional Information:\n' + additionalFields.join('\n');
    }
    
    return message;
  };

  const snackbarRef = useRef<CustomSnackbarHandle>(null);
  
  useEffect(() => {
    if (isSuccess) {
      reset();
      snackbarRef.current?.showSnackbar(
        'Form submitted successfully! We will get back to you soon.',
        'success'
      );
    } else if (isError) {
      snackbarRef.current?.showSnackbar(
        'We are unable to take in your request. Please reach out to us by phone or email.',
        'error'
      );
    } else if (isPending) {
      snackbarRef.current?.showSnackbar('Taking in your request', 'info');
    }
  }, [isSuccess, isError, isPending, reset]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12} className="formContent">
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
              color="lightBlue"
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
