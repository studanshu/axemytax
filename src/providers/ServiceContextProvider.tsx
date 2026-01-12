import { ReactNode } from "react";
import { ServiceContext } from "./Context";

interface ServiceContextProviderProps {
  dict: {
    name: string;
  };
  children: ReactNode;
}

const ServiceContextProvider = ({ dict, children }: ServiceContextProviderProps) => {
  return (
    <ServiceContext.Provider value={dict}>{children}</ServiceContext.Provider>
  );
};

export default ServiceContextProvider;
