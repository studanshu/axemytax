// filepath: c:\Users\sbahety\OneDrive\Documents\Personal\axemytax\src\routes\IndirectTaxationRoutes.js
// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import IndirectTaxationServiceJsonData from "assets/data/ServicePage/IndirectTaxationService";
import GSTRegistrationJsonData from "assets/data/SubServicePage/IndirectTaxationService/GST Registration";
import GSTFilingJsonData from "assets/data/SubServicePage/IndirectTaxationService/GST Filing";
import GSTAuditJsonData from "assets/data/SubServicePage/IndirectTaxationService/GST Audit";

const IndirectTaxationRoutes = {
  name: "Indirect Taxation",
  route: "/services/indirect-taxation",
  component: (
    <ServiceContextProvider dict={{ name: "Indirect Taxation" }}>
      <ServicePage jsonData={IndirectTaxationServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [
    {
      name: "GST Registration",
      route: "/services/indirect-taxation/gst-registration",
      component: (
        <SubServiceContextProvider
          dict={{ name: "GST Registration", serviceName: "Indirect Taxation" }}
        >
          <SubServicePage jsonData={GSTRegistrationJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "GST Filing",
      route: "/services/indirect-taxation/gst-filing",
      component: (
        <SubServiceContextProvider
          dict={{ name: "GST Filing", serviceName: "Indirect Taxation" }}
        >
          <SubServicePage jsonData={GSTFilingJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "GST Audit",
      route: "/services/indirect-taxation/gst-audit",
      component: (
        <SubServiceContextProvider
          dict={{ name: "GST Audit", serviceName: "Indirect Taxation" }}
        >
          <SubServicePage jsonData={GSTAuditJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default IndirectTaxationRoutes;
