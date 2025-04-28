// Images
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "Common Questions About GST",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "What is the threshold limit for GST registration?",
      a: "For most businesses, the threshold is Rs. 20 lakhs (Rs. 40 lakhs for goods suppliers in certain states). However, for special category states, the threshold is Rs. 10 lakhs. Certain businesses must register regardless of turnover, such as those making inter-state supplies or e-commerce operators."
    },
    {
      q: "How often do I need to file GST returns?",
      a: "Regular taxpayers need to file GSTR-1 (outward supplies) and GSTR-3B (summary return) monthly or quarterly depending on their turnover. Composition scheme taxpayers file returns quarterly. Annual returns (GSTR-9) must be filed once a year."
    },
    {
      q: "What is GST audit and who needs to undergo it?",
      a: "GST audit is a review of GST accounts and returns to ensure compliance. Businesses with an annual turnover exceeding Rs. 2 crores are required to get their accounts audited by a chartered accountant or cost accountant and submit the audit report along with the annual return."
    },
    {
      q: "What are the penalties for non-compliance with GST regulations?",
      a: "Penalties include late fees of Rs. 50-100 per day for delayed returns (capped at Rs. 5,000), interest at 18% p.a. on delayed tax payments, and higher penalties for serious offenses such as tax evasion (up to 100% of tax amount)."
    },
    {
      q: "Can I revise my GST return if I made an error?",
      a: "GST returns cannot be revised directly. Errors in GSTR-1 can be adjusted in subsequent returns. For errors in GSTR-3B, adjustments can be made in the next return period, or through Form DRC-03 for additional tax liability."
    },
  ],
};
