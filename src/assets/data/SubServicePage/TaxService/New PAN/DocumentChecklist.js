
import AadharCardImage from "assets/images/default/aadhar.png";
import PassportImage from "assets/images/default/passport.png";
import DefaultFormFields from "../../../Form/DefaultFormFields";

export const DocumentChecklist = {
  inputs: [
    DefaultFormFields.name,
    DefaultFormFields.phone,
    DefaultFormFields.email,
  ],
  buttonText: "Request Callback",
  documents: [
    {
      title: "Aadhar Card",
      des: "Aadhar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI).",
      image: AadharCardImage,
    },
    {
      title: "Passport",
      des: "A passport is a travel document, usually issued by a country's government to its citizens, that certifies the identity",
      image: PassportImage,
    },
  ],
};

