import FaqImage from "assets/images/default/FAQ.png";
import DefaultFormFields from "../Form/DefaultFormFields";
const ContactFieldJson = {
  caption: "Type In Your Query and We'll Get Back to You",
  title: "We're Here to help",
  image: FaqImage,
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
    DefaultFormFields.companyName,
    DefaultFormFields.service,
    DefaultFormFields.businessType,
    DefaultFormFields.budget,
    DefaultFormFields.query,
  ],
  buttonText: "Send Message",
  flexDirection: "row-reverse",
};

export { ContactFieldJson };
