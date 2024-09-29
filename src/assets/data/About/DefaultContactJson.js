// Images
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const DefaultContactJson = {
  caption: "We'd love to hear from you",
  title: "Contact Us",
  image: HeroImage,
  inputs: [
    {
      type: "text",
      fieldType: "input",
      spacing: "half",
      label: "Name",
      required: true,
    },
    {
      type: "tel",
      fieldType: "input",
      spacing: "half",
      label: "Phone",
      required: true,
    },
    {
      type: "text",
      fieldType: "input",
      spacing: "half",
      label: "Company Name",
      required: false,
    },
    {
      type: "email",
      fieldType: "input",
      spacing: "half",
      label: "Email",
      required: false,
    },
    {
      type: "text",
      fieldType: "textarea",
      spacing: "full",
      label: "We're here to help. Tell us about your inquiry",
      required: false,
    },
  ],
  buttonText: "Send Inquiry",
  flexDirection: "row-reverse",
};
