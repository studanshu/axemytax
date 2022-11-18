import { Fragment, useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

import defaultLogo from "assets/images/whatsapp-white.png";

// Material Kit 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

export default function ContactIcon({transparent, light, relative, logo }) {
  return(
    <Container sx={{ position: "sticky", zIndex: 10, top: "calc(100% - 150px)" }}
    component={MuiLink}
            href={"https://wa.me/919831054784?text=I%27m%20interested%20in%20your%20service.%20I%20want%20to%20Book%20An%20Appointment."}
            target="_blank"
            rel="noreferrer">
      
      <MKBox
        py={1}
        px={1}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 2}
        borderRadius="xxl"
        component="img"
        src={logo}
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left="calc(100% - 100px)"
        width={{xs: "0.13", sm: "0.12", md: "0.08", lg: "0.07", xl: "0.06", xxl:"0.05"}}
        zIndex={3}
        bgColor="primary"
        sx={
          ({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          // backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })
      }
      >
        
      </MKBox>

    </Container>
  );
}

ContactIcon.defaultProps = {
  transparent: false,
  light: false,
  relative: false,
  logo: defaultLogo,
};

// Typechecking props for the DefaultNavbar
ContactIcon.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  relative: PropTypes.bool,
  logo: PropTypes.any,
};