import { TextField, Autocomplete, Box, FormControl, FormHelperText } from "@mui/material";
import { ReactNode, useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { errorText } from "./utils";
import ReactCountryFlag from "react-country-flag";

interface FormInput {
  label: string;
  required?: boolean;
  fieldType: string;
  formLabel: string;
  type: string;
}

interface RenderTextFieldProps {
  input: FormInput;
  props?: Record<string, any>;
  children?: ReactNode;
}

// Common countries with codes
const COUNTRIES = [
  { code: 'AF', dialCode: '+93', name: 'Afghanistan' },
  { code: 'AL', dialCode: '+355', name: 'Albania' },
  { code: 'DZ', dialCode: '+213', name: 'Algeria' },
  { code: 'AR', dialCode: '+54', name: 'Argentina' },
  { code: 'AU', dialCode: '+61', name: 'Australia' },
  { code: 'AT', dialCode: '+43', name: 'Austria' },
  { code: 'BD', dialCode: '+880', name: 'Bangladesh' },
  { code: 'BE', dialCode: '+32', name: 'Belgium' },
  { code: 'BR', dialCode: '+55', name: 'Brazil' },
  { code: 'BG', dialCode: '+359', name: 'Bulgaria' },
  { code: 'CA', dialCode: '+1', name: 'Canada' },
  { code: 'CN', dialCode: '+86', name: 'China' },
  { code: 'CO', dialCode: '+57', name: 'Colombia' },
  { code: 'CZ', dialCode: '+420', name: 'Czech Republic' },
  { code: 'DK', dialCode: '+45', name: 'Denmark' },
  { code: 'EG', dialCode: '+20', name: 'Egypt' },
  { code: 'FI', dialCode: '+358', name: 'Finland' },
  { code: 'FR', dialCode: '+33', name: 'France' },
  { code: 'DE', dialCode: '+49', name: 'Germany' },
  { code: 'GR', dialCode: '+30', name: 'Greece' },
  { code: 'HK', dialCode: '+852', name: 'Hong Kong' },
  { code: 'HU', dialCode: '+36', name: 'Hungary' },
  { code: 'IN', dialCode: '+91', name: 'India' },
  { code: 'ID', dialCode: '+62', name: 'Indonesia' },
  { code: 'IR', dialCode: '+98', name: 'Iran' },
  { code: 'IQ', dialCode: '+964', name: 'Iraq' },
  { code: 'IE', dialCode: '+353', name: 'Ireland' },
  { code: 'IL', dialCode: '+972', name: 'Israel' },
  { code: 'IT', dialCode: '+39', name: 'Italy' },
  { code: 'JP', dialCode: '+81', name: 'Japan' },
  { code: 'JO', dialCode: '+962', name: 'Jordan' },
  { code: 'KE', dialCode: '+254', name: 'Kenya' },
  { code: 'KW', dialCode: '+965', name: 'Kuwait' },
  { code: 'MY', dialCode: '+60', name: 'Malaysia' },
  { code: 'MX', dialCode: '+52', name: 'Mexico' },
  { code: 'NL', dialCode: '+31', name: 'Netherlands' },
  { code: 'NZ', dialCode: '+64', name: 'New Zealand' },
  { code: 'NG', dialCode: '+234', name: 'Nigeria' },
  { code: 'NO', dialCode: '+47', name: 'Norway' },
  { code: 'OM', dialCode: '+968', name: 'Oman' },
  { code: 'PK', dialCode: '+92', name: 'Pakistan' },
  { code: 'PH', dialCode: '+63', name: 'Philippines' },
  { code: 'PL', dialCode: '+48', name: 'Poland' },
  { code: 'PT', dialCode: '+351', name: 'Portugal' },
  { code: 'QA', dialCode: '+974', name: 'Qatar' },
  { code: 'RO', dialCode: '+40', name: 'Romania' },
  { code: 'RU', dialCode: '+7', name: 'Russia' },
  { code: 'SA', dialCode: '+966', name: 'Saudi Arabia' },
  { code: 'SG', dialCode: '+65', name: 'Singapore' },
  { code: 'ZA', dialCode: '+27', name: 'South Africa' },
  { code: 'KR', dialCode: '+82', name: 'South Korea' },
  { code: 'ES', dialCode: '+34', name: 'Spain' },
  { code: 'LK', dialCode: '+94', name: 'Sri Lanka' },
  { code: 'SE', dialCode: '+46', name: 'Sweden' },
  { code: 'CH', dialCode: '+41', name: 'Switzerland' },
  { code: 'TW', dialCode: '+886', name: 'Taiwan' },
  { code: 'TH', dialCode: '+66', name: 'Thailand' },
  { code: 'TR', dialCode: '+90', name: 'Turkey' },
  { code: 'UA', dialCode: '+380', name: 'Ukraine' },
  { code: 'AE', dialCode: '+971', name: 'United Arab Emirates' },
  { code: 'GB', dialCode: '+44', name: 'United Kingdom' },
  { code: 'US', dialCode: '+1', name: 'United States' },
  { code: 'VN', dialCode: '+84', name: 'Vietnam' },
];

// eslint-disable-next-line react/prop-types
const RenderTextField = ({ input, props = {}, children = undefined }: RenderTextFieldProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES.find(c => c.code === 'IN') || COUNTRIES[0]); // Default to India
  const [isOpen, setIsOpen] = useState(false);

  // Detect country from IP address
  useEffect(() => {
    if (input.type === 'tel') {
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          const country = COUNTRIES.find(c => c.code === data.country_code);
          if (country) {
            setSelectedCountry(country);
          }
        })
        .catch(() => {
          // If API fails, keep default (India)
        });
    }
  }, [input.type]);

  const error = errors[input.formLabel];
  const errorMessage = error?.message as string | undefined;

  // Use custom phone input for tel type
  if (input.type === 'tel') {
    return (
      <FormControl fullWidth error={!!error}>
        <Controller
          name={input.formLabel}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
              {/* Country Selector with Search */}
              <Autocomplete
                key={isOpen ? 'open' : 'closed'}
                options={COUNTRIES}
                value={selectedCountry}
                open={isOpen}
                onOpen={() => setIsOpen(true)}
                onClose={() => setIsOpen(false)}
                onChange={(_, newValue) => {
                  if (newValue) {
                    setSelectedCountry(newValue);
                    // Update the phone value with new country code
                    const phoneNumber = value?.replace(/^\+\d+\s*/, '') || '';
                    onChange(newValue.dialCode + ' ' + phoneNumber);
                    setIsOpen(false);
                  }
                }}
                isOptionEqualToValue={(option, value) => option.code === value.code}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ReactCountryFlag
                      countryCode={option.code}
                      svg
                      style={{
                        width: '1.5em',
                        height: '1.5em',
                      }}
                    />
                    <span>{option.name}</span>
                  </Box>
                )}
                renderInput={(params) => {
                  const { InputProps, inputProps, ...restParams } = params;
                  return (
                    <TextField
                      {...restParams}
                      placeholder={isOpen ? "Search country..." : ""}
                      InputProps={{
                        ...InputProps,
                        startAdornment: !isOpen ? (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, pl: 0.5 }}>
                            <ReactCountryFlag
                              countryCode={selectedCountry.code}
                              svg
                              style={{
                                width: '1.5em',
                                height: '1.5em',
                              }}
                            />
                            <span>{selectedCountry.dialCode}</span>
                          </Box>
                        ) : null,
                      }}
                      inputProps={{
                        ...inputProps,
                        value: isOpen ? inputProps.value : '',
                        style: { ...inputProps.style, width: isOpen ? 'auto' : 0 },
                      }}
                    />
                  );
                }}
                disableClearable
                sx={{ 
                  width: isOpen ? '100%' : '30%',
                  flexShrink: 0,
                  transition: 'width 0.2s ease-in-out',
                }}
              />

              {/* Phone Number Input - Hide when dropdown is open */}
              {!isOpen && (
                <TextField
                  sx={{ width: '70%' }}
                  label={`${input.label} ${input.required ? "*" : ""}`}
                  value={value?.replace(/^\+\d+\s*/, '') || ''}
                  onChange={(e) => {
                    const phoneNumber = e.target.value.replace(/\D/g, ''); // Only digits
                    const fullNumber = selectedCountry.dialCode + ' ' + phoneNumber;
                    onChange(fullNumber);
                  }}
                  placeholder="Enter mobile number"
                  type="tel"
                  error={!!error}
                />
              )}
            </Box>
          )}
        />
        {error && <FormHelperText error>{errorText(errorMessage)}</FormHelperText>}
      </FormControl>
    );
  }

  return (
    <TextField
      {...props}
      fullWidth
      label={`${input.label} ${input.required ? "*" : ""}`}
      multiline={input.fieldType === "textarea"}
      rows={input.fieldType === "textarea" ? 4 : undefined}
      error={!!error}
      helperText={errorText(errorMessage)}
      {...register(input.formLabel)}
      variant="outlined"
      type={input.type}
      InputProps={{
        style: {
          minHeight: '56px',
        },
        // eslint-disable-next-line react/prop-types
        ...props?.InputProps,
      }}
    >
      {children}
    </TextField>
  );
};

export default RenderTextField;
