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

import { forwardRef, ReactNode } from "react";

// @mui material components
import { ButtonProps } from "@mui/material/Button";

// Custom styles for MKSocialButton
import MKSocialButtonRoot from "components/MKSocialButton/MKSocialButtonRoot";

export interface MKSocialButtonProps extends Omit<ButtonProps, "color" | "size"> {
  color?:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "pinterest"
    | "youtube"
    | "github"
    | "vimeo"
    | "slack"
    | "dribbble"
    | "reddit"
    | "tumblr";
  size?: "small" | "medium" | "large";
  iconOnly?: boolean;
  circular?: boolean;
  children: ReactNode;
}

const MKSocialButton = forwardRef<HTMLButtonElement, MKSocialButtonProps>(
  ({ color = "facebook", size = "medium", iconOnly = false, circular = false, children, ...rest }, ref) => (
    <MKSocialButtonRoot
      {...rest}
      ref={ref}
      variant="contained"
      color="primary"
      size={size}
      ownerState={{ color, size, iconOnly, circular }}
    >
      {children}
    </MKSocialButtonRoot>
  )
);

MKSocialButton.displayName = "MKSocialButton";

export default MKSocialButton;
