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

// @mui/material styles
import { Components } from "@mui/material/styles";

// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";

const { transparent } = colors;

const textField: Components["MuiTextField"] = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
    },
  },
};

export default textField;
