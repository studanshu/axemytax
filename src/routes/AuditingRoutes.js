// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import AuditingServiceJsonData from "assets/data/ServicePage/AuditingService";
import StatutoryAuditingSubServiceJsonData from "assets/data/SubServicePage/AuditingService/Statutory Auditing";
import TaxAuditingSubServiceJsonData from "assets/data/SubServicePage/AuditingService/Tax Auditing";
import StockAuditingSubServiceJsonData from "assets/data/SubServicePage/AuditingService/Stock Auditing";
import InternalAuditSubServiceJsonData from "assets/data/SubServicePage/AuditingService/Internal Audit";
import FixedAssetVerificationSubServiceJsonData from "assets/data/SubServicePage/AuditingService/Fixed Asset Verification";

const AuditingRoutes = {
  name: "Auditing",
  route: "/services/auditing",
  component: (
    <ServiceContextProvider dict={{ name: "Auditing" }}>
      <ServicePage jsonData={AuditingServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [
    {
      name: "Statutory Auditing",
      route: "/services/auditing/statutory-auditing",      component: (
        <SubServiceContextProvider
          dict={{ name: "Statutory Auditing", serviceName: "Auditing" }}
        >
          <SubServicePage jsonData={StatutoryAuditingSubServiceJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "Tax Auditing",
      route: "/services/auditing/tax-auditing",      component: (
        <SubServiceContextProvider
          dict={{ name: "Tax Auditing", serviceName: "Auditing" }}
        >
          <SubServicePage jsonData={TaxAuditingSubServiceJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "Stock Auditing",
      route: "/services/auditing/stock-auditing",      component: (
        <SubServiceContextProvider
          dict={{ name: "Stock Auditing", serviceName: "Auditing" }}
        >
          <SubServicePage jsonData={StockAuditingSubServiceJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "Internal Audit",
      route: "/services/auditing/internal-audit",      component: (
        <SubServiceContextProvider
          dict={{ name: "Internal Audit", serviceName: "Auditing" }}
        >
          <SubServicePage jsonData={InternalAuditSubServiceJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "Fixed Asset Verification",
      route: "/services/auditing/fixed-asset-verification",      component: (
        <SubServiceContextProvider
          dict={{ name: "Fixed Asset Verification", serviceName: "Auditing" }}
        >
          <SubServicePage jsonData={FixedAssetVerificationSubServiceJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default AuditingRoutes;
