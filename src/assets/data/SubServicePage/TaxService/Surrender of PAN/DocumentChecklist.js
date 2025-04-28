import AadharCardImage from "assets/images/default/aadhar.png";
import PanCardImage from "assets/images/default/pan_card.png";
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
      title: "PAN Card",
      des: "Permanent Account Number (PAN) card is a 10-digit alphanumeric number, issued in the form of a laminated card, by the Income Tax Department of India.",
      image: PanCardImage,
    },
    {
      title: "Aadhar Card",
      des: "Aadhar is a 12-digit unique identification number issued by the Unique Identification Authority of India (UIDAI).",
      image: AadharCardImage,
    },
  ],
};
