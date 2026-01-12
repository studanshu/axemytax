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

import { forwardRef, ReactElement } from "react";

// @mui material components
import { LinearProgressProps } from "@mui/material/LinearProgress";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Custom styles for MKProgress
import MKProgressRoot from "components/MKProgress/MKProgressRoot";

export interface MKProgressProps extends Omit<LinearProgressProps, "variant" | "color"> {
  variant?: "contained" | "gradient";
  color?:
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
  value?: number;
  label?: boolean;
}

const MKProgress = forwardRef<HTMLSpanElement, MKProgressProps>(
  ({ variant = "contained", color = "info", value = 0, label = false, ...rest }, ref): ReactElement => (
    <>
      {label && (
        <MKTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </MKTypography>
      )}
      <MKProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

MKProgress.displayName = "MKProgress";

export default MKProgress;
