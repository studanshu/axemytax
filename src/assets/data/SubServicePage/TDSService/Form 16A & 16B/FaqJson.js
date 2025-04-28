// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\Form 16A & 16B\FaqJson.js
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "We handle your concerns",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "What is the difference between Form 16A and Form 16B?",
      a: "Form 16A and Form 16B serve different purposes in the TDS ecosystem: Form 16A is issued for TDS deducted on non-salary payments such as interest, professional fees, rent, commission, etc. It's generated quarterly after filing the relevant TDS returns (Form 26Q/27Q). Form 16B is specifically for TDS on immovable property transactions under Section 194-IA. It's generated after filing Form 26QB for each property transaction. While Form 16A requires a TAN for generation, Form 16B can be generated using just PAN for one-time property transactions."
    },
    {
      q: "When should TDS certificates be issued?",
      a: "The timelines for issuing TDS certificates are: For Form 16A: Within 15 days from the due date of filing the quarterly TDS return. For example, for Q1 (Apr-Jun), certificates should be issued by August 15. For Form 16B: Within 15 days from the date of depositing TDS for property transactions. If you fail to issue certificates within these timeframes, penalties under section 272A(2)(g) may apply - ₹100 per day of delay, subject to a maximum of the TDS amount. Consistently ensuring timely certificate issuance is essential for maintaining regulatory compliance."
    },
    {
      q: "Can Form 16A/16B be issued without filing TDS returns?",
      a: "No, Form 16A/16B certificates cannot be generated without first filing the corresponding TDS returns. Form 16A requires filing of quarterly TDS returns (Form 24Q/26Q/27Q) through the TRACES portal. Form 16B requires the filing of Form 26QB for property transactions. The certificate generation is directly linked to the return processing system. If you need to issue certificates urgently but have pending returns, you should prioritize filing those returns first. Our service can help expedite both the return filing and subsequent certificate generation process."
    },
    {
      q: "How do deductees benefit from receiving Form 16A/16B?",
      a: "Deductees gain several important benefits from receiving Form 16A/16B: They can claim credit for TDS deducted from their income when filing their income tax returns. The certificates serve as proof of tax already paid on their behalf. They help reconcile TDS credit shown in Form 26AS (tax credit statement). For property sellers, Form 16B is often required during tax assessment to justify the capital gains calculation. Without these certificates, deductees might face difficulties claiming TDS credit or may need to pay tax again on the same income, leading to double taxation issues."
    },
    {
      q: "Can Form 16A/16B be downloaded multiple times?",
      a: "Yes, Form 16A/16B certificates can be downloaded multiple times from the TRACES portal once they're generated. There's no limit to the number of downloads. If the original certificate is lost, damaged, or contains errors, you don't need to apply for a duplicate - you can simply download it again. However, note that if the underlying TDS return is revised through a correction statement, you'll need to download the updated certificate after the correction is processed to ensure it reflects the most current information."
    },
    {
      q: "Are digital signatures required on TDS certificates?",
      a: "Yes, TDS certificates (Form 16A/16B) must bear a valid digital signature to be considered authentic. When downloaded from the TRACES portal, these certificates come pre-affixed with a digital signature from the Income Tax Department. For manually prepared certificates (which is rare and generally not recommended), deductors must affix their own Digital Signature Certificate (DSC). Certificates without proper digital signatures may not be accepted by tax authorities when the deductee claims TDS credit. Our service ensures all certificates are properly digitally signed and verified before distribution."
    }
  ],
};
