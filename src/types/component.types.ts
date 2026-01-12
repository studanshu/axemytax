// Component prop types

import { ReactNode, CSSProperties } from 'react';
import { SxProps, Theme } from '@mui/material';

// Common component props
export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  style?: CSSProperties;
}

// MK Component props
export interface MKBoxProps extends BaseComponentProps {
  variant?: 'contained' | 'gradient';
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  coloredShadow?: string;
  component?: React.ElementType;
  [key: string]: any;
}

export interface MKTypographyProps extends BaseComponentProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'button' | 'caption' | 'overline' | 'd1' | 'd2' | 'd3' | 'd4' | 'd5' | 'd6';
  color?: 'inherit' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark' | 'text' | 'white';
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold' | false;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  verticalAlign?: 'unset' | 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom';
  textGradient?: boolean;
  opacity?: number;
  component?: React.ElementType;
}

export interface MKButtonProps extends BaseComponentProps {
  variant?: 'text' | 'contained' | 'outlined' | 'gradient';
  color?: 'white' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark' | 'default';
  size?: 'small' | 'medium' | 'large';
  circular?: boolean;
  iconOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  component?: React.ElementType;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface MKInputProps extends BaseComponentProps {
  size?: 'small' | 'medium';
  error?: boolean;
  success?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  InputProps?: any;
  inputProps?: any;
}

export interface MKAlertProps extends BaseComponentProps {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
  dismissible?: boolean;
  onClose?: () => void;
}

export interface MKAvatarProps extends BaseComponentProps {
  src?: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inset';
  bgColor?: string;
}

export interface MKBadgeProps extends BaseComponentProps {
  variant?: 'gradient' | 'contained';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  circular?: boolean;
  indicator?: boolean;
  border?: boolean;
  container?: boolean;
  badgeContent?: ReactNode;
}

export interface MKProgressProps extends BaseComponentProps {
  variant?: 'contained' | 'gradient';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
  value?: number;
  label?: boolean | string;
}

export interface MKSocialButtonProps extends BaseComponentProps {
  color?: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'pinterest' | 'youtube' | 'vimeo' | 'slack' | 'dribbble' | 'github' | 'reddit' | 'tumblr';
  size?: 'small' | 'medium' | 'large';
  circular?: boolean;
  iconOnly?: boolean;
  component?: React.ElementType;
  href?: string;
}

// Custom component props
export interface SectionHeaderProps {
  caption?: string;
  title: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
  align?: 'left' | 'center' | 'right';
}

export interface FaqButtonProps {
  question: string;
  answer: string;
  defaultExpanded?: boolean;
}

export interface FaqQuestionProps {
  question: string;
  answer: string;
}

export interface CheckboxGridItem {
  id: string | number;
  label: string;
  value: string | number;
}

export interface CheckboxGridDisplayProps {
  items: CheckboxGridItem[];
  columns?: number;
}

export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export interface InlineFormProps {
  FormJson: any; // Will be typed more specifically later
  flexDirection?: 'row' | 'row-reverse';
}

export interface ReasonCardData {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ReasonCardsProps {
  cards: ReasonCardData[];
  columns?: number;
}
