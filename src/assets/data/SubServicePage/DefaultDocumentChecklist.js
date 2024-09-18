// Images
import AadharCardImage from "assets/images/default/aadhar.png";
import DrivingLicenseImage from "assets/images/default/driving_license.png";
import PanCardImage from "assets/images/default/pan_card.png";
import PassportImage from "assets/images/default/passport.png";
import VoterIdCardImage from "assets/images/default/voter_id_card.png";
export const DefaultDocumentChecklist = {
  caption: "Prepare with confidence",
  title: "Required Documents Checklist",
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
    {
      title: "Voter ID Card",
      des: "Voter ID card is an identification card issued by the Election Commission of India to all eligible voters, to enable voter identification on Election Day.",
      image: VoterIdCardImage,
    },
    {
      title: "Passport",
      des: "A passport is a travel document, usually issued by a country's government to its citizens, that certifies the identity",
      image: PassportImage,
    },
    {
      title: "Driving License",
      des: "A driving license is an official document that states that a person may operate one or more types of motorized vehicles, such as a motorcycle, car, truck, or a bus, on a public roadway.",
      image: DrivingLicenseImage,
    },
  ],
  buttonText: "Request Callback",
};
