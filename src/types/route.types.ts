// Route-related type definitions

import { ReactNode } from 'react';

export interface RouteCollapse {
  name: string;
  route?: string;
  component?: ReactNode;
  collapse?: RouteCollapse[];
  icon?: ReactNode;
  description?: string;
  dropdown?: boolean;
  key?: string;
  columns?: number;
  rowsPerColumn?: number;
}

export interface Route {
  name: string;
  route: string;
  component?: ReactNode;
  collapse?: RouteCollapse[];
  icon?: ReactNode;
  key?: string;
  columns?: number;
  rowsPerColumn?: number;
  dropdown?: boolean;
}

export interface FooterLink {
  href: string;
  name: string;
}

export interface FooterSection {
  name: string;
  items: FooterLink[];
}

export interface SocialLink {
  icon: ReactNode;
  link: string;
}

export interface FooterRoutes {
  brand: {
    name: string;
    image: string;
    route: string;
  };
  socials: SocialLink[];
  menus: FooterSection[];
  copyright: ReactNode;
}

export interface RouteDictEntry {
  name: string;
  target: string;
  [key: string]: string | RouteDictEntry;
}

export type RouteDict = Record<string, RouteDictEntry | string>;
