// @mui material components
import { Box } from "@mui/material";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKButton from "components/MKButton";

const { size } = typography;

function SubServiceNav({ subServicesList, selSubService, setSelSubService }) {
  return (
    <Box
      display="flex"
      my={6}
      py={1}
      px={2}
      sx={{
        background: colors.white.main,
        borderRadius: 8,
        boxShadow:
          "0px 1.82px 1.46px 0px #00000005, 0px 4.37px 3.5px 0px #00000007, 0px 8.23px 6.59px 0px #00000009",
      }}
    >
      {subServicesList.map((subService, index) => (
        <MKButton
          sx={{
            py: 0,
            width: "240px",
            borderRadius: 8,
            fontSize: size.md,
            fontWeight: 500,
            lineHeight: "normal",
            border:
              index === selSubService
                ? `2px solid ${colors.blue.main}`
                : `2px solid ${colors.white.main}`,
            color:
              index === selSubService
                ? colors.blue.main
                : rgba(colors.blackAlt.main, "0.5"),
          }}
          onClick={() => setSelSubService(index)}
        >
          {subService}
        </MKButton>
      ))}
    </Box>
  );
}

export default SubServiceNav;
