import MKBox from "components/MKBox";
import DefaultFooter from "examples/Footers/DefaultFooter";
import footerRoutes from "footer.routes";
import { lazy, Suspense, FC, LazyExoticComponent } from "react";

interface AboutJsonData {
  Hero: Record<string, any>;
  Mission: Record<string, any>;
  Team: Record<string, any>;
  Clients: Record<string, any>;
  Contact: Record<string, any>;
}

interface AboutProps {
  jsonData: AboutJsonData;
}

interface ComponentMap {
  Hero: LazyExoticComponent<FC<{ jsonData: any }>>;
  Mission: LazyExoticComponent<FC<{ jsonData: any }>>;
  Team: LazyExoticComponent<FC<{ jsonData: any }>>;
  Clients: LazyExoticComponent<FC<{ jsonData: any }>>;
  Contact: LazyExoticComponent<FC<{ jsonData: any }>>;
}

const renderLoader = () => <p></p>;

const About: FC<AboutProps> = ({ jsonData }) => {
  const components: ComponentMap = {
    Hero: lazy(() => import("./Hero")),
    Mission: lazy(() => import("./Mission")),
    Team: lazy(() => import("./Team")),
    Clients: lazy(() => import("./Clients")),
    Contact: lazy(() => import("./Contact")),
  };

  return (
    <>
      {(Object.keys(components) as Array<keyof ComponentMap>).map((key) => {
        const Component = components[key];
        return (
          <Suspense fallback={renderLoader()} key={key}>
            <Component jsonData={jsonData[key]} />
          </Suspense>
        );
      })}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default About;
