// Images
import DefaultFormFields, {
  getFieldPayload,
} from "assets/data/Form/DefaultFormFields";
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const DefaultSubscribeJson = {
  caption: "Enjoyed Reading the Blog",
  title: "Subscribe",
  image: HeroImage,
  inputs: [
    DefaultFormFields.name,
    getFieldPayload("email", true),
    DefaultFormFields.companyName,
  ],
  buttonText: "Subscribe",
  flexDirection: "row-reverse",
};
