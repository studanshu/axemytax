interface FormConstants {
  endpoint: string | undefined;
}

interface AppConstants {
  form: FormConstants;
}

export const Constants: AppConstants = {
  form: {
    endpoint: process.env.REACT_APP_FORM_URL,
  },
};
