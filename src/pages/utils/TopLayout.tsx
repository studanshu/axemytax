import { FC } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import logo from "assets/images/default/axemytax-logo-transparent.png";
import routes from "routes";
import ContactIcon from "./ContactIcon";
import EXTERNAL_LINKS from "constants/externalLinks";

const TopLayout: FC = () => {
  return (
    <>
      <DefaultNavbar
        brand=""
        logo={logo}
        routes={routes as any}
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
};

export default TopLayout;
