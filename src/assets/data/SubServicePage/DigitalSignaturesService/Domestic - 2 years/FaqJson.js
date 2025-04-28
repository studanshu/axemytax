// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\DigitalSignaturesService\Domestic - 2 Years\FaqJson.js
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "We handle your concerns",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "What is a domestic digital signature certificate?",
      a: "A domestic digital signature certificate is an electronic signature authorized by the Indian Certifying Authorities that allows you to sign documents digitally for use within India. It provides legal recognition to electronic documents under the IT Act, 2000, and can be used for income tax filing, MCA filings, tender submissions, and other e-governance services in India."
    },
    {
      q: "What is the difference between a 2-year and 3-year validity certificate?",
      a: "The main difference is the duration of validity. A 2-year certificate is valid for 24 months from the date of issuance, while a 3-year certificate is valid for 36 months. The 2-year certificate is more economical upfront but requires renewal sooner. Functionality and security features remain identical between both options."
    },
    {
      q: "Can I use a domestic digital signature for international transactions?",
      a: "No, domestic digital signatures are recognized only within India. For international transactions or signing documents that need global recognition, you would need an international digital signature certificate that complies with global standards and is recognized across countries."
    },
    {
      q: "What happens when my 2-year DSC expires?",
      a: "When your DSC expires, you will need to apply for a new certificate. There is no direct renewal process; it requires a fresh application. We recommend initiating the reapplication process 15-30 days before expiration to ensure continuity. Your existing documents signed with the expired DSC will remain valid."
    },
    {
      q: "What types of digital signatures are available?",
      a: "In India, three classes of digital signatures are available: Class 1 (basic verification for email signing), Class 2 (identity verification for income tax, GST filing), and Class 3 (highest level of security for company filings, e-tendering). For most business and tax purposes, Class 2 or Class 3 certificates are required."
    },
    {
      q: "Can I install my digital signature on multiple devices?",
      a: "Digital signatures are typically stored on a USB token that can be used with different computers. However, the certificate itself can only be used on one device at a time by plugging in the token. Some certifying authorities may offer cloud-based DSCs that allow access from multiple devices with proper authentication."
    }
  ],
};
