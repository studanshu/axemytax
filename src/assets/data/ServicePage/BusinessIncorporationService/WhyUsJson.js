// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert incorporation services",
  title: "Why Choose Us for Business Formation?",
  reasons: [
    {
      image: reasonOne,
      title: "Expert Guidance",
      des: "Our team of incorporation specialists has extensive experience with all business structures and stays current with regulatory changes.",
    },
    {
      image: reasonTwo,
      title: "Comprehensive Solutions",
      des: "We handle everything from name reservation and documentation to post-incorporation compliance requirements.",
    },
    {
      image: reasonThree,
      title: "Cost-effective Services",
      des: "Our transparent pricing ensures you receive professional incorporation services without unexpected costs or hidden fees.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I need help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Business Incorporation"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
