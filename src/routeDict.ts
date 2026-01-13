/**
 * Route Dictionary - Built directly from route configuration
 * This avoids circular dependency by not importing routes.tsx
 */

// Define route structure for dictionary building (without components)
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

const routeStructure = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Services",
    route: "/services",
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
    route: "/about",
  },
  {
    name: "Blogs",
    route: "/blogs",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

const getRouteDict = (currentRoute: any[]): any => {
  return currentRoute.reduce((acc: any, route) => {
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

// Build immediately - no circular dependency
export const routeDict: any = getRouteDict(JSON.parse(JSON.stringify(routeStructure)));
