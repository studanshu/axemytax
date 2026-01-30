import { FC } from "react";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import defaultLogo from "assets/images/default/whatsapp-white.png";
import typography from "assets/theme/base/typography";
import { IsUpSmScreen } from "assets/theme/functions/breakpoints";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInteractionTracking } from "hooks/useInteractionTracking";
import { useLocation } from "react-router-dom";

const { size } = typography;

interface ContactIconProps {
  logo?: string;
  link?: string;
}

const ContactIcon: FC<ContactIconProps> = ({
  logo = defaultLogo,
  link = "/",
}) => {
  const { trackWhatsAppClick } = useInteractionTracking();
  const location = useLocation();

  const handleClick = () => {
    trackWhatsAppClick(location.pathname);
  };

  return (
    <Container
      sx={{
        position: "fixed",
        zIndex: 1000,
        bottom: IsUpSmScreen() ? "4rem" : "1rem",
        right: IsUpSmScreen() ? { xs: "4rem", sm: "3rem", lg: "2rem" } : "auto",
        width: IsUpSmScreen() ? "auto" : "100%",
        maxWidth: IsUpSmScreen() ? "64px" : "100%",
        display: "flex",
        justifyContent: IsUpSmScreen() ? "flex-end" : "center",
        padding: "0 !important",
      }}
      component={MuiLink}
      href={link}
      onClick={handleClick}
      rel="noreferrer"
    >
      {IsUpSmScreen() ? (
        <Box
          component="img"
          src={logo}
          alt="WhatsApp Chat"
          sx={{
            width: "64px",
            height: "64px",
            padding: "12px",
            borderRadius: "12px",
            bgcolor: "primary.main",
            boxShadow: "0px 4px 20px rgba(71, 148, 32, 0.4)",
            transition: "all 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 6px 24px rgba(71, 148, 32, 0.5)",
            },
          }}
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
            margin: "0 1rem 0.5rem 1rem",
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
};

export default ContactIcon;
