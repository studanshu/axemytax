// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import BusinessIncorporationServiceJsonData from "assets/data/ServicePage/BusinessIncorporationService";
import SoleProprietorshipJsonData from "assets/data/SubServicePage/BusinessIncorporationService/soleProprietorshipIncorporation";
import HUFIncorporationJsonData from "assets/data/SubServicePage/BusinessIncorporationService/hufIncorporation";
import PartnershipIncorporationJsonData from "assets/data/SubServicePage/BusinessIncorporationService/partnershipIncorporation";
import LLPIncorporationJsonData from "assets/data/SubServicePage/BusinessIncorporationService/llpIncorporation";
import PrivateLimitedJsonData from "assets/data/SubServicePage/BusinessIncorporationService/privateLimited";
import PublicLimitedJsonData from "assets/data/SubServicePage/BusinessIncorporationService/publicLimited";

const BusinessIncorporationRoutes = {
  name: "Business Incorporation",
  route: "/services/business-incorporation",
  component: (
    <ServiceContextProvider dict={{ name: "Business Incorporation" }}>
      <ServicePage jsonData={BusinessIncorporationServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [    {
      name: "Sole Proprietorship Incorporation",
      route: "/services/business-incorporation/sole-proprietorship-incorporation",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Sole Proprietorship Incorporation", serviceName: "Business Incorporation" }}
        >
          <SubServicePage jsonData={SoleProprietorshipJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "HUF Incorporation",
      route: "/services/business-incorporation/huf-incorporation",
      component: (
        <SubServiceContextProvider
          dict={{ name: "HUF Incorporation", serviceName: "Business Incorporation" }}
        >
          <SubServicePage jsonData={HUFIncorporationJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "Partnership Incorporation",
      route: "/services/business-incorporation/partnership-incorporation",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Partnership Incorporation", serviceName: "Business Incorporation" }}
        >
          <SubServicePage jsonData={PartnershipIncorporationJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "LLP Incorporation",
      route: "/services/business-incorporation/llp-incorporation",
      component: (
        <SubServiceContextProvider
          dict={{ name: "LLP Incorporation", serviceName: "Business Incorporation" }}
        >
          <SubServicePage jsonData={LLPIncorporationJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "Private Limited",
      route: "/services/business-incorporation/private-limited",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Private Limited", serviceName: "Business Incorporation" }}
        >
          <SubServicePage jsonData={PrivateLimitedJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "Public Limited",
      route: "/services/business-incorporation/public-limited",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Public Limited", serviceName: "Business Incorporation" }}
        >
          <SubServicePage jsonData={PublicLimitedJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default BusinessIncorporationRoutes;
