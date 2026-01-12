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

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent, lightBlue, info } = colors;

const select: Components["MuiSelect"] = {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${pxToRem(12)} !important`,

      "& .Mui-selected": {
        backgroundColor: transparent.main,
      },

      "& .MuiSelect-selectMenu": {
        background: "none",
        height: "none",
        minHeight: "none",
        overflow: "unset",
      },
    },

    icon: {
      color: lightBlue?.main || info.main,
    },
  },
};

export default select;
