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

// @mui material components
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface OwnerState {
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
}

export default styled(Button)<{ ownerState: OwnerState }>(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { color, size, iconOnly, circular } = ownerState;

  const { white, socialMediaColors } = palette;
  const { pxToRem } = functions;

  // backgroundColor value
  const backgroundColorValue = (socialMediaColors as any)[color || "facebook"]
    ? (socialMediaColors as any)[color || "facebook"].main
    : (socialMediaColors as any).facebook.main;

  const focusedBackgroundColorValue = (socialMediaColors as any)[color || "facebook"]
    ? (socialMediaColors as any)[color || "facebook"].dark
    : (socialMediaColors as any).facebook.dark;

  // styles for the button with circular={true}
  const circularStyles = () => ({
    borderRadius: "50%",
  });

  // styles for the button with iconOnly={true}
  const iconOnlyStyles = () => {
    // width, height, minWidth and minHeight values
    let sizeValue = pxToRem(38);

    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(52);
    }

    // padding value
    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(16);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,
    };
  };

  return {
    backgroundColor: backgroundColorValue,
    color: white.main,
    boxShadow: "none",

    "&:hover": {
      backgroundColor: focusedBackgroundColorValue,
      boxShadow: "none",
    },

    "&:focus:not(:hover)": {
      backgroundColor: (socialMediaColors as any)[color || "facebook"]
        ? (socialMediaColors as any)[color || "facebook"].dark
        : (socialMediaColors as any).facebook.dark,
      boxShadow: "none",
    },

    "&:disabled": {
      backgroundColor: backgroundColorValue,
      color: white.main,
    },

    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});
