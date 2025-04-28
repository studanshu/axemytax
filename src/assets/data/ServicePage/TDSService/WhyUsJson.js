// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert TDS services",
  title: "Why Choose Our TDS Services?",
  reasons: [
    {
      image: reasonOne,
      title: "Regulatory Expertise",
      des: "Our team stays updated with the latest TDS regulations and tax provisions to ensure complete compliance.",
    },
    {
      image: reasonTwo,
      title: "End-to-End Solutions",
      des: "From TAN registration to TDS return filing and Form 16A/16B generation, we provide comprehensive services.",
    },
    {
      image: reasonThree,
      title: "Error-Free Processing",
      des: "Our systematic approach ensures accurate calculations, timely deposits, and proper documentation.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["TDS"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
