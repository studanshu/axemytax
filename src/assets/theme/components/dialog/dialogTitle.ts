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

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import { Components } from "@mui/material/styles";

const { size } = typography;

const dialogTitle: Components["MuiDialogTitle"] = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
