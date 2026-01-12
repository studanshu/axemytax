import { ReactNode } from "react";
import { PageContext } from "./Context";

interface PageContextProviderProps {
  dict: {
    name: string;
  };
  children: ReactNode;
}

const PageContextProvider = ({ dict, children }: PageContextProviderProps) => {
  return <PageContext.Provider value={dict}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
