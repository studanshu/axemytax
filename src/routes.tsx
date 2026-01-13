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
import { lazy, Suspense } from "react";

// // Pages
import AboutJsonData from "assets/data/About/index";
import ContactUsJsonData from "assets/data/ContactUs/index";

import About from "pages/About";
import ContactUsPage from "pages/ContactUs";
import LandingPage from "pages/LandingPage";
import PageContextProvider from "./providers/PageContextProvider";
import type { Route } from "types/route.types";

// Import all service routes
import DirectTaxationRoutes from "./routes/DirectTaxationRoutes";
import IndirectTaxationRoutes from "./routes/IndirectTaxationRoutes";
import BusinessIncorporationRoutes from "./routes/BusinessIncorporationRoutes";
import AuditingRoutes from "./routes/AuditingRoutes";
import BookKeepingRoutes from "./routes/BookKeepingRoutes";
import CertificationsRoutes from "./routes/CertificationsRoutes";
import TDSRoutes from "./routes/TDSRoutes";
import DigitalSignaturesRoutes from "./routes/DigitalSignaturesRoutes";
import InvestmentAdvisoryRoutes from "./routes/InvestmentAdvisoryRoutes";
import ConsultingRoutes from "./routes/ConsultingRoutes";
import OthersRoutes from "./routes/OthersRoutes";

// Lazy load BlogOverview to avoid circular dependency
const BlogOverview = lazy(() => import("pages/BlogOverview/BlogOverview"));

const routes: Route[] = [
  {
    name: "Home",
    icon: <HomeIcon />,
    route: "/",
    component: <LandingPage />,
  },
  {
    name: "Services",
    icon: <ServiceIcon />,
    route: "/services",
    columns: 6,
    rowsPerColumn: 2,
    collapse: [
      DirectTaxationRoutes,
      IndirectTaxationRoutes,
      BusinessIncorporationRoutes,
      AuditingRoutes,
      BookKeepingRoutes,
      CertificationsRoutes,
      TDSRoutes,
      DigitalSignaturesRoutes,
      InvestmentAdvisoryRoutes,
      ConsultingRoutes,
      OthersRoutes,
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
        <Suspense fallback={<></>}>
          <BlogOverview />
        </Suspense>
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

export default routes;
