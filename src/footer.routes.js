// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import MKTypography from "./components/MKTypography";

// Images
import { routeDict } from "routes";
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
      link: "https://www.linkedin.com/company/axemytax/",
    },
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/AxeMyTax/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/AxeMyTax",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/AxeMyTax",
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
        { name: "Taxation", href: routeDict["Services"]["Direct Taxation"]["target"] },
        { name: "Accounting & Auditing", href: "https://www.axemytax.in/" },
        { name: "FEMA & Bookeeping", href: "https://www.axemytax.in/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: routeDict["Contact"] },
        {
          name: "knowledge center",
          href: "https://www.axemytax.in/knowledge-center",
        },
        { name: "sitemap", href: "/sitemap.xml" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "/terms" },
        { name: "privacy policy", href: "/privacy" },
        { name: "licenses", href: "/license" },
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
