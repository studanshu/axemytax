// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import DigitalSignaturesServiceJsonData from "assets/data/ServicePage/DigitalSignaturesService/index";
import Domestic2YearsJsonData from "assets/data/SubServicePage/DigitalSignaturesService/Domestic - 2 years/index";
import Domestic3YearsJsonData from "assets/data/SubServicePage/DigitalSignaturesService/Domestic - 3 years/index";
import International2YearsJsonData from "assets/data/SubServicePage/DigitalSignaturesService/International - 2 years/index";
import International3YearsJsonData from "assets/data/SubServicePage/DigitalSignaturesService/International - 3 years/index";
import type { Route } from "types/route.types";

const DigitalSignaturesRoutes: Route = {
  name: "Digital Signatures",
  route: "/services/digital-signatures",
  component: (
    <ServiceContextProvider dict={{ name: "Digital Signatures" }}>
      <ServicePage jsonData={DigitalSignaturesServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [
    {
      name: "Domestic - 2 years",
      route: "/services/digital-signatures/domestic-2-years",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Domestic - 2 years", serviceName: "Digital Signatures" }}
        >
          <SubServicePage jsonData={Domestic2YearsJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "Domestic - 3 years",
      route: "/services/digital-signatures/domestic-3-years",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Domestic - 3 years", serviceName: "Digital Signatures" }}
        >
          <SubServicePage jsonData={Domestic3YearsJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "International - 2 years",
      route: "/services/digital-signatures/international-2-years",
      component: (
        <SubServiceContextProvider
          dict={{ name: "International - 2 years", serviceName: "Digital Signatures" }}
        >
          <SubServicePage jsonData={International2YearsJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "International - 3 years",
      route: "/services/digital-signatures/international-3-years",
      component: (
        <SubServiceContextProvider
          dict={{ name: "International - 3 years", serviceName: "Digital Signatures" }}
        >
          <SubServicePage jsonData={International3YearsJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default DigitalSignaturesRoutes;
