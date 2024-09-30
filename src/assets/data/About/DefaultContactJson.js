// Images
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";
import DefaultFormFields, { getFieldPayload } from "../Form/DefaultFormFields";

export const DefaultContactJson = {
  caption: "We'd love to hear from you",
  title: "Contact Us",
  image: HeroImage,
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.companyName,
    DefaultFormFields.email,
    getFieldPayload("query", false),
  ],
  buttonText: "Send Inquiry",
  flexDirection: "row-reverse",
};
