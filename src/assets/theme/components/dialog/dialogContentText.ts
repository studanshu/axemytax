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
import colors from "assets/theme/base/colors";
import { Components } from "@mui/material/styles";

// Material Kit 2 React helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

const dialogContentText: Components["MuiDialogContentText"] = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
