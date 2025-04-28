// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import CertificationsServiceJsonData from "assets/data/ServicePage/CertificationsService";
import LowerTDSCertificateJsonData from "assets/data/SubServicePage/CertificationsService/Lower TDS Certificate";
import RepatriationCertificateJsonData from "assets/data/SubServicePage/CertificationsService/Repatriation Certificate";
import HousePropertyCertificateJsonData from "assets/data/SubServicePage/CertificationsService/House Property Certificate";
import NetWorthCertificateJsonData from "assets/data/SubServicePage/CertificationsService/Net Worth Certificate";
import OtherAttestationsJsonData from "assets/data/SubServicePage/CertificationsService/Other Attestations";

const CertificationsRoutes = {
  name: "Certifications",
  route: "/services/certifications",
  component: (
    <ServiceContextProvider dict={{ name: "Certifications" }}>
      <ServicePage jsonData={CertificationsServiceJsonData} />
    </ServiceContextProvider>
  ),  collapse: [
    {
      name: "Lower TDS Certificate",
      route: "/services/certifications/lower-tds-certificate",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Lower TDS Certificate", serviceName: "Certifications" }}
        >
          <SubServicePage jsonData={LowerTDSCertificateJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "Repatriation Certificate",
      route: "/services/certifications/repatriation-certificate",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Repatriation Certificate", serviceName: "Certifications" }}
        >
          <SubServicePage jsonData={RepatriationCertificateJsonData} />
        </SubServiceContextProvider>
      ),
    },{
      name: "House Property Certificate",
      route: "/services/certifications/house-property-certificate",
      component: (
        <SubServiceContextProvider
          dict={{ name: "House Property Certificate", serviceName: "Certifications" }}
        >
          <SubServicePage jsonData={HousePropertyCertificateJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "Net Worth Certificate",
      route: "/services/certifications/net-worth-certificate",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Net Worth Certificate", serviceName: "Certifications" }}
        >
          <SubServicePage jsonData={NetWorthCertificateJsonData} />
        </SubServiceContextProvider>
      ),
    },    {
      name: "Other Attestations",
      route: "/services/certifications/other-attestations",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Other Attestations", serviceName: "Certifications" }}
        >
          <SubServicePage jsonData={OtherAttestationsJsonData} />
        </SubServiceContextProvider>
      ),
    },
  ],
};

export default CertificationsRoutes;
