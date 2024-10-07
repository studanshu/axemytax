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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for MKTypography
import MKTypographyRoot from "components/MKTypography/MKTypographyRoot";

const MKTypography = forwardRef(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      textGradient,
      opacity,
      children,
      letterSpacing,
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
      }}
    >
      {children}
    </MKTypographyRoot>
  )
);

MKTypography.displayName = "MKTypography";

// Setting default values for the props of MKTypography
MKTypography.defaultProps = {
  color: "dark",
  fontWeight: false,
  textTransform: false,
  verticalAlign: "unset",
  textGradient: false,
  opacity: 1,
  letterSpacing: 0,
};

// Typechecking props for the MKTypography
MKTypography.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "white",
    "blackAlt",
    "black75",
    "black50",
    "lightBlue",
    "black"
  ]),
  fontWeight: PropTypes.oneOf([false, "light", "regular", "medium", "bold"]),
  textTransform: PropTypes.oneOf([
    false,
    "none",
    "capitalize",
    "uppercase",
    "lowercase",
  ]),
  verticalAlign: PropTypes.oneOf([
    "unset",
    "baseline",
    "sub",
    "super",
    "text-top",
    "text-bottom",
    "middle",
    "top",
    "bottom",
  ]),
  textGradient: PropTypes.bool,
  children: PropTypes.node.isRequired,
  opacity: PropTypes.number,
  letterSpacing: PropTypes.number,
};

export default MKTypography;
