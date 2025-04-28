// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS on Rent\FaqJson.js
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "We handle your concerns",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "When is TDS on rent applicable?",
      a: "For individuals and HUFs (not subject to tax audit): TDS must be deducted at 5% if monthly rent exceeds ₹50,000 under Section 194IB. For businesses and individuals subject to tax audit: TDS is applicable at 10% for equipment/machinery rent and 2% for property rent if annual rent exceeds ₹2,40,000 under Section 194I. No TDS is required if the landlord is a government entity. These thresholds and rates are subject to periodic changes in Budget announcements."
    },
    {
      q: "Do I need a TAN to deduct TDS on rent?",
      a: "The requirement depends on which section applies: For Section 194IB (individuals/HUFs not subject to tax audit paying monthly rent over ₹50,000), no TAN is required - you can use your PAN to deposit TDS. For Section 194I (businesses and tax-audited individuals), a TAN is mandatory for deducting and depositing TDS. If you don't have a TAN but need one, we can assist with the TAN registration process as part of our TDS on Rent service."
    },
    {
      q: "What are the due dates for TDS deposit and returns for rent?",
      a: "For Section 194I (businesses): TDS must be deposited by the 7th of the following month in which deduction is made. Quarterly TDS returns must be filed by: Q1 (Apr-Jun): July 31, Q2 (Jul-Sep): October 31, Q3 (Oct-Dec): January 31, Q4 (Jan-Mar): May 31. For Section 194IB (individuals/HUFs): TDS must be deposited within 30 days from the end of the month in which deduction is made, with no separate return filing requirement."
    },
    {
      q: "What happens if I don't deduct TDS on rent?",
      a: "Failure to deduct TDS on rent can lead to several consequences: Disallowance of 30% of the rent expense while calculating taxable income. Interest charges at 1% per month from the date TDS was required to be deducted. Penalty equal to the TDS amount not deducted. Additional penalties up to ₹1 lakh for non-compliance with TDS provisions. Personal liability for company directors or partners in severe cases of non-compliance."
    },
    {
      q: "Can the landlord request no TDS deduction?",
      a: "Yes, a landlord can apply for a lower or nil TDS deduction by obtaining a certificate from the Income Tax Department under Section 197. The landlord needs to submit Form 13 to their Assessing Officer, who may issue a certificate if satisfied. Once issued, the tenant can deduct TDS at the lower rate specified or not deduct at all. Without this certificate, tenants are legally obligated to deduct TDS at the applicable rate regardless of the landlord's request."
    },
    {
      q: "How do I issue TDS certificates to my landlord?",
      a: "For Section 194I (businesses): Form 16A must be issued within 15 days from the due date of filing the quarterly TDS return. This can be generated through the TRACES portal using your TAN. For Section 194IB (individuals/HUFs): The tax department automatically issues Form 16B, which can be downloaded from the TRACES portal after TDS payment. The certificate should be provided to the landlord promptly to enable them to claim TDS credit in their income tax return."
    }
  ],
};
