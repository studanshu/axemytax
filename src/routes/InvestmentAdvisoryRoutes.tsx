// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import InvestmentAdvisoryServiceJsonData from "assets/data/ServicePage/InvestmentAdvisoryService/index";
import CapitalGainsJsonData from "assets/data/SubServicePage/InvestmentAdvisoryService/Capital Gains/index";
import CorporateFDsJsonData from "assets/data/SubServicePage/InvestmentAdvisoryService/Create Corporate FDs/index";
import type { Route } from "types/route.types";

const InvestmentAdvisoryRoutes: Route = {
  name: "Investment Advisory",
  route: "/services/investment-advisory",
  component: (
    <ServiceContextProvider dict={{ name: "Investment Advisory" }}>
      <ServicePage jsonData={InvestmentAdvisoryServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [
    {
      name: "Capital Gains",
      route: "/services/investment-advisory/capital-gains",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Capital Gains", serviceName: "Investment Advisory" }}
        >
          <SubServicePage jsonData={CapitalGainsJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "Create Corporate FDs",
      route: "/services/investment-advisory/corporate-fds",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Create Corporate FDs", serviceName: "Investment Advisory" }}
        >
          <SubServicePage jsonData={CorporateFDsJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default InvestmentAdvisoryRoutes;
