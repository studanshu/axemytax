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

/**
 * The base typography styles for the Material Kit 2 React.
 * You can add new typography style using this file.
 * You can customized the typography styles for the entire Material Kit 2 React using thie file.
 */

// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

// Types
import { TypographyConfig } from "types/theme.types";

const { dark } = colors;

const baseProperties = {
  fontFamily1: '"Noto Sans SC", sans-serif',
  fontFamily2: '"Inter", sans-serif',
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontSizeXXS: pxToRem(10.4),
  fontSizeXS: pxToRem(12),
  fontSizeSM: pxToRem(14),
  fontSizeMD: pxToRem(16),
  fontSizeLG: pxToRem(18),
  fontSizeXL: pxToRem(20),
  fontSize2XL: pxToRem(24),
  fontSize3XL: pxToRem(30),
};

const baseHeadingProperties = {
  color: dark.main,
  fontWeight: baseProperties.fontWeightBold,
};

const baseDisplayProperties = {
  fontFamily: baseProperties.fontFamily1,
  color: dark.main,
  fontWeight: baseProperties.fontWeightLight,
  lineHeight: 1.2,
};

const typography: TypographyConfig = {
  fontFamily: baseProperties.fontFamily1,
  fontWeightLighter: baseProperties.fontWeightLighter,
  fontWeightLight: baseProperties.fontWeightLight,
  fontWeightRegular: baseProperties.fontWeightRegular,
  fontWeightMedium: baseProperties.fontWeightMedium,
  fontWeightBold: baseProperties.fontWeightBold,

  h1: {
    fontFamily: baseProperties.fontFamily1,
    fontSize: pxToRem(119),
    lineHeight: 1.25,
    ...baseHeadingProperties,
  },

  h2: {
    fontFamily: baseProperties.fontFamily1,
    fontSize: pxToRem(78.7),
    lineHeight: 1.1,
    color: dark.main,
  },

  h3: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(48.88),
    lineHeight: 1.25,
    fontWeight: baseProperties.fontWeightLight,
  },

  h4: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(42),
    lineHeight: 1.375,
    fontWeight: baseProperties.fontWeightRegular,
  },

  h5: {
    fontFamily: baseProperties.fontFamily1,
    fontSize: pxToRem(28),
    lineHeight: 1.375,
    fontWeight: baseProperties.fontWeightMedium,
  },

  h6: {
    fontFamily: baseProperties.fontFamily1,
    fontSize: pxToRem(16.5),
    lineHeight: 1.625,
    fontWeight: baseProperties.fontWeightBold,
  },

  subtitle1: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(16),
    lineHeight: 1.625,
    fontWeight: baseProperties.fontWeightRegular,
  },

  subtitle2: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(10.82),
    lineHeight: 1.6,
    fontWeight: baseProperties.fontWeightRegular,
  },

  body1: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(19.69),
    fontWeight: baseProperties.fontWeightRegular,
    lineHeight: 1.625,
  },

  body2: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: pxToRem(19.69),
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.625,
  },

  button: {
    fontFamily: baseProperties.fontFamily1,
    fontSize: baseProperties.fontSizeSM,
    fontWeight: baseProperties.fontWeightLight,
    lineHeight: 1.5,
    textTransform: "uppercase",
  },

  caption: {
    fontFamily: baseProperties.fontFamily2,
    fontSize: baseProperties.fontSizeMD,
    fontWeight: baseProperties.fontWeightMedium,
    lineHeight: 1.25,
  },

  overline: {
    fontFamily: baseProperties.fontFamily1,
  },

  d1: {
    fontSize: pxToRem(80),
    ...baseDisplayProperties,
  },

  d2: {
    fontSize: pxToRem(72),
    ...baseDisplayProperties,
  },

  d3: {
    fontSize: pxToRem(48.88),
    fontFamily: baseProperties.fontFamily2,
    lineHeight: 1.25,
  },

  d4: {
    fontSize: pxToRem(56),
    ...baseDisplayProperties,
  },

  d5: {
    fontSize: pxToRem(48),
    ...baseDisplayProperties,
  },

  d6: {
    fontSize: pxToRem(16.5),
    fontFamily: baseProperties.fontFamily1,
    lineHeight: 1.625,
  },

  size: {
    xxs: baseProperties.fontSizeXXS,
    xs: baseProperties.fontSizeXS,
    sm: baseProperties.fontSizeSM,
    md: baseProperties.fontSizeMD,
    lg: baseProperties.fontSizeLG,
    xl: baseProperties.fontSizeXL,
    "2xl": baseProperties.fontSize2XL,
    "3xl": baseProperties.fontSize3XL,
  },

  lineHeight: {
    sm: 1.25,
    md: 1.5,
    lg: 2,
  },
};

export default typography;
