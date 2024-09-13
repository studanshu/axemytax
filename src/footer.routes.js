// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/axemytax-logo-transparent.png";

const date = new Date().getFullYear();

export default {
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
        { name: "about us", href: "https://www.axemytax.in" },
        { name: "blog", href: "https://www.axemytax.in/blog" },
      ],
    },
    {
      name: "Services",
      items: [
        { name: "Taxation", href: "https://www.axemytax.in/" },
        { name: "Accounting & Auditing", href: "https://www.axemytax.in/" },
        { name: "FEMA & Bookeeping", href: "https://www.axemytax.in/" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.axemytax.in/contact-us" },
        {
          name: "knowledge center",
          href: "https://www.axemytax.in/knowledge-center",
        },
        {
          name: "custom development",
          href: "https://services.creative-tim.com/",
        },
        { name: "sponsorships", href: "https://www.axemytax.in/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.axemytax.in/terms" },
        { name: "privacy policy", href: "https://www.axemytax.in/privacy" },
        { name: "licenses", href: "https://www.axemytax.in/license" },
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
