import { Suspense } from "react";

// @mui material components
import { Box } from "@mui/material";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Import JSON
import { WhyUsJson } from "assets/data/ServicePage/WhyUsJson";

const renderLoader = () => <p>Loading</p>;

const { size, fontWeightRegular, fontWeightMedium } = typography;
const { info, light, white, black } = colors;

function WhyUs() {
  return (
    <Suspense fallback={renderLoader()}>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        p={8}
        sx={{ background: light.main, placeItems: "center" }}
      >
        <Box>
          <MKTypography
            variant="h6"
            color="info"
            sx={{
              fontWeight: fontWeightMedium,
              textTransform: "uppercase",
            }}
          >
            {WhyUsJson.caption}
          </MKTypography>
          <MKTypography variant="d5" pt={1} color="secondary">
            {WhyUsJson.title}
          </MKTypography>
        </Box>

        <Box py={6} maxWidth="1200px" display="flex" gap={4}>
          {WhyUsJson.reasons.map((reason, index) => (
            <Box
              key={`reasons-${index}`}
              maxWidth="300px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={4}
            >
              <img
                src={reason.image}
                alt=""
                style={{ width: "80px", height: "80px" }}
              />
              <Box sx={{ textAlign: "center" }}>
                <MKTypography
                  variant="subtitle1"
                  sx={{
                    fontWeight: "500",
                    textTransform: "capitalize",
                    color: rgba(black.main, "0.75"),
                  }}
                >
                  {reason.title}
                </MKTypography>
                <MKTypography
                  variant="subtitle2"
                  sx={{
                    mt: 0.5,
                    display: "flex",
                    placeItems: "center",
                    gap: 0.5,
                    fontSize: size.sm,
                    color: rgba(black.main, "0.5"),
                  }}
                >
                  {reason.des}
                </MKTypography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Suspense>
  );
}

export default WhyUs;
