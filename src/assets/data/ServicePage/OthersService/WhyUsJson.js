// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Specialized professional services",
  title: "Why Choose Us for Specialized Needs?",
  reasons: [
    {
      image: reasonOne,
      title: "Expert Versatility",
      des: "Our team has diverse expertise across multiple financial disciplines, allowing us to handle specialized requirements with professional competence.",
    },
    {
      image: reasonTwo,
      title: "Customized Approach",
      des: "We develop tailored solutions for your unique requirements, rather than offering one-size-fits-all services.",
    },
    {
      image: reasonThree,
      title: "Ongoing Support",
      des: "Beyond initial implementation, we provide continued guidance and support as your needs evolve over time.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Others"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
