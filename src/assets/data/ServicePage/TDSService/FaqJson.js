// Images
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "Common Questions About TDS Services",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "What is TAN and who needs to obtain it?",
      a: "TAN (Tax Deduction and Collection Account Number) is a 10-digit alphanumeric number issued by the Income Tax Department to entities responsible for deducting or collecting tax at source. Any person or entity that is required to deduct TDS (such as employers paying salary, businesses making specified payments to contractors, property buyers, banks paying interest) or collect TCS must obtain a TAN before filing TDS/TCS returns."
    },
    {
      q: "What are the TDS rates applicable for different types of payments?",
      a: "TDS rates vary based on payment type and recipient status. For residents: salary (as per slab rates), professional services (10%), rent for plant & machinery (2%), rent for land/building (10%), contractor payments (1-2%), commission/brokerage (5%), interest (10%), and property purchase (1%). For NRIs, higher rates apply, generally 20-30%. These rates are subject to change in budget announcements, and reduced rates may apply if the recipient provides PAN details."
    },
    {
      q: "When and how should TDS be deposited with the government?",
      a: "TDS must be deposited by the 7th of the following month (except March, which is due by April 30th). Government deductors have different deadlines. Deposit is made through Form 17 (challan) online through the NSDL TIN website or authorized banks. The challan requires details including TAN, assessment year, nature of payment, section under which TDS was deducted, and payment period."
    },
    {
      q: "What are the due dates for filing various TDS returns?",
      a: "TDS returns must be filed quarterly. Due dates are: Q1 (Apr-Jun): July 31, Q2 (Jul-Sep): October 31, Q3 (Oct-Dec): January 31, and Q4 (Jan-Mar): May 31. Different forms are used for different payment types: Form 24Q for salary, 26Q for non-salary payments to residents, 27Q for payments to non-residents, and 27EQ for tax collected at source."
    },
    {
      q: "What are the penalties for non-compliance with TDS regulations?",
      a: "Penalties include: interest at 1.5% per month for late deposit of TDS, ₹200 per day (up to TDS amount) for late filing of returns, ₹10,000-₹1,00,000 for filing incorrect returns, disallowance of expense on which TDS was not deducted/deposited, and treating the deductor as an 'assessee in default' if TDS is deducted but not deposited. In serious cases, prosecution with imprisonment of 3 months to 7 years may apply."
    },
  ],
};
