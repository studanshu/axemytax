// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import MKTypography from "./components/MKTypography";

// Images
import { routeDict } from "routes";
import EXTERNAL_LINKS from "constants/externalLinks";
import logoCT from "./assets/images/default/axemytax-logo-transparent.png";

const date = new Date().getFullYear();

const footerRoutes = {
  brand: {
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <LinkedIn />,
      link: EXTERNAL_LINKS.SOCIAL.LINKEDIN,
    },
    {
      icon: <FacebookIcon />,
      link: EXTERNAL_LINKS.SOCIAL.FACEBOOK,
    },
    {
      icon: <TwitterIcon />,
      link: EXTERNAL_LINKS.SOCIAL.TWITTER,
    },
    {
      icon: <YouTubeIcon />,
      link: EXTERNAL_LINKS.SOCIAL.YOUTUBE,
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: routeDict["About"] },
        { name: "blog", href: routeDict["Blogs"] },
      ],
    },
    {
      name: "Services",
      items: [
        { name: "Direct Taxation", href: routeDict["Services"]["Direct Taxation"]["target"] },
        { name: "Indirect Taxation", href: routeDict["Services"]["Indirect Taxation"]["target"] },
        { name: "Business Incorporation", href: routeDict["Services"]["Business Incorporation"]["target"] },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: routeDict["Contact"] },
        {
          name: "knowledge center",
          href: EXTERNAL_LINKS.KNOWLEDGE_CENTER,
        },
        { name: "sitemap", href: EXTERNAL_LINKS.STATIC.SITEMAP },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: EXTERNAL_LINKS.LEGAL.TERMS },
        { name: "privacy policy", href: EXTERNAL_LINKS.LEGAL.PRIVACY },
        { name: "licenses", href: EXTERNAL_LINKS.LEGAL.LICENSE },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="subtitle1" color="secondary">
      All rights reserved. Copyright &copy; {date} AxeMyTax by{" "}
      <MKTypography
        component="a"
        href="https://www.axemytax.in"
        target="_blank"
        rel="noreferrer"
        variant="subtitle1"
        color="secondary"
      >
        Bahety & Goenka
      </MKTypography>
      .
    </MKTypography>
  ),
};

export default footerRoutes;
