import { useEffect } from "react";
import * as React from "react";

// react-router components
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";

// @mui material components
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

// Theme
import theme from "./assets/theme";

// Material Kit 2 React routes
import BlogContent from "./pages/BlogContent";
import NotFound from "./pages/NotFound";
import routes from "./routes";

const queryClient = new QueryClient();

export default function App() {
  const { pathname, hash, key } = useLocation();

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

  const getRoutes = (allRoutes: any[]): React.ReactElement[] => {
    return allRoutes.flatMap((route) => {
      const routeElements: React.ReactElement[] = [];
      
      if (route.route) {
        routeElements.push(
          <Route
            path={route.route}
            element={route.component}
            key={route.key || route.route}
          />
        );
      }

      if (route.collapse) {
        routeElements.push(...getRoutes(route.collapse));
      }

      routeElements.push(
        <Route
          path="/blog/:category/:relatedType/:contentId"
          element={<BlogContent />}
          key={`blog-${route.key || route.route || route.name}`}
        />
      );
      
      return routeElements;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
