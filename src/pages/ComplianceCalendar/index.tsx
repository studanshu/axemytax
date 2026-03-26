import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { lazy, Suspense, FC } from "react";
import { ComplianceCalendarJsonData } from "assets/data/ComplianceCalendar/types";

const Hero = lazy(() => import("./Hero"));
const CalendarSection = lazy(() => import("./CalendarSection"));
const Contact = lazy(() => import("./Contact"));

const renderLoader = () => <></>;

interface Props {
  jsonData: ComplianceCalendarJsonData;
}

const ComplianceCalendarPage: FC<Props> = ({ jsonData }) => (
  <>
    <Suspense fallback={renderLoader()}>
      <Hero jsonData={jsonData.Hero} />
    </Suspense>
    <Suspense fallback={renderLoader()}>
      <CalendarSection calendarData={jsonData.Calendar} />
    </Suspense>
    <Suspense fallback={renderLoader()}>
      <Contact jsonData={jsonData.Contact} />
    </Suspense>
    <MKBox pt={2} px={1}>
      <DefaultFooter content={footerRoutes} />
    </MKBox>
  </>
);

export default ComplianceCalendarPage;
