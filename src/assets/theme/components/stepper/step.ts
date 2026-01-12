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

// MUI type imports
import { Components } from "@mui/material/styles";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const step: Components["MuiStep"] = {
  styleOverrides: {
    root: {
      padding: `0 ${pxToRem(6)}`,
    },
  },
};

export default step;
