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

import { forwardRef, ReactNode } from "react";
import { TypographyProps } from "@mui/material/Typography";
import MKTypographyRoot from "components/MKTypography/MKTypographyRoot";

type ColorType =
  | "inherit"
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "light"
  | "dark"
  | "text"
  | "white"
  | "blackAlt"
  | "black75"
  | "black50"
  | "lightBlue"
  | "black";

type FontWeightType = false | "light" | "regular" | "medium" | "bold";

type TextTransformType = false | "none" | "capitalize" | "uppercase" | "lowercase";

type VerticalAlignType =
  | "unset"
  | "baseline"
  | "sub"
  | "super"
  | "text-top"
  | "text-bottom"
  | "middle"
  | "top"
  | "bottom";

export interface MKTypographyProps extends Omit<TypographyProps, "color" | "fontWeight" | "textTransform" | "verticalAlign"> {
  color?: ColorType;
  fontWeight?: FontWeightType;
  textTransform?: TextTransformType;
  verticalAlign?: VerticalAlignType;
  textGradient?: boolean;
  opacity?: number;
  children: ReactNode;
  letterSpacing?: number;
}

const MKTypography = forwardRef<HTMLSpanElement, MKTypographyProps>(
  (
    {
      color = "dark",
      fontWeight = false,
      textTransform = false,
      verticalAlign = "unset",
      textGradient = false,
      opacity = 1,
      letterSpacing = 0,
      children,
      ...rest
    },
    ref
  ) => (
    <MKTypographyRoot
      {...rest}
      ref={ref}
      ownerState={{
        color,
        textTransform,
        verticalAlign,
        fontWeight,
        opacity,
        textGradient,
        letterSpacing,
      } as any}
    >
      {children}
    </MKTypographyRoot>
  )
);

MKTypography.displayName = "MKTypography";

export default MKTypography;
