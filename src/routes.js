/** 
  All of the routes are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import { ContactPageOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import ServiceIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import RssFeedIcon from "@mui/icons-material/RssFeed";

// // Pages
import AboutJsonData from "assets/data/About";
import BlogOverviewJsonData from "assets/data/Blog/BlogOverview";
import ContactUsJsonData from "assets/data/ContactUs";
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
import About from "pages/About";
import BlogOverview from "pages/BlogOverview";
import ContactUsPage from "pages/ContactUs";
import LandingPage from "pages/LandingPage";
import ServicePage from "pages/ServicePage";
import SubServicePage from "pages/SubServicePage";
import PageContextProvider from "./providers/PageContextProvider";
import ServiceContextProvider from "./providers/ServiceContextProvider";
import SubServiceContextProvider from "./providers/SubServiceContextProvider";
const routes = [
  {
    name: "Home",
    icon: <HomeIcon />,
    route: "/",
    component: <LandingPage />,
  },
  {
    name: "Services",
    icon: <ServiceIcon />,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
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
    ],
  },
  {
    name: "About",
    icon: <AccountCircleIcon />,
    route: "/about",
    component: (
      <PageContextProvider dict={{ name: "About" }}>
        <About jsonData={AboutJsonData} />
      </PageContextProvider>
    ),
  },
  {
    name: "Blogs",
    icon: <RssFeedIcon />,
    route: "/blogs",
    component: (
      <PageContextProvider dict={{ name: "BlogOverview" }}>
        <BlogOverview jsonData={BlogOverviewJsonData} />
      </PageContextProvider>
    ),
  },
  {
    name: "Contact",
    icon: <ContactPageOutlined />,
    route: "/contact",
    component: (
      <PageContextProvider dict={{ name: "Contact" }}>
        <ContactUsPage jsonData={ContactUsJsonData} />
      </PageContextProvider>
    ),
  },
];

const getRouteDict = (currentRoute) => {
  return currentRoute.reduce((acc, route) => {
    if (route.collapse) {
      acc[route.name] = getRouteDict(route.collapse);
    }

    if (route.route) {
      if (typeof acc[route.name] === "object") {
        acc[route.name]["target"] = route.route;
      } else {
        acc[route.name] = route.route;
      }
    }
    return acc;
  }, {});
};
const routeDict = getRouteDict(JSON.parse(JSON.stringify(routes)));
export { routeDict };

export default routes;
