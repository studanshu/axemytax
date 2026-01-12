/* eslint-disable react/display-name */
/**
=========================================================
* Material Kit 2 React React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef, ReactNode } from "react";
import { ButtonProps } from "@mui/material/Button";
import MKButtonRoot from "components/MKButton/MKButtonRoot";

type SizeType = "small" | "medium" | "large";

type VariantType = "text" | "contained" | "outlined" | "gradient";

type ColorType =
  | "default"
  | "white"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "light"
  | "dark"
  | "lightBlue"
  | "black75"
  | "black50";

export interface MKButtonProps extends Omit<ButtonProps, "color" | "variant" | "size"> {
  size?: SizeType;
  variant?: VariantType;
  color?: ColorType;
  circular?: boolean;
  iconOnly?: boolean;
  children: ReactNode;
}

const MKButton = forwardRef<HTMLButtonElement, MKButtonProps>(
  (
    {
      color = "white",
      variant = "contained",
      size = "medium",
      circular = false,
      iconOnly = false,
      children,
      ...rest
    },
    ref
  ) => (
    <MKButtonRoot
      {...rest}
      ref={ref}
      color="primary"
      variant={variant === "gradient" ? "contained" : variant}
      size={size}
      ownerState={{ color, variant, size, circular, iconOnly }}
    >
      {children}
    </MKButtonRoot>
  )
);

MKButton.displayName = "MKButton";

export default MKButton;
