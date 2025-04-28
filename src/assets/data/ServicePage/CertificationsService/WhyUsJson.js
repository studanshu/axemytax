// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert certification services",
  title: "Why Choose Our Certification Services?",
  reasons: [
    {
      image: reasonOne,
      title: "Professional Expertise",
      des: "Our team of experienced chartered accountants ensures accurate and compliant certifications that meet all regulatory requirements.",
    },
    {
      image: reasonTwo,
      title: "Efficient Processing",
      des: "We streamline the certification process to deliver your documents promptly, saving you valuable time and effort.",
    },
    {
      image: reasonThree,
      title: "Comprehensive Support",
      des: "We provide end-to-end assistance, from document preparation to final certification, guiding you through the entire process.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Certifications"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
