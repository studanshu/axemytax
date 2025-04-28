// Pages
// import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
// import ServiceContextProvider from "../providers/ServiceContextProvider";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
// import OthersServiceJsonData from "assets/data/ServicePage/OthersService";
import OtherServicesJsonData from "assets/data/SubServicePage/OthersService/Other Services";

const OthersRoutes = {
  name: "Others",
  route: "/services/others",
  component: (
        <SubServiceContextProvider
          dict={{ name: "Other Services", serviceName: "Others" }}
        >
          <SubServicePage jsonData={OtherServicesJsonData} />
        </SubServiceContextProvider>
  ),
  collapse: [],
};

export default OthersRoutes;
