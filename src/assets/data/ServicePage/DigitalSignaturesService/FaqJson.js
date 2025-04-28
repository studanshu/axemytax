// Images
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "Common Questions About Digital Signatures",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "What is a Digital Signature Certificate (DSC) and why do I need one?",
      a: "A Digital Signature Certificate (DSC) is an electronic form of signature that uses cryptography to verify the authenticity of digital documents or transactions. It's legally recognized in India under the Information Technology Act, 2000. You need a DSC for various purposes including filing income tax returns, MCA filings (company incorporation, annual returns), e-tendering, trademark registration, GST registration, foreign trade documentation, and signing PDF documents electronically."
    },
    {
      q: "What types of Digital Signature Certificates are available?",
      a: "There are three classes of DSCs in India: Class 1 (basic verification, mainly for email signing), Class 2 (identity verification through documents, used for income tax, MCA filings), and Class 3 (highest security with physical verification, used for e-tendering, DGFT applications). Additionally, DSCs come in different forms: Signing Certificates (for document authentication), Encryption Certificates (for securing data), and Combo Certificates (both functions). For organization use, there are also DGFT DSCs and SSL certificates."
    },
    {
      q: "What is the difference between domestic and international DSC?",
      a: "Domestic DSCs are issued by Indian Certifying Authorities (CAs) recognized by the Controller of Certifying Authorities (CCA) of India. They're valid primarily within India for Indian regulatory compliance. International DSCs are issued by globally recognized CAs and are accepted in multiple countries. They're useful for individuals or businesses engaging in international transactions, foreign tenders, or dealing with overseas organizations that may not recognize Indian DSCs."
    },
    {
      q: "What documents are required to obtain a DSC?",
      a: "For individuals: PAN card, Aadhaar card, passport-sized photograph, and address proof (utility bill, passport, etc.). For businesses: Company PAN card, Certificate of Incorporation, Board Resolution authorizing the DSC applicant, and the individual applicant's ID proof. For foreign nationals: Passport copy, address proof from home country, and sometimes an attestation from the embassy. Specific requirements may vary based on the type of DSC and the issuing authority."
    },
    {
      q: "How long does it take to get a DSC issued and what is the validity period?",
      a: "The issuance time typically ranges from 1-3 working days after submission of all required documents. In urgent cases, some CAs offer express services for same-day issuance at additional cost. Most DSCs are available with 1, 2, or 3-year validity periods, though 2-year certificates are most common. The validity period starts from the date of issuance, and renewal should be initiated 30-45 days before expiry to ensure continuity."
    },
  ],
};
