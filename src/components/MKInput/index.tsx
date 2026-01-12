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

import { forwardRef } from "react";
import { TextFieldProps } from "@mui/material/TextField";
import MKInputRoot from "components/MKInput/MKInputRoot";

export interface MKInputProps extends Omit<TextFieldProps, "error"> {
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
}

const MKInput = forwardRef<HTMLDivElement, MKInputProps>(
  ({ error = false, success = false, disabled = false, ...rest }, ref) => (
    <MKInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
  )
);

MKInput.displayName = "MKInput";

export default MKInput;
