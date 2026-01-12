// Pages
import SubServicePage from "pages/SubServicePage";
import SubServiceContextProvider from "../providers/SubServiceContextProvider";

// JSON Data imports
import OtherServicesJsonData from "assets/data/SubServicePage/OthersService/Other Services/index";
import type { Route } from "types/route.types";

const OthersRoutes: Route = {
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
