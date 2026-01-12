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

// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface OwnerState {
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
}

export default styled(Box)<{ ownerState: OwnerState }>(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme as any;
  const { color } = ownerState;

  const { white, gradients } = palette;
  const { fontSizeRegular, fontWeightMedium } = typography;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  // backgroundImage value
  const backgroundImageValue = (gradients as any)[color || "info"]
    ? linearGradient(
        (gradients as any)[color || "info"].main,
        (gradients as any)[color || "info"].state
      )
    : linearGradient(gradients.info.main, gradients.info.state);

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: white.main,
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
  };
});
