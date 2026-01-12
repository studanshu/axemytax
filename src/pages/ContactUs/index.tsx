import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { Suspense, lazy, FC, ComponentType } from "react";

interface ContactUsJsonData {
  Field: Record<string, any>;
  Details: Record<string, any>;
}

interface ContactUsProps {
  jsonData: ContactUsJsonData;
}

interface ComponentConfig {
  component: ComponentType<any>;
  props: Record<string, any>;
  wrapper?: ComponentType<any>;
  wrapperProps?: Record<string, any>;
}

const ContactUs: FC<ContactUsProps> = ({ jsonData }) => {
  const components: ComponentConfig[] = [
    {
      component: lazy(() => import("./ContactField")),
      props: { jsonData: jsonData.Field },
    },
    {
      component: lazy(() => import("./ContactDetails")),
      props: { jsonData: jsonData.Details },
    },
    {
      component: DefaultFooter,
      props: { content: footerRoutes },
      wrapper: MKBox,
      wrapperProps: { pt: 6, px: 1, mt: 6 },
    },
  ];

  return (
    <>
      {components.map(
        (
          { component: Component, props, wrapper: Wrapper, wrapperProps },
          index
        ) => (
          <Suspense key={index} fallback={<></>}>
            {Wrapper ? (
              <Wrapper {...wrapperProps}>
                <Component {...props} />
              </Wrapper>
            ) : (
              <Component {...props} />
            )}
          </Suspense>
        )
      )}
    </>
  );
};

export default ContactUs;
