// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import TDSServiceJsonData from "assets/data/ServicePage/TDSService";
import TANCreationJsonData from "assets/data/SubServicePage/TDSService/TAN Creation";
import DomesticPropertyTDSJsonData from "assets/data/SubServicePage/TDSService/TDS on Domestic Sale of Property";
import RentTDSJsonData from "assets/data/SubServicePage/TDSService/TDS on Rent";
import NRIPropertyTDSJsonData from "assets/data/SubServicePage/TDSService/TDS on Purchase of Property from NRI";
import TDSReturnFilingJsonData from "assets/data/SubServicePage/TDSService/TDS Return Filing";
import TDSCorrectionJsonData from "assets/data/SubServicePage/TDSService/TDS Correction Returns";
import FormCertificatesJsonData from "assets/data/SubServicePage/TDSService/Form 16A & 16B";

const TDSRoutes = {
  name: "TDS",
  route: "/services/tds",
  component: (
    <ServiceContextProvider dict={{ name: "TDS" }}>
      <ServicePage jsonData={TDSServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [    {
      name: "TAN Creation",
      route: "/services/tds/tan-creation",
      component: (
        <SubServiceContextProvider
          dict={{ name: "TAN Creation", serviceName: "TDS" }}
        >
          <SubServicePage jsonData={TANCreationJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "TDS on Domestic Sale of Property",
      route: "/services/tds/domestic-sale-of-property",
      component: (
        <SubServiceContextProvider
          dict={{ name: "TDS on Domestic Sale of Property", serviceName: "TDS" }}
        >
          <SubServicePage jsonData={DomesticPropertyTDSJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "TDS on Rent",
      route: "/services/tds/tds-on-rent",
      component: (
        <SubServiceContextProvider
          dict={{ name: "TDS on Rent", serviceName: "TDS" }}
        >
          <SubServicePage jsonData={RentTDSJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "TDS on Purchase of Property from NRI",
      route: "/services/tds/purchase-of-property-from-nri",
      component: (
        <SubServiceContextProvider
          dict={{ name: "TDS on Purchase of Property from NRI", serviceName: "TDS" }}
        >
          <SubServicePage jsonData={NRIPropertyTDSJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "TDS Return Filing",
      route: "/services/tds/return-filing",
      component: (
        <SubServiceContextProvider
          dict={{ name: "TDS Return Filing", serviceName: "TDS" }}
        >
          <SubServicePage jsonData={TDSReturnFilingJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "TDS Correction Returns",
      route: "/services/tds/correction-returns",
      component: (
        <SubServiceContextProvider
          dict={{ name: "TDS Correction Returns", serviceName: "TDS" }}
        >
          <SubServicePage jsonData={TDSCorrectionJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "Form 16A & 16B",
      route: "/services/tds/form-16a-and-16b",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Form 16A & 16B", serviceName: "TDS" }}
        >
          <SubServicePage jsonData={FormCertificatesJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default TDSRoutes;
