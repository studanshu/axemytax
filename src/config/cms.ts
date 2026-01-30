import { setGASUrl } from '@studanshu/google-sheets-cms';

// Configure Google Apps Script deployment URL
// Replace with your actual deployment URL
const GAS_URL = process.env.REACT_APP_GAS_URL || 'https://script.google.com/macros/s/AKfycbysZO4E2U1BvGn-xAJd_VxId-owBXPTZbDLwwI1Y2R9xg-IVqIrd6ncr79_dc4ZU64YlA/exec';

export const initializeCMS = () => {
  setGASUrl(GAS_URL);
};

// Auto-initialize on import
initializeCMS();
