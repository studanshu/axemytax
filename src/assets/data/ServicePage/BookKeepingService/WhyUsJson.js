// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert bookkeeping services",
  title: "Why Choose Our Bookkeeping Services?",
  reasons: [
    {
      image: reasonOne,
      title: "Accuracy & Reliability",
      des: "Our trained bookkeepers ensure precise recording of all financial transactions, eliminating errors and inconsistencies.",
    },
    {
      image: reasonTwo,
      title: "Time & Cost Efficiency",
      des: "Outsourcing your bookkeeping to us saves you the time and expense of handling it in-house or hiring full-time staff.",
    },
    {
      image: reasonThree,
      title: "Financial Insights",
      des: "We provide clear, organized financial data that helps you make informed business decisions and identify growth opportunities.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Book Keeping"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
