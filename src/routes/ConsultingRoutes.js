// Pages
// import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import GeneralConsultingJsonData from "assets/data/SubServicePage/ConsultingService/generalConsulting";

const ConsultingRoutes = {
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
