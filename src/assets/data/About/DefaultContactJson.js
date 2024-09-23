// Images
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const DefaultContactJson = {
  caption: "We'd love to hear from you",
  title: "Contact Us",
  image: HeroImage,
  inputs: [
    {
      label: "Name",
      required: true,
    },
    {
      label: "Phone",
      required: true,
    },
    {
      label: "Company Name",
      required: false,
    },
    {
      label: "Email",
      required: false,
    },
    {
      label: "We're here to help. Tell us about your inquiry",
      required: false,
      isTextArea: true,
    },
  ],
  buttonText: "Send Inquiry",
  flexDirection: "row",
};
