import { Box, Grid } from "@mui/material";
import typography from "assets/theme/base/typography";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

const { size } = typography;

const HeroContent = ({ HeroJson, flexDirection }) => {
  return (
    <>
      <Grid container spacing={8} direction={flexDirection}>
        <Grid item xs={12} lg={6} p={0}>
          <Box display="flex" flexDirection="column" gap={6}>
            <SectionHeader
              caption={HeroJson.caption}
              title={HeroJson.title}
              variant="h2"
              color="black"
            />
            <MKTypography variant="body1" color="black75">
              {HeroJson.description}
            </MKTypography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img
            src={HeroJson.image}
            alt="Hero Section Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
      {HeroJson.buttons && HeroJson.buttons.length > 0 && (
        <Grid container spacing={3} mt={8} xs={12} lg={6}>
          {HeroJson.buttons.map((button, index) => (
            <Grid item xs={12} md={6} key={index}>
              <MKButton
                size="large"
                variant={button.variant}
                color={button.color}
                sx={{
                  textTransform: "capitalize",
                  fontSize: size.lg,
                  width: "100%",
                  boxShadow:
                    button.variant === "contained"
                      ? "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);"
                      : undefined,
                }}
                endIcon={button.icon}
              >
                {button.label}
              </MKButton>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

HeroContent.propTypes = {
  HeroJson: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(URL)])
      .isRequired,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        variant: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  flexDirection: PropTypes.oneOf(["row", "row-reverse"]),
};

HeroContent.defaultProps = {
  flexDirection: "row",
};

export default HeroContent;
