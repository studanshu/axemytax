// @mui material components
import { Grid, TextField, useMediaQuery, useTheme } from "@mui/material";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC } from "react";

interface SubServiceTypographyProps {
  subService: string;
  selSubService: string;
}

const SubServiceTypography: FC<SubServiceTypographyProps> = ({ subService, selSubService }) => {
  return subService === selSubService ? (
    <MKTypography variant="body2" color="lightBlue">
      {subService}
    </MKTypography>
  ) : (
    <MKTypography variant="body1" color="black50">
      {subService}
    </MKTypography>
  );
};

const useStyles = makeStyles((_theme) => ({
  noBorder: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
    },
  },
}));

interface SubServiceNavProps {
  subServicesList: string[];
  selSubService: string;
  setSelSubService: (subService: string) => void;
}

const SubServiceNav: FC<SubServiceNavProps> = ({ 
  subServicesList, 
  selSubService, 
  setSelSubService 
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  
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
      {isUpMd ? (
        subServicesList.map((subService, index) => (
          <Grid item key={index}>
            <MKButton
              sx={{
                py: 1,
                borderRadius: 8,
                border:
                  subService === selSubService
                    ? `2px solid ${colors.lightBlue?.main || colors.info.main}`
                    : `2px solid ${colors.white.main}`,
                color:
                  subService === selSubService
                    ? colors.lightBlue?.main || colors.info.main
                    : rgba(colors.black.main, 0.5),
              }}
              onClick={() => setSelSubService(subService)}
            >
              <SubServiceTypography
                subService={subService}
                selSubService={selSubService}
              />
            </MKButton>
          </Grid>
        ))
      ) : (
        <TextField
          select
          fullWidth
          value={selSubService}
          onChange={(e) => setSelSubService(e.target.value)}
          variant="outlined"
          className={classes.noBorder}
          SelectProps={{
            IconComponent: KeyboardArrowDownOutlined,
            displayEmpty: true,
          }}
        >
          {subServicesList.map((subService, index) => (
            <MenuItem key={index} value={subService}>
              <SubServiceTypography
                subService={subService}
                selSubService={selSubService}
              />
            </MenuItem>
          ))}
        </TextField>
      )}
    </Grid>
  );
};

export default SubServiceNav;
