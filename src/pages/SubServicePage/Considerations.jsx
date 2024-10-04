import Send from "@mui/icons-material/Send";
import { Box, Container, Grid } from "@mui/material";

// Material Kit 2 React base styles
import typography from "assets/theme/base/typography";
import { IsUpLgScreen } from "assets/theme/functions/breakpoints";
import FaqQuestion from "components/Custom/FaqQuestion";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { PropTypes } from "prop-types";
import { Suspense, useState } from "react";
const { size } = typography;
const renderLoader = () => <p>Loading</p>;

function Considerations({ jsonData }) {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };
  return (
    <Suspense fallback={renderLoader()}>
      <Box mt={24}>
        <Container>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            spacing={9}
          >
            <Grid item alignSelf="center">
              <SectionHeader
                title={jsonData.title}
                caption={jsonData.caption}
              />
            </Grid>
            <Grid item className="content">
              <Grid container justifyContent="space-between">
                <Grid item xs={12} lg={6}>
                  {jsonData.considerationList.map((consideration, index) => (
                    <Box key={index} mb={1}>
                      <FaqQuestion
                        key={index}
                        question={consideration.heading}
                        answer={
                          !IsUpLgScreen()
                            ? renderBulletList(consideration)
                            : null
                        }
                        isOpen={
                          openQuestionIndex != null &&
                          openQuestionIndex === index
                        }
                        toggleAnswer={() => handleToggle(index)}
                        iconDict={{
                          left: {
                            openIcon: consideration.leftIcon,
                            iconColor: consideration.leftIconColor,
                            closeIcon: consideration.leftIcon,
                          },
                          right: {
                            openIcon: IsUpLgScreen()
                              ? consideration.rightOpenIcon[0]
                              : consideration.rightOpenIcon[1],
                            closeIcon: IsUpLgScreen()
                              ? consideration.rightCloseIcon[0]
                              : consideration.rightCloseIcon[1],
                            iconColor:
                              openQuestionIndex != null &&
                              openQuestionIndex === index
                                ? consideration.rightIconColor
                                : "black75",
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  className="answerContentItems"
                  container
                  justifyContent="space-between"
                  flexDirection="column"
                >
                  <Grid
                    item
                    container
                    className="answerBullet"
                    flexDirection="column"
                    spacing={4}
                    justifyContent="center"
                  >
                    {IsUpLgScreen() &&
                      openQuestionIndex != null &&
                      jsonData.considerationList[openQuestionIndex].bullets.map(
                        (bullet, index) => (
                          <Grid item key={index}>
                            <MKTypography
                              variant="h6Light"
                              color="black75"
                              textAlign="justify"
                            >
                              {index + 1}. {bullet}
                            </MKTypography>
                          </Grid>
                        )
                      )}
                  </Grid>
                  <Grid item className="ctaButton" pb={4}>
                    <MKButton
                      size="large"
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: size.lg,
                        width: "100%",
                        boxShadow:
                          "0px 105.68352508544922px 84.54682159423828px 0px rgba(0, 0, 0, 7%), 0px 44.15205383300781px 35.3216438293457px 0px rgba(0, 0, 0, 5%), 0px 23.605802536010742px 18.884639739990234px 0px rgba(0, 0, 0, 4%), 0px 13.2332181930542px 10.586573600769043px 0px rgba(0, 0, 0, 4%), 0px 7.0280632972717285px 5.62244987487793px 0px rgba(0, 0, 0, 3%), 0px 2.924534320831299px 2.339627265930176px 0px rgba(0, 0, 0, 2%);",
                      }}
                      endIcon={<Send />}
                    >
                      {jsonData.buttonText}
                    </MKButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Suspense>
  );
}
function renderBulletList(consideration) {
  return (
    <ul style={{ paddingLeft: 12 }}>
      {consideration.bullets.map((bullet, index) => (
        <li
          key={index}
          style={{
            listStylePosition: "inside",
            paddingTop: 12,
          }}
        >
          <MKTypography variant="h6Light" color="black75">
            {bullet}
          </MKTypography>
        </li>
      ))}
    </ul>
  );
}
Considerations.propTypes = {
  jsonData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    considerationList: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
        leftIcon: PropTypes.element,
        leftIconColor: PropTypes.string,
        rightIcon: PropTypes.element,
        rightIconColor: PropTypes.string,
      })
    ).isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default Considerations;
