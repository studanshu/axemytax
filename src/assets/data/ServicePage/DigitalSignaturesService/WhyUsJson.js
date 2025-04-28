// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert digital signature solutions",
  title: "Why Choose Our DSC Services?",
  reasons: [
    {
      image: reasonOne,
      title: "Authorized Partners",
      des: "We work with leading Certifying Authorities in India, ensuring legitimacy and reliability of all Digital Signature Certificates.",
    },
    {
      image: reasonTwo,
      title: "Quick Turnaround",
      des: "Our streamlined process enables faster issuance of Digital Signature Certificates, often within 24 hours of documentation.",
    },
    {
      image: reasonThree,
      title: "Complete Support",
      des: "We provide end-to-end assistance from application to installation and usage guidance for all your digital signing needs.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Digital Signatures"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
