import { setGASUrl } from '@studanshu/google-sheets-cms';

// Configure Google Apps Script deployment URL
// Replace with your actual deployment URL
const GAS_URL = process.env.REACT_APP_GAS_URL || 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

export const initializeCMS = () => {
  setGASUrl(GAS_URL);
};

// Auto-initialize on import
initializeCMS();
