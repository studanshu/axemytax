// API and Form-related type definitions

// Form field types
export type FormFieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'number';

export interface FormField {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  required?: boolean;
  options?: Array<{ label: string; value: string | number }>;
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
  };
  defaultValue?: string | number | boolean;
  disabled?: boolean;
  helperText?: string;
}

export interface FormInput {
  input_label: string;
  input_type: string;
  input_placeholder?: string;
  input_name: string;
  input_required?: boolean;
  input_options?: Array<{ label: string; value: string | number }>;
  input_validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
  };
}

export interface FormConfig {
  title?: string;
  description?: string;
  inputs: FormInput[];
  submitButtonText?: string;
  successMessage?: string;
  errorMessage?: string;
}

// Form submission data
export interface FormData {
  [key: string]: string | number | boolean | undefined;
}

export interface TransformedFormData {
  name?: string;
  email?: string;
  phone?: string;
  query?: string;
  service?: string;
  subService?: string;
  source?: string;
  businessType?: string;
  budget?: string;
  meta?: string;
  [key: string]: string | number | boolean | undefined;
}

// API Request/Response types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
}

// Context value for service tracking
export interface ServiceContextValue {
  name: string;
}

export interface SubServiceContextValue {
  name: string;
}

export interface PageContextValue {
  name: string;
}

// Form submission hook return type
export interface UseFormSubmitReturn {
  submitForm: (data: FormData) => Promise<void>;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: Error | null;
  reset: () => void;
}

// DTO transformation types
export interface FormDTO {
  name: string;
  email: string;
  phone: string;
  query: string;
  service?: string;
  subService?: string;
  source: string;
  businessType?: string;
  budget?: string;
  meta?: Record<string, any>;
}

export interface BusinessTypeMapping {
  Individual: string;
  SME: string;
  Corporate: string;
  [key: string]: string;
}

export interface BudgetRangeMapping {
  '₹5000-₹10000': string;
  '₹10000-₹25000': string;
  '₹25000-₹50000': string;
  '₹50000+': string;
  [key: string]: string;
}
