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
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Kit 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { inputBorderColor, info, grey, transparent } = colors;
const { borderRadius } = borders;
const { size } = typography;

const inputOutlined: Components["MuiOutlinedInput"] = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: inputBorderColor,
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: info.main,
        },
      },
    },

    notchedOutline: {
      borderColor: inputBorderColor,
    },

    input: {
      color: grey[700],
      padding: pxToRem(16),
      backgroundColor: transparent.main,
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(12),
    },

    multiline: {
      color: grey[700],
      padding: 0,
    },
  },
};

export default inputOutlined;
