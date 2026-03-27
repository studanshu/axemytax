import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import ReviewsSection from "components/Custom/ReviewsSection";
import PaymentSection from "components/Custom/PaymentSection";
import { ReviewsData } from "assets/data/Reviews/index";
import { PaymentConfig } from "assets/data/Payment/index";
import { Suspense, lazy, FC } from "react";

interface ContactUsJsonData {
  Field: any;
  Details: any;
}

interface ContactUsProps {
  jsonData: ContactUsJsonData;
}

const ContactDetails = lazy(() => import("./ContactDetails"));
const ContactField = lazy(() => import("./ContactField"));

const ContactUs: FC<ContactUsProps> = ({ jsonData }) => {
  return (
    <>
      <Suspense fallback={<></>}>
        <ContactDetails jsonData={jsonData.Details} />
      </Suspense>
      <Suspense fallback={<></>}>
        <ContactField jsonData={jsonData.Field} />
      </Suspense>
      <ReviewsSection jsonData={ReviewsData} />
      <PaymentSection jsonData={PaymentConfig} />
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default ContactUs;
