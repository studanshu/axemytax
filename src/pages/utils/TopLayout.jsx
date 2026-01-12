import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import logo from "assets/images/default/axemytax-logo-transparent.png";
import routes from "routes";
import ContactIcon from "./ContactIcon";
import EXTERNAL_LINKS from "constants/externalLinks";

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
      <ContactIcon link={EXTERNAL_LINKS.WHATSAPP} />
    </>
  );
}
