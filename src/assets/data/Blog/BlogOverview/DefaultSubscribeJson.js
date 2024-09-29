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
      required: true,
    },
    {
      type: "email",
      fieldType: "input",
      spacing: "half",
      label: "Email",
      required: true,
    },
    {
      type: "text",
      fieldType: "input",
      spacing: "half",
      label: "Company Name",
      required: false,
    },
  ],
  buttonText: "Subscribe",
  flexDirection: "row-reverse",
};
