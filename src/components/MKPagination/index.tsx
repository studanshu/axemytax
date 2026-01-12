/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { createContext, forwardRef, useContext, ReactNode } from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Custom styles for MKPagination
import MKPaginationItemRoot from "components/MKPagination/MKPaginationItemRoot";

interface PaginationContextType {
  variant?: "gradient" | "contained";
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "blackAlt"
    | "black75"
    | "black50"
    | "lightBlue";
  size?: "small" | "medium" | "large";
}

// The Pagination main context
const Context = createContext<PaginationContextType | null>(null);

export interface MKPaginationProps {
  item?: boolean;
  variant?: "gradient" | "contained";
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "blackAlt"
    | "black75"
    | "black50"
    | "lightBlue";
  size?: "small" | "medium" | "large";
  active?: boolean;
  children: ReactNode;
  placement?: "left" | "right" | "center";
}

const MKPagination = forwardRef<HTMLButtonElement | HTMLUListElement, MKPaginationProps>(
  (
    {
      item = false,
      variant = "gradient",
      color = "info",
      size = "medium",
      active = false,
      children,
      placement = "right",
      ...rest
    },
    ref
  ) => {
    const tempContext = useContext(Context);
    const context = item ? tempContext : null;
    const paginationSize = context ? context.size : null;
    let placementValue: "flex-end" | "flex-start" | "center" = "flex-end";

    if (placement === "left") {
      placementValue = "flex-start";
    } else if (placement === "center") {
      placementValue = "center";
    }

    return (
      <Context.Provider value={{ variant, color, size }}>
        {item ? (
          <MKPaginationItemRoot
            {...rest}
            ref={ref as React.Ref<HTMLButtonElement>}
            variant={active ? context?.variant || "gradient" : "outlined"}
            color={(active ? context?.color || "info" : "secondary") as any}
            iconOnly
            circular
            ownerState={{ variant, active, paginationSize }}
          >
            {children}
          </MKPaginationItemRoot>
        ) : (
          <MKBox
            display="flex"
            justifyContent={placementValue}
            alignItems="center"
            sx={{ listStyle: "none" }}
          >
            {children}
          </MKBox>
        )}
      </Context.Provider>
    );
  }
);

MKPagination.displayName = "MKPagination";

export default MKPagination;
