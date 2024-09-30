// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert service, unmatched",
  title: "Why Choose Us?",
  reasons: [
    {
      image: reasonOne,
      title: "Trustworthy results",
      des: "Our team of Chartered Accountants is ready to assist you in claiming all eligible deductions and credits.",
    },
    {
      image: reasonTwo,
      title: "Cost-effective Prices",
      des: "We offers budget-friendly tax filing options for all tax scenarios, ensuring peace of mind during the tax season.",
    },
    {
      image: reasonThree,
      title: "Suitable time frame",
      des: "Our dedicated professional takes care of your tax return, with just your final approval needed before filing the returns.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  options: DefaultFormFields.service.options.Taxation.options,
  dropdownBusiness: DefaultFormFields.businessType,
  dropdownBudget: DefaultFormFields.budget,
};
