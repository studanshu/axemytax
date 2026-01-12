/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { FC, ReactNode } from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface CompanyInfo {
  href: string;
  name: string;
}

interface FooterLink {
  href: string;
  name: string;
}

interface SocialLink {
  icon: ReactNode;
  link: string;
}

interface CenteredFooterProps {
  company?: CompanyInfo;
  links?: FooterLink[];
  socials?: SocialLink[];
  light?: boolean;
}

const defaultCompany: CompanyInfo = {
  href: "https://www.creative-tim.com/",
  name: "Creative Tim"
};

const defaultLinks: FooterLink[] = [
  { href: "https://www.creative-tim.com/", name: "Company" },
  { href: "https://www.creative-tim.com/presentation", name: "About Us" },
  { href: "https://www.creative-tim.com/presentation", name: "Team" },
  { href: "https://www.creative-tim.com/templates/react", name: "Products" },
  { href: "https://www.creative-tim.com/blog", name: "Blog" },
  { href: "https://www.creative-tim.com/license", name: "License" },
];

const defaultSocials: SocialLink[] = [
  { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/CreativeTim/" },
  {
    icon: <TwitterIcon fontSize="small" />,
    link: "https://twitter.com/creativetim",
  },
  {
    icon: <InstagramIcon fontSize="small" />,
    link: "https://www.instagram.com/creativetimofficial/",
  },
  {
    icon: <PinterestIcon fontSize="small" />,
    link: "https://ro.pinterest.com/thecreativetim/",
  },
  { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/creativetimofficial" },
];

const CenteredFooter: FC<CenteredFooterProps> = ({
  company = defaultCompany,
  links = defaultLinks,
  socials = defaultSocials,
  light = false,
}) => {
  const { href, name } = company;
  const year = new Date().getFullYear();

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      {...({ component: Link as any, href: link.href })}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {link.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      {...({ component: Link as any, href: social.link })}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            {renderLinks}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} Material by{" "}
            <MKTypography
              {...({ component: Link as any, href, target: "_blank", rel: "noreferrer" })}
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {name}
            </MKTypography>
            .
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
};

export default CenteredFooter;
