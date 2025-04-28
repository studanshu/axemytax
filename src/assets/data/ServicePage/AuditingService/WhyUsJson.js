// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert auditing services",
  title: "Why Choose Our Audit Services?",
  reasons: [
    {
      image: reasonOne,
      title: "Professional Expertise",
      des: "Our audit team consists of qualified chartered accountants with specialized industry experience and deep knowledge of regulatory requirements.",
    },
    {
      image: reasonTwo,
      title: "Comprehensive Approach",
      des: "We conduct thorough examinations that go beyond compliance checks to provide valuable insights for business improvement.",
    },
    {
      image: reasonThree,
      title: "Timely Delivery",
      des: "We understand statutory deadlines and ensure timely completion of all audit procedures and filing requirements.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Auditing"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
