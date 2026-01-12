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

import { Components } from "@mui/material/styles";
import colors from "assets/theme/base/colors";

const { transparent } = colors;

const iconButton: Components["MuiIconButton"] = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
