// Pages
import SubServicePage from "pages/SubServicePage";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import GeneralConsultingJsonData from "assets/data/SubServicePage/ConsultingService/generalConsulting/index";
import type { Route } from "types/route.types";

const ConsultingRoutes: Route = {
  name: "Consulting",
  route: "/services/consulting",
  component: (
    <SubServiceContextProvider
      dict={{ name: "General Consulting", serviceName: "Consulting" }}
    >
      <SubServicePage jsonData={GeneralConsultingJsonData} />
    </SubServiceContextProvider>
  ),
  collapse: [],
};

export default ConsultingRoutes;
