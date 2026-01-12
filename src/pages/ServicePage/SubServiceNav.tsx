// @mui material components
import { TextField, useMediaQuery, useTheme, IconButton, Box } from "@mui/material";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import { KeyboardArrowDownOutlined, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FC, useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        py: 1,
        background: colors.white.main,
        borderRadius: 8,
        px: 2,
        boxShadow:
          "0px 1.82px 1.46px 0px #00000005, 0px 4.37px 3.5px 0px #00000007, 0px 8.23px 6.59px 0px #00000009",
        gap: 1,
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      {isUpMd ? (
        <>
          <IconButton 
            onClick={() => scroll('left')} 
            size="small"
            sx={{ flexShrink: 0 }}
          >
            <ChevronLeft />
          </IconButton>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              overflowY: "hidden",
              flex: 1,
              minWidth: 0,
              gap: 1,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {subServicesList.map((subService, index) => (
              <MKButton
                key={index}
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 8,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
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
            ))}
          </Box>
          <IconButton 
            onClick={() => scroll('right')} 
            size="small"
            sx={{ flexShrink: 0 }}
          >
            <ChevronRight />
          </IconButton>
        </>
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
    </Box>
  );
};

export default SubServiceNav;
