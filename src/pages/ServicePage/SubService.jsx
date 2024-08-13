import { Suspense, useState } from "react";

// @mui material components
import { Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Kit 2 React helper functions
import rgba from "assets/theme/functions/rgba";

// Material Kit 2 React components
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Self-Created
import SubServiceNav from "./SubServiceNav";

// Import JSON
import { SubServiceJson } from "assets/data/ServicePage/SubServiceJson";

const renderLoader = () => <p>Loading</p>;

const { size, fontWeightRegular, fontWeightMedium } = typography;
const { lightGreen, white, blackAlt } = colors;

function SubService() {
  const [selSubService, setSelSubService] = useState(1);

  const currentSubService = SubServiceJson.subServicesList[selSubService];
  const cta = SubServiceJson.cta[currentSubService] || {};
  const content = SubServiceJson.content[currentSubService] || [];

  return (
    <Suspense fallback={renderLoader()}>
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        p={8}
        sx={{ background: lightGreen.main, placeItems: "center" }}
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
            {SubServiceJson.caption}
          </MKTypography>
          <MKTypography variant="d5" pt={1} color="darkBlue">
            {SubServiceJson.title}
          </MKTypography>
        </Box>

        <Box>
          <SubServiceNav
            subServicesList={SubServiceJson.subServicesList}
            selSubService={selSubService}
            setSelSubService={setSelSubService}
          />
        </Box>

        <Box
          maxWidth="968px"
          height="100%"
          display="flex"
          gap={6}
          pt={3}
          sx={{ placeContent: "space-between" }}
        >
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            flex={1}
            sx={{
              placeContent: "center",
              placeItems: "center",
            }}
          >
            <img
              src={cta.image}
              alt=""
              style={{ position: "absolute", height: "100%", zIndex: 0 }}
            />

            <MKTypography
              variant="h2"
              color="white"
              sx={{ width: "260px", textAlign: "center", zIndex: 1 }}
            >
              {cta.title}
            </MKTypography>
            <MKTypography
              variant="subtitle1"
              pt={3}
              color="white"
              sx={{
                width: "280px",
                lineHeight: "normal",
                fontSize: size.xs,
                fontWeight: fontWeightRegular,
                textAlign: "center",
                zIndex: 1,
              }}
            >
              {cta.des}
            </MKTypography>

            {cta.action && (
              <MKButton
                variant="text"
                color="blue"
                item
                href="#services"
                sx={{
                  mt: 5,
                  textTransform: "capitalize",
                  fontSize: size.xs,
                  background: `${white.main} !important`,
                }}
              >
                {cta.action}
                &nbsp;
                <SendIcon />
              </MKButton>
            )}
          </Box>

          <Box
            flex={1}
            display="flex"
            flexWrap="wrap"
            gap={4}
            p={2}
            justifyContent="end"
          >
            {content.map((item, index) => (
              <Box key={index} display="flex" flexDirection="column">
                {item.icon}

                <MKTypography
                  variant="h6"
                  color="darkBlue"
                  pt={3}
                  sx={{
                    fontWeight: fontWeightMedium,
                  }}
                >
                  {item.title}
                </MKTypography>

                <MKTypography
                  variant="subtitle1"
                  pt={1}
                  sx={{
                    width: "180px",
                    lineHeight: "normal",
                    fontSize: size.xs,
                    fontWeight: fontWeightRegular,
                    color: rgba(blackAlt.main, "0.5"),
                  }}
                >
                  {item.des}
                </MKTypography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
}

export default SubService;
