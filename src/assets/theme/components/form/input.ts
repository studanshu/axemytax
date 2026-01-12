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

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input: Components["MuiInput"] = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};

export default input;
