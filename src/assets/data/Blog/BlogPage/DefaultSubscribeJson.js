// Images
import { getFieldPayload } from "assets/data/Form/DefaultFormFields";
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const DefaultSubscribeJson = {
  caption: "Enjoyed Reading the Blog",
  title: "Subscribe",
  image: HeroImage,
  inputs: [getFieldPayload("name", false), getFieldPayload("email", true)],
  buttonText: "Subscribe",
  flexDirection: "row-reverse",
};
