/* eslint-disable no-unused-vars */
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import defaultLogo from "assets/images/default/whatsapp-white.png";
import typography from "assets/theme/base/typography";
import { IsUpSmScreen } from "assets/theme/functions/breakpoints";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { LazyLoadImage } from "react-lazy-load-image-component";

const { size } = typography;

export default function ContactIcon({
  light = false,
  relative = false,
  logo = defaultLogo,
  link = "/",
}) {
  return (
    <Container
      sx={{
        position: IsUpSmScreen() ? "fixed" : "fixed",
        zIndex: 1000,
        bottom: IsUpSmScreen() ? 160 : 2,
        right: { xs: "auto", sm: 120, xxl: 320 },
        width: "100%",
        display: "flex",
        justifyContent: IsUpSmScreen() ? "flex-end" : "center",
        backgroundColor: "white",
      }}
      component={MuiLink}
      href={link}
      rel="noreferrer"
    >
      {IsUpSmScreen() ? (
        <MKBox
          py={1.5}
          px={1.5}
          borderRadius="xxl"
          component="img"
          src={logo}
          color={light ? "white" : "dark"}
          position={relative ? "relative" : "absolute"}
          width="4rem"
          bgColor="primary"
        />
      ) : (
        <MKButton
          size="large"
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            textTransform: "capitalize",
            fontSize: size.lg,
            width: "100%",
            boxShadow:
              "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);",
          }}
          endIcon={
            <LazyLoadImage src={logo} alt="contact method" width="20rem" />
          }
        >
          <MKTypography variant="button" color="white" py={1}>
            WhatsApp Us
          </MKTypography>
        </MKButton>
      )}
    </Container>
  );
}

// Typechecking props for the DefaultNavbar
ContactIcon.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  relative: PropTypes.bool,
  logo: PropTypes.any,
  link: PropTypes.string,
};
