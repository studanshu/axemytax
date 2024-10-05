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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import { LinkedIn, MailOutlined } from "@mui/icons-material";
import theme from "assets/theme";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function VerticalTeamCard({
  image,
  name,
  position,
  description,
  color,
  mail,
  linkedIn,
}) {
  const { palette } = theme;
  return (
    <Card sx={{ mt: 3, backgroundColor: palette[color].main }}>
      <Grid container flexDirection="column" alignContent="center">
        <Grid item sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item xs={12}>
          <MKBox py={8} px={2} lineHeight={1} my="auto">
            <MKTypography
              variant="h5"
              color="secondary"
              align="center"
              fontWeight="light"
            >
              {name}
            </MKTypography>
            <MKTypography
              variant="subtitle2"
              color={position.color}
              mb={1}
              align="center"
            >
              {position.label}
            </MKTypography>
            <MKTypography variant="subtitle1" color="black50" mb={2}>
              {description}
            </MKTypography>
            <Grid container justifyContent="center" sx={{ gap: 2 }}>
              {mail && (
                <Grid item>
                  <MKTypography component="a" href={mail} color="primary">
                    <MailOutlined />
                  </MKTypography>
                </Grid>
              )}
              {linkedIn && (
                <Grid>
                  <MKTypography component="a" href={linkedIn} color="secondary">
                    <LinkedIn />
                  </MKTypography>
                </Grid>
              )}
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the VerticalTeamCard
VerticalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "blackAlt",
      "black75",
      "black50",
      "lightBlue",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  mail: PropTypes.string,
  linkedIn: PropTypes.string,
};

export default VerticalTeamCard;
