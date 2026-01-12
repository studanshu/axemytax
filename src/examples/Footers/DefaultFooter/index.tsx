/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { FC } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { FooterRoutes } from "types/route.types";

interface DefaultFooterProps {
  content: FooterRoutes;
}

const DefaultFooter: FC<DefaultFooterProps> = ({ content }) => {
  const { brand, socials, menus, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <MKBox>
              <MKBox
                {...({ component: "img" as any, src: brand.image, alt: brand.name })}
                maxWidth="80%"
                sx={({ breakpoints }: any) => ({
                  [breakpoints.down("xl")]: {
                    maxWidth: "20%",
                  },
                  [breakpoints.down("lg")]: {
                    maxWidth: "100%",
                  },
                  [breakpoints.down("md")]: {
                    maxWidth: "40%",
                  },
                })}
              />
            </MKBox>
            <MKBox alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  {...({ component: "a" as any, href: link, target: "_blank", rel: "noreferrer" })}
                  variant="h5"
                  color="secondary"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                color="secondary"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox
                    key={name}
                    component="li"
                    p={0}
                    m={0}
                    lineHeight={1.25}
                  >
                    {href ? (
                      <MKTypography
                        {...({ component: "a" as any, href, target: "_blank", rel: "noreferrer" })}
                        variant="button"
                        textTransform="capitalize"
                        color="black75"
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        {...({ component: Link as any, to: route || "#" })}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                        color="black75"
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
};

export default DefaultFooter;
