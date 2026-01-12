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

import { forwardRef } from "react";
import { BoxProps } from "@mui/material/Box";
import MKBoxRoot from "components/MKBox/MKBoxRoot";

type ColoredShadow = "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark" | "none";

export interface MKBoxProps extends Omit<BoxProps, "color"> {
  variant?: "contained" | "gradient";
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?: ColoredShadow;
}

const MKBox = forwardRef<HTMLDivElement, MKBoxProps>(
  (
    {
      variant = "contained",
      bgColor = "transparent",
      color = "dark",
      opacity = 1,
      borderRadius = "none",
      shadow = "none",
      coloredShadow = "none",
      ...rest
    },
    ref
  ) => (
    <MKBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
    />
  )
);

MKBox.displayName = "MKBox";

export default MKBox;
