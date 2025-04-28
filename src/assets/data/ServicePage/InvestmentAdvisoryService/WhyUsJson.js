// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert investment guidance",
  title: "Why Choose Our Investment Advisory?",
  reasons: [
    {
      image: reasonOne,
      title: "Tax-Optimized Strategies",
      des: "We create investment strategies that minimize tax implications while maximizing your returns, especially focusing on capital gains optimization.",
    },
    {
      image: reasonTwo,
      title: "Personalized Approach",
      des: "Our recommendations are tailored to your unique financial goals, risk tolerance, and investment timeline.",
    },
    {
      image: reasonThree,
      title: "Comprehensive Research",
      des: "We conduct thorough market research and due diligence to identify the most promising investment opportunities for your portfolio.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Investment Advisory"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
