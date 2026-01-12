// Context-related type definitions

import { ReactNode } from 'react';

// Service Context
export interface ServiceContextDict {
  name: string;
}

export interface ServiceContextValue {
  service: ServiceContextDict;
}

export interface ServiceContextProviderProps {
  dict: ServiceContextDict;
  children: ReactNode;
}

// Sub-Service Context
export interface SubServiceContextDict {
  name: string;
}

export interface SubServiceContextValue {
  subService: SubServiceContextDict;
}

export interface SubServiceContextProviderProps {
  dict: SubServiceContextDict;
  children: ReactNode;
}

// Page Context
export interface PageContextDict {
  name: string;
}

export interface PageContextValue {
  page: PageContextDict;
}

export interface PageContextProviderProps {
  dict: PageContextDict;
  children: ReactNode;
}
