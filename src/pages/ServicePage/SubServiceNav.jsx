// @mui material components
import { Grid } from "@mui/material";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import PropTypes from "prop-types";

function SubServiceNav({ subServicesList, selSubService, setSelSubService }) {
  return (
    <Grid
      container
      display="flex"
      py={1}
      justifyContent="space-around"
      sx={{
        background: colors.white.main,
        borderRadius: 8,
        px: 2,
        boxShadow:
          "0px 1.82px 1.46px 0px #00000005, 0px 4.37px 3.5px 0px #00000007, 0px 8.23px 6.59px 0px #00000009",
      }}
    >
      {subServicesList.map((subService, index) => (
        <Grid item key={index}>
          <MKButton
            sx={{
              py: 1,
              borderRadius: 8,
              border:
                subService === selSubService
                  ? `2px solid ${colors.lightBlue.main}`
                  : `2px solid ${colors.white.main}`,
              color:
                subService === selSubService
                  ? colors.lightBlue.main
                  : rgba(colors.black.main, "0.5"),
            }}
            onClick={() => setSelSubService(subService)}
          >
            {subService === selSubService ? (
              <MKTypography variant="body2" color="lightBlue">
                {subService}
              </MKTypography>
            ) : (
              <MKTypography variant="body1" color="black50">
                {subService}
              </MKTypography>
            )}
          </MKButton>
        </Grid>
      ))}
    </Grid>
  );
}
SubServiceNav.propTypes = {
  subServicesList: PropTypes.arrayOf(PropTypes.string).isRequired,
  selSubService: PropTypes.string.isRequired,
  setSelSubService: PropTypes.func.isRequired,
};

export default SubServiceNav;
