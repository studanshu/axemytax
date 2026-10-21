import { lazy, Suspense } from "react";
import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
const Hero = lazy(() => import("./Hero"));
const UploadSection = lazy(() => import("./UploadSection"));
const Contact = lazy(() => import("./Contact"));
export default function DocumentUpload({ jsonData }) {
  return (
    <>
      <Suspense fallback={null}>
        <Hero jsonData={jsonData.Hero} />
        <UploadSection c={jsonData.Upload} />
        <Contact jsonData={jsonData.Contact} />
      </Suspense>
      <MKBox pt={2} px={1}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
