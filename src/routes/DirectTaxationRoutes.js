// Pages
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import DirectTaxationServiceJsonData from "assets/data/ServicePage/DirectTaxationService";
import DirectTaxationAppealsAndAssessmentSubServiceJsonData from "assets/data/SubServicePage/TaxService/Appeals & Assessment";
import DirectTaxationChangeInParticularsOfPanSubServiceJsonData from "assets/data/SubServicePage/TaxService/Change in Particulars of PAN";
import DirectTaxationDefectiveReturnSubServiceJsonData from "assets/data/SubServicePage/TaxService/Defective Return";
import DirectTaxationFreshITRFilingSubServiceJsonData from "assets/data/SubServicePage/TaxService/Fresh ITR Filing";
import DirectTaxationNewPanSubServiceJsonData from "assets/data/SubServicePage/TaxService/New PAN";
import DirectTaxationPanActivationSubServiceJsonData from "assets/data/SubServicePage/TaxService/PAN Activation";
import DirectTaxationPreviousYearsITRSubServiceJsonData from "assets/data/SubServicePage/TaxService/Previous Years ITR Filing";
import DirectTaxationRectificationReturnSubServiceJsonData from "assets/data/SubServicePage/TaxService/Rectification Return";
import DirectTaxationRelocationOfPanSubServiceJsonData from "assets/data/SubServicePage/TaxService/Relocation of PAN";
import DirectTaxationRevisedReturnSubServiceJsonData from "assets/data/SubServicePage/TaxService/Revised Return";
import DirectTaxationSurrenderOfPanSubServiceJsonData from "assets/data/SubServicePage/TaxService/Surrender of PAN";

const DirectTaxationRoutes = {
  name: "Direct Taxation",
  route: "/services/direct-taxation",
  component: (
    <ServiceContextProvider dict={{ name: "Direct Taxation" }}>
      <ServicePage jsonData={DirectTaxationServiceJsonData} />
    </ServiceContextProvider>
  ),
  collapse: [
    {
      name: "Appeals & Assessment",
      route: "/services/direct-taxation/appeals-and-assessment",
      component: (
        <SubServiceContextProvider
          dict={{ name: "Appeals & Assessment", serviceName: "Direct Taxation" }}
        >
          <SubServicePage jsonData={DirectTaxationAppealsAndAssessmentSubServiceJsonData} />
        </SubServiceContextProvider>
      ),
    },
    {
      name: "PAN Services",
      collapse: [
        {
          name: "Change in Particulars of PAN",
          route: "/services/direct-taxation/change-in-particulars-of-pan",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Change in Particulars of PAN", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationChangeInParticularsOfPanSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "New PAN",
          route: "/services/direct-taxation/new-pan",
          component: (
            <SubServiceContextProvider dict={{ name: "New PAN", serviceName: "Direct Taxation" }}>
              <SubServicePage jsonData={DirectTaxationNewPanSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "PAN Activation",
          route: "/services/direct-taxation/pan-activation",
          component: (
            <SubServiceContextProvider
              dict={{ name: "PAN Activation", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationPanActivationSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "Relocation of PAN",
          route: "/services/direct-taxation/relocation-of-pan",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Relocation of PAN", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationRelocationOfPanSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "Surrender of PAN",
          route: "/services/direct-taxation/surrender-of-pan",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Surrender of PAN", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationSurrenderOfPanSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
      ],
    },
    {
      name: "ITR Filing",
      collapse: [
        {
          name: "Defective Return",
          route: "/services/direct-taxation/defective-return",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Defective Return", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationDefectiveReturnSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "Fresh ITR Filing",
          route: "/services/direct-taxation/fresh-itr-filing",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Fresh ITR Filing", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationFreshITRFilingSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "Previous Year's ITR Filing",
          route: "/services/direct-taxation/previous-years-itr-filing",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Previous Year's ITR Filing", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationPreviousYearsITRSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "Rectification Return",
          route: "/services/direct-taxation/rectification-return",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Rectification Return", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationRectificationReturnSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
        {
          name: "Revised Return",
          route: "/services/direct-taxation/revised-return",
          component: (
            <SubServiceContextProvider
              dict={{ name: "Revised Return", serviceName: "Direct Taxation" }}
            >
              <SubServicePage jsonData={DirectTaxationRevisedReturnSubServiceJsonData} />
            </SubServiceContextProvider>
          ),
        },
      ],
    }
  ],
};

export default DirectTaxationRoutes;
