import { useEffect } from "react";

// react-router components
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Theme
import theme from "./assets/theme";

// Analytics
import AnalyticsProvider from "./providers/AnalyticsProvider";
import EventTrackingProvider from "./providers/EventTrackingProvider";
import { usePageTracking } from "./hooks/usePageTracking";

// Material Kit 2 React routes
import BlogContent from "./pages/BlogContent/BlogContent";
import NotFound from "./pages/NotFound";
import routes from "./routes";

const queryClient = new QueryClient();

// Inner App component to use analytics hooks
function AppRoutes() {
  const { pathname, hash, key } = useLocation();

  // Automatic page tracking on route changes
  usePageTracking();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      let allRoutes = [];
      if (route.route) {
        allRoutes.push(
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      if (route.collapse) {
        allRoutes = allRoutes.concat(getRoutes(route.collapse));
      }

      return allRoutes.length === 0 ? null : allRoutes;
    });

  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="/blog/:slug" element={<BlogContent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AnalyticsProvider
          trackingId={process.env.REACT_APP_GA_TRACKING_ID}
          debug={process.env.NODE_ENV === "development"}
        >
          <EventTrackingProvider>
            <CssBaseline />
            <AppRoutes />
          </EventTrackingProvider>
        </AnalyticsProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
