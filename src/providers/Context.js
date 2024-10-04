import { createContext } from "react";

export const ServiceContext = createContext({
  name: "",
});

export const SubServiceContext = createContext({
  name: "",
});

export const PageContext = createContext({
  name: undefined,
});
