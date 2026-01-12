// Theme-related type definitions

import { Theme as MuiTheme, ThemeOptions } from '@mui/material/styles';

// Custom color palette
export interface CustomColors {
  background?: {
    default: string;
  };
  primary: {
    main: string;
    focus: string;
  };
  secondary: {
    main: string;
    focus: string;
  };
  lightBlue?: {
    main: string;
    focus: string;
  };
  black75?: {
    main: string;
  };
  black50?: {
    main: string;
  };
  info: {
    main: string;
    focus: string;
  };
  success: {
    main: string;
    focus: string;
  };
  warning: {
    main: string;
    focus: string;
  };
  error: {
    main: string;
    focus: string;
  };
  light: {
    main: string;
    focus: string;
  };
  dark: {
    main: string;
    focus: string;
  };
  grey: {
    [key: string]: string;
  };
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
  gradients: {
    primary: {
      main: string;
      state: string;
    };
    secondary: {
      main: string;
      state: string;
    };
    info: {
      main: string;
      state: string;
    };
    success: {
      main: string;
      state: string;
    };
    warning: {
      main: string;
      state: string;
    };
    error: {
      main: string;
      state: string;
    };
    light: {
      main: string;
      state: string;
    };
    dark: {
      main: string;
      state: string;
    };
  };
  socialMediaColors: {
    facebook: {
      main: string;
      dark: string;
    };
    twitter: {
      main: string;
      dark: string;
    };
    instagram: {
      main: string;
      dark: string;
    };
    linkedin: {
      main: string;
      dark: string;
    };
    pinterest: {
      main: string;
      dark: string;
    };
    youtube: {
      main: string;
      dark: string;
    };
    vimeo: {
      main: string;
      dark: string;
    };
    slack: {
      main: string;
      dark: string;
    };
    dribbble: {
      main: string;
      dark: string;
    };
    github: {
      main: string;
      dark: string;
    };
    reddit: {
      main: string;
      dark: string;
    };
    tumblr: {
      main: string;
      dark: string;
    };
  };
  badgeColors: {
    primary: {
      background: string;
      text: string;
    };
    secondary: {
      background: string;
      text: string;
    };
    info: {
      background: string;
      text: string;
    };
    success: {
      background: string;
      text: string;
    };
    warning: {
      background: string;
      text: string;
    };
    error: {
      background: string;
      text: string;
    };
    light: {
      background: string;
      text: string;
    };
    dark: {
      background: string;
      text: string;
    };
  };
  coloredShadows: {
    [key: string]: string;
  };
  inputBorderColor: string;
  tabs: {
    indicator: {
      boxShadow: string;
    };
  };
}

// Border configuration
export interface BordersConfig {
  borderColor: string;
  borderWidth: {
    0: number;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
  borderRadius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    section: string;
  };
}

// Box Shadow configuration
export interface BoxShadowsConfig {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  inset: string;
  colored: {
    primary: string;
    secondary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
    light: string;
    dark: string;
  };
  navbarBoxShadow: string;
  sliderBoxShadow: {
    thumb: string;
  };
  tabsBoxShadow: {
    indicator: string;
  };
}

// Breakpoint configuration
export interface BreakpointsConfig {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
}

// Typography configuration
export interface TypographyConfig {
  fontFamily: string;
  fontWeightLighter: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: {
    fontFamily: string;
    fontSize: string;
    fontWeight?: number;
    color?: string;
    lineHeight: number;
  };
  h2: {
    fontFamily: string;
    fontSize: string;
    fontWeight?: number;
    color?: string;
    lineHeight: number;
  };
  h3: {
    fontFamily: string;
    fontSize: string;
    fontWeight?: number;
    color?: string;
    lineHeight: number;
  };
  h4: {
    fontFamily: string;
    fontSize: string;
    fontWeight?: number;
    color?: string;
    lineHeight: number;
  };
  h5: {
    fontFamily: string;
    fontSize: string;
    fontWeight?: number;
    color?: string;
    lineHeight: number;
  };
  h6: {
    fontFamily: string;
    fontSize: string;
    fontWeight?: number;
    color?: string;
    lineHeight: number;
  };
  subtitle1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  subtitle2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  body1: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  body2: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  button: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
    textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  };
  caption: {
    fontFamily: string;
    fontSize: string;
    fontWeight: number;
    lineHeight: number;
  };
  overline: {
    fontFamily: string;
    fontSize?: string;
  };
  d1?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
  };
  d2?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
  };
  d3?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
  };
  d4?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
  };
  d5?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
  };
  d6?: {
    fontSize: string;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    color?: string;
  };
  size: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  lineHeight: {
    sm: number;
    md: number;
    lg: number;
  };
}

// Globals configuration
export interface GlobalsConfig {
  html: {
    scrollBehavior: string;
  };
  '*, *::before, *::after': {
    margin: number;
    padding: number;
  };
  'a, a:link, a:visited': {
    textDecoration: string;
  };
  'a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited': {
    color: string;
    transition: string;
  };
  'a.link:hover, .link:hover, a.link:focus, .link:focus': {
    color: string;
  };
}

// Extended theme type
export interface CustomTheme extends MuiTheme {
  palette: MuiTheme['palette'];
  borders: BordersConfig;
  boxShadows: BoxShadowsConfig;
  typography: MuiTheme['typography'] & Partial<TypographyConfig>;
}

export type CustomThemeOptions = ThemeOptions & {
  borders?: BordersConfig;
  boxShadows?: BoxShadowsConfig;
  palette?: ThemeOptions['palette'];
};
