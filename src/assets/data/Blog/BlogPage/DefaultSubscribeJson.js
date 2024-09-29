// Images
import HeroImage from "assets/images/SubServicePage/TaxService/DirectTaxation/hero.png";

export const DefaultSubscribeJson = {
  caption: "Enjoyed Reading the Blog",
  title: "Subscribe",
  image: HeroImage,
  inputs: [
    {
      type: "text",
      fieldType: "input",
      spacing: "half",
      label: "Name",
      required: false,
    },
    {
      type: "email",
      fieldType: "input",
      spacing: "half",
      label: "Email",
      required: true,
    },
  ],
  buttonText: "Subscribe",
  flexDirection: "row-reverse",
};
