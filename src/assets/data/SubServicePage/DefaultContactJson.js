// Images
import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";
import DefaultFormFields from "../Form/DefaultFormFields";

export const DefaultContactJson = {
  caption: "We'd love to hear from you",
  title: "Contact Us",
  image: HeroImage,
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.companyName,
    DefaultFormFields.email,
    DefaultFormFields.query,
  ],
  buttonText: "Send Inquiry",
  flexDirection: "row",
};
