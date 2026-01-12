import { ReactNode } from "react";
import DefaultFormFields from "assets/data/Form/DefaultFormFields";
import { SubServiceContext } from "./Context";

const SERVICE_FIELD = "service";
const OPTIONS_FIELD = "options";

interface SubServiceContextProviderProps {
  dict: {
    serviceName: string;
    name: string;
  };
  children: ReactNode;
}

const SubServiceContextProvider = ({ dict, children }: SubServiceContextProviderProps) => {
  const { serviceName, name } = dict;

  if (
    !Object.keys(DefaultFormFields[SERVICE_FIELD][OPTIONS_FIELD]).includes(
      serviceName
    )
  ) {
    throw new Error("Service name is not valid");
  }
  if (
    !(DefaultFormFields[SERVICE_FIELD][OPTIONS_FIELD] as any)[serviceName][
      OPTIONS_FIELD
    ].includes(name)
  ) {
    throw new Error("Sub-Service name is not valid");
  }

  return (
    <SubServiceContext.Provider value={dict}>
      {children}
    </SubServiceContext.Provider>
  );
};

export default SubServiceContextProvider;
