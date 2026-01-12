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
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

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
  value?: number;
  variant?: "contained" | "gradient";
}

export default styled(LinearProgress)<{ ownerState: OwnerState }>(({ theme, ownerState }) => {
  const { palette, functions } = theme as any;
  const { color, value, variant } = ownerState;

  const { text, gradients } = palette;
  const { linearGradient } = functions;

  // background value
  let backgroundValue;

  if (variant === "gradient") {
    backgroundValue = (gradients as any)[color || "info"]
      ? linearGradient(
          (gradients as any)[color || "info"].main,
          (gradients as any)[color || "info"].state
        )
      : linearGradient(gradients.info.main, gradients.info.state);
  } else {
    backgroundValue = (palette as any)[color || "info"] 
      ? (palette as any)[color || "info"].main 
      : palette.info.main;
  }

  return {
    width: "100%",

    "& .MuiLinearProgress-bar": {
      background: backgroundValue,
      width: `${value}%`,
      color: text.main,
    },
  };
});
