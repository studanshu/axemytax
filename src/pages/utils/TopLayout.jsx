import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import routes from "routes";
import logo from "assets/images/axemytax-logo-transparent.png";
import routes from "routes";
import ContactIcon from "./ContactIcon";

export default function TopLayout() {
  console.log(routes);
  return (
    <>
      <DefaultNavbar
        logoUrl={logo}
        routes={routes}
        action={{
          type: "external",
          route: "/",
          label: "Book Consultation",
          color: "info",
        }}
        center
        sticky
      />
      <ContactIcon
        center
        sticky
        link="https://wa.me/919831054784?text=I%27m%20interested%20in%20your%20service.%20I%20want%20to%20Book%20An%20Appointment."
      />
    </>
  );
}
