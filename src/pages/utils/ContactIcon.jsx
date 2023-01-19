// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import defaultLogo from "assets/images/whatsapp-white.png";

export default function ContactIcon({transparent, light, relative, logo, link}) {
  return(
    <Container sx={{ position: "sticky", zIndex: 10, top: "calc(100% - 150px)" }}
    component={MuiLink}
            href={link}
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
        right="0px"
        width={{xs: "0.13", sm: "0.12", md: "0.08", lg: "0.07", xl: "0.06", xxl:"0.05"}}
        zIndex={3}
        bgColor="primary"
        sx={
          ({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })
        }
      />

    </Container>
  );
}

ContactIcon.defaultProps = {
  transparent: false,
  light: false,
  relative: false,
  logo: defaultLogo,
  link: "/"
};

// Typechecking props for the DefaultNavbar
ContactIcon.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  relative: PropTypes.bool,
  logo: PropTypes.any,
  link: PropTypes.string,
};