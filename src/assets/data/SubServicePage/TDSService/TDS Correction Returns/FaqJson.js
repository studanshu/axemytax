// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\assets\data\SubServicePage\TDSService\TDS Correction Returns\FaqJson.js
import FaqImage from "assets/images/default/FAQ.png";

export const FaqJson = {
  caption: "We handle your concerns",
  title: "Frequently Asked Questions",
  image: FaqImage,
  faqs: [
    {
      q: "What are common errors that require TDS correction returns?",
      a: "Common errors requiring TDS correction returns include: Incorrect or invalid PAN of deductees leading to TDS credit mismatches. Wrong challan details such as BSR code, challan serial number, or payment dates. Incorrect deduction rates applied resulting in under or over-deduction. Mistakes in deductee details like name, address, or contact information. Errors in reported payment amounts affecting the TDS calculation. Missing deductee entries that were inadvertently omitted. Each type of error requires specific correction approaches, which our service addresses systematically."
    },
    {
      q: "Is there a time limit for filing TDS correction returns?",
      a: "Yes, TDS correction returns should ideally be filed within two years from the end of the financial year in which the original statement was filed. However, the Income Tax Department may allow corrections even after this period in some cases. The key consideration is that the sooner corrections are filed, the better - especially for ensuring deductees receive proper TDS credit in their Form 26AS. Delayed corrections may result in the deductee facing issues during their income tax assessment or refund processing."
    },
    {
      q: "How many times can I file correction returns for the same quarter?",
      a: "Technically, you can file multiple correction returns for the same quarter if needed. However, each subsequent correction should be filed only after the previous one has been processed by the TDS Centralized Processing Cell (CPC). Filing multiple corrections simultaneously can lead to processing errors and complications. The correction statements are processed sequentially, with each one building upon the previously processed statement. Our service helps track the processing status before initiating subsequent corrections to ensure smooth processing."
    },
    {
      q: "Will filing a TDS correction return remove penalties already imposed?",
      a: "Filing a TDS correction return does not automatically remove penalties already imposed for the original incorrect filing or late submission. However, it may prevent additional penalties from accruing and can be a mitigating factor if you apply for penalty waiver. To request waiver or reduction of penalties, you would need to file a separate application under Section 119(2) or 273A of the Income Tax Act, explaining the reasonable cause for the error and demonstrating that you've taken corrective action. Our service can assist with preparing such waiver applications."
    },
    {
      q: "Do I need to reissue TDS certificates after filing correction returns?",
      a: "Yes, after the correction return is processed by the Income Tax Department, you should generate and issue revised TDS certificates (Form 16/16A) to the affected deductees. This ensures that the certificates reflect the correct TDS information that matches with their Form 26AS. The revised certificates can be downloaded from the TRACES portal once the correction return is processed. Our service includes assistance with generating and distributing these revised certificates to ensure deductees have proper documentation for their tax filing."
    },
    {
      q: "How long does it take for corrections to reflect in Form 26AS?",
      a: "Once a correction return is filed, it typically takes 7-14 business days for the changes to be processed by the TDS CPC and reflected in the deductees' Form 26AS. During peak seasons or for complex corrections involving multiple statements, this may extend to 15-30 days. Various factors affect processing time: the nature and extent of corrections, the volume of entries being corrected, system processing loads at the tax department, and whether any validation errors are encountered. Our service includes follow-up monitoring to ensure corrections are properly processed."
    }
  ],
};
