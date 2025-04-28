// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS Return Filing\FaqJson.js
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "We handle your concerns",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "Which TDS return forms do I need to file?",
      a: "The TDS return form you need to file depends on the nature of the payment for which TDS was deducted: Form 24Q: For TDS on salary payments to employees. Form 26Q: For TDS on payments other than salaries to Indian residents (interest, professional fees, rent, etc.). Form 27Q: For payments made to non-residents including NRIs. Form 27EQ: For Tax Collected at Source (TCS) returns. Multiple forms may need to be filed in the same quarter if you've deducted TDS on different types of payments. Our service helps determine the correct forms needed based on your specific deductions."
    },
    {
      q: "What are the due dates for TDS return filing?",
      a: "TDS returns must be filed quarterly according to the following schedule: Quarter 1 (April-June): July 31. Quarter 2 (July-September): October 31. Quarter 3 (October-December): January 31. Quarter 4 (January-March): May 31. Missing these deadlines results in late filing fees of ₹200 per day under section 234E (capped at the TDS amount) and potential penalties under section 271H ranging from ₹10,000 to ₹1,00,000. Additionally, interest at 1.5% per month is applicable on any delayed TDS payment under section 201."
    },
    {
      q: "What happens if PAN of a deductee is incorrect or missing?",
      a: "If a deductee's PAN is incorrect or missing in your TDS return, several consequences follow: TDS must be deducted at a higher rate of 20% (or the applicable rate, whichever is higher) instead of the normal rate. The deductee may not get proper credit for the TDS in their Form 26AS, leading to potential tax demands. Your TDS return may show validation errors during the filing process. The deductee might face difficulties while filing their income tax return. We verify PAN details of all deductees before filing to avoid these issues."
    },
    {
      q: "Can I file TDS returns if I've not deposited the TDS yet?",
      a: "No, you cannot file TDS returns until you've deposited the TDS amount with the government. The TDS return process requires you to include challan details of the TDS payments made. If you haven't deposited TDS: First deposit the TDS along with applicable interest under section 201 (1.5% per month). Then proceed with filing the TDS return along with late filing fees if applicable. Our service can help with both the delayed TDS deposit and subsequent return filing, minimizing penalties through proper disclosure and compliance."
    },
    {
      q: "What is the difference between Form 24Q and 26Q?",
      a: "Form 24Q and 26Q differ primarily in the types of payments they cover: Form 24Q is exclusively for reporting TDS deducted from salary payments to employees. It includes details like employee PAN, salary structure, allowances, deductions, etc. Form 26Q covers all non-salary payments to residents such as contractor payments, professional fees, rent, interest, etc. The deduction rates and reporting requirements are different for each form. It's common for businesses to file both forms in the same quarter if they've made both salary and non-salary payments."
    },
    {
      q: "How do I generate TDS certificates after filing the returns?",
      a: "TDS certificates (Form 16/16A) can be generated only after successful filing and processing of TDS returns. The process is: Log in to the TRACES portal using your TAN. Navigate to the 'Downloads' section and select 'Form 16/16A'. Request generation of certificates by specifying the relevant quarter/year. Download the certificates once generated (typically takes 1-2 days). Distribute the certificates to the respective deductees within the stipulated time. Our service includes assistance with TDS certificate generation and distribution as part of our comprehensive TDS return filing package."
    }
  ],
};
