import { createContext } from "react";

interface ServiceContextValue {
  name: string;
}

interface SubServiceContextValue {
  serviceName?: string;
  name: string;
}

interface PageContextValue {
  name?: string;
}

export const ServiceContext = createContext<ServiceContextValue>({
  name: "",
});

export const SubServiceContext = createContext<SubServiceContextValue>({
  name: "",
});

export const PageContext = createContext<PageContextValue>({
  name: undefined,
});
