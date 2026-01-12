/**
 * Material-UI Theme Extension Types
 * 
 * This file extends the default Material-UI theme types to include
 * custom properties used in Material Kit 2 React theme.
 */

import '@mui/material/styles';
import { BordersConfig, BoxShadowsConfig, CustomColors } from './theme.types';

declare module '@mui/material/styles' {
  interface Theme {
    borders: BordersConfig;
    boxShadows: BoxShadowsConfig;
    functions: {
      pxToRem: (value: number, baseNumber?: number) => string;
      rgba: (color: string, opacity: number) => string;
      hexToRgb: (color: string) => string;
      linearGradient: (color: string, colorState: string, angle?: number) => string;
      boxShadow: (
        offset?: number[],
        radius?: number[],
        color?: string,
        opacity?: number,
        inset?: string
      ) => string;
      gradientChartLine: (
        chart: HTMLCanvasElement,
        color: string,
        opacity?: number
      ) => CanvasGradient;
    };
  }

  interface ThemeOptions {
    borders?: BordersConfig;
    boxShadows?: BoxShadowsConfig;
    functions?: {
      pxToRem?: (value: number, baseNumber?: number) => string;
      rgba?: (color: string, opacity: number) => string;
      hexToRgb?: (color: string) => string;
      linearGradient?: (color: string, colorState: string, angle?: number) => string;
      boxShadow?: (
        offset?: number[],
        radius?: number[],
        color?: string,
        opacity?: number,
        inset?: string
      ) => string;
      gradientChartLine?: (
        chart: HTMLCanvasElement,
        color: string,
        opacity?: number
      ) => CanvasGradient;
    };
  }

  interface Palette {
    white: {
      main: string;
      focus: string;
    };
    black: {
      light: string;
      main: string;
      focus: string;
    };
    text: {
      main: string;
      focus: string;
    };
    transparent: {
      main: string;
    };
    gradients: CustomColors['gradients'];
    socialMediaColors: CustomColors['socialMediaColors'];
    badgeColors: CustomColors['badgeColors'];
    coloredShadows: CustomColors['coloredShadows'];
    inputBorderColor: string;
    tabs: {
      indicator: {
        boxShadow: string;
      };
    };
  }

  interface PaletteOptions {
    white?: {
      main?: string;
      focus?: string;
    };
    black?: {
      light?: string;
      main?: string;
      focus?: string;
    };
    text?: {
      main?: string;
      focus?: string;
    };
    transparent?: {
      main?: string;
    };
    gradients?: CustomColors['gradients'];
    socialMediaColors?: CustomColors['socialMediaColors'];
    badgeColors?: CustomColors['badgeColors'];
    coloredShadows?: CustomColors['coloredShadows'];
    inputBorderColor?: string;
    tabs?: {
      indicator?: {
        boxShadow?: string;
      };
    };
  }

  interface TypographyVariants {
    d1: React.CSSProperties;
    d2: React.CSSProperties;
    d3: React.CSSProperties;
    d4: React.CSSProperties;
    d5: React.CSSProperties;
    d6: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    d1?: React.CSSProperties;
    d2?: React.CSSProperties;
    d3?: React.CSSProperties;
    d4?: React.CSSProperties;
    d5?: React.CSSProperties;
    d6?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    d1: true;
    d2: true;
    d3: true;
    d4: true;
    d5: true;
    d6: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    dark: true;
  }

  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    white: true;
    dark: true;
  }
}
