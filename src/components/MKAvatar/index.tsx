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

// @mui material components
import { AvatarProps } from "@mui/material/Avatar";

// Custom styles for MKAvatar
import MKAvatarRoot from "components/MKAvatar/MKAvatarRoot";

export interface MKAvatarProps extends Omit<AvatarProps, "color"> {
  bgColor?:
    | "transparent"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "blackAlt"
    | "black75"
    | "black50"
    | "lightBlue";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "inset";
}

const MKAvatar = forwardRef<HTMLDivElement, MKAvatarProps>(
  ({ bgColor = "transparent", size = "md", shadow = "none", ...rest }, ref) => (
    <MKAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />
  )
);

MKAvatar.displayName = "MKAvatar";

export default MKAvatar;
