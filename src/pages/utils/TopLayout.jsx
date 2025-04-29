import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
// import routes from "routes";
import logo from "assets/images/default/axemytax-logo-transparent.png";
import routes from "routes";
import ContactIcon from "./ContactIcon";

export default function TopLayout() {
  return (
    <>
      <DefaultNavbar
        logoUrl={logo}
        routes={routes}
        action={{
          type: "internal",
          route: "/contact",
          label: "Book Consultation",
          color: "info",
        }}
        center
        sticky
      />
      <ContactIcon link="https://wa.me/919903133862?text=I%27m%20interested%20in%20your%20service.%20I%20want%20to%20Book%20An%20Appointment." />
    </>
  );
}
