// Images
import reasonOne from "assets/images/default/reason_1.png";
import reasonTwo from "assets/images/default/reason_2.png";
import reasonThree from "assets/images/default/reason_3.png";
import DefaultFormFields from "../../Form/DefaultFormFields";

export const WhyUsJson = {
  caption: "Expert GST service, unmatched",
  title: "Why Choose Us for GST Services?",
  reasons: [
    {
      image: reasonOne,
      title: "GST Expertise",
      des: "Our team of GST specialists stays updated with the latest changes in GST laws and regulations to ensure complete compliance.",
    },
    {
      image: reasonTwo,
      title: "Time & Cost Efficiency",
      des: "Our streamlined processes ensure timely filings and registrations at competitive rates, saving you both time and money.",
    },
    {
      image: reasonThree,
      title: "End-to-End Support",
      des: "From registration to filing returns and audit preparation, we provide comprehensive GST solutions tailored to your business needs.",
    },
  ],
  secondaryCaption: "Select all that apply",
  secondaryTitle: "I require help with",
  checkboxes: {
    ...DefaultFormFields.checkboxCollection,
    options: DefaultFormFields.service.options["Indirect Taxation"].options,
  },
  dropdownBusiness: { ...DefaultFormFields.businessType, required: true },
  email: DefaultFormFields.email,
};
