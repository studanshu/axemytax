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

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey, white } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs: Components["MuiTabs"] = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey[100],
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important" as any,
      overflowX: "unset !important" as any,
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: white.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: "all 500ms ease",
    },
  },
};

export default tabs;
