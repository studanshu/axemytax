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

import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import { Route } from "types/route.types";

interface DefaultNavbarMobileProps {
  routes: Route[];
  open: boolean;
}

const DefaultNavbarMobile: FC<DefaultNavbarMobileProps> = ({ routes, open }) => {
  const [collapse, setCollapse] = useState<string | false>("");

  const handleSetCollapse = (name: string) =>
    collapse === name ? setCollapse(false) : setCollapse(name);

  const renderNavbarItems = routes.map(
    ({
      name,
      icon,
      collapse: routeCollapses,
      href,
      route,
      collapse: navCollapse,
    }) => (
      <DefaultNavbarDropdown
        key={name}
        name={name}
        icon={icon}
        collapseStatus={name === collapse}
        onClick={() => handleSetCollapse(name)}
        href={href || ""}
        route={route || ""}
        collapse={Boolean(navCollapse)}
      >
        <MKBox
          sx={{ height: "15rem", maxHeight: "15rem", overflowY: "scroll" }}
        >
          {routeCollapses &&
            routeCollapses.map((item) => (
              <MKBox key={item.name} px={2}>
                {item.collapse ? (
                  <>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      {...(item.route ? { component: Link as any, to: item.route } : { component: MuiLink as any, href: item.href || "", target: "_blank", rel: "noreferrer" })}
                      py={1}
                      px={0.5}
                    >
                      {item.name}
                    </MKTypography>
                    {item.collapse.map((el) => (
                      <MKTypography
                        key={el.name}
                        {...(el.route ? { component: Link as any, to: el.route } : { component: MuiLink as any, href: el.href || "", target: "_blank", rel: "noreferrer" })}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({
                          palette: { grey },
                          borders: { borderRadius },
                        }: any) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: "#344767",
                          },
                        })}
                      >
                        {el.name}
                      </MKTypography>
                    ))}
                  </>
                ) : (
                  <MKBox
                    key={item.key}
                    display="block"
                    {...(item.route ? { component: Link as any, to: item.route } : { component: MuiLink as any, href: item.href || "", target: "_blank", rel: "noreferrer" })}
                    sx={({
                      palette: { grey },
                      borders: { borderRadius },
                    }: any) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",
                      py: 1,
                      px: 1.625,

                      "&:hover": {
                        backgroundColor: grey[200],
                        color: "#344767",

                        "& *": {
                          color: "#344767",
                        },
                      },
                    })}
                  >
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MKTypography>
                    <MKTypography
                      display="block"
                      variant="button"
                      color="text"
                      fontWeight="regular"
                      sx={{ transition: "all 300ms linear" }}
                    >
                      {item.description}
                    </MKTypography>
                  </MKBox>
                )}
              </MKBox>
            ))}
        </MKBox>
      </DefaultNavbarDropdown>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </MKBox>
    </Collapse>
  );
};

export default DefaultNavbarMobile;
