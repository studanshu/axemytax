import Send from "@mui/icons-material/Send";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import typography from "assets/theme/base/typography";
import FaqQuestion from "components/Custom/FaqQuestion";
import SectionHeader from "components/Custom/SectionHeader";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { FC, ComponentType, Suspense, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const { size } = typography;
const renderLoader = () => <></>;

interface ConsiderationItem {
  heading: string;
  bullets: string[];
  leftIcon?: ComponentType;
  leftIconColor?: string;
  rightOpenIcon?: [ComponentType, ComponentType];
  rightCloseIcon?: [ComponentType, ComponentType];
  rightIconColor?: string;
}

interface ConsiderationsProps {
  jsonData: {
    title: string;
    caption: string;
    considerationList: ConsiderationItem[];
    buttonText: string;
  };
}

const Considerations: FC<ConsiderationsProps> = ({ jsonData }) => {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
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
                        question={consideration.heading}
                        answer={
                          !isUpLg
                            ? (renderBulletList(consideration) as any)
                            : undefined
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
                            openIcon: isUpLg
                              ? consideration.rightOpenIcon?.[0]
                              : consideration.rightOpenIcon?.[1],
                            closeIcon: isUpLg
                              ? consideration.rightCloseIcon?.[0]
                              : consideration.rightCloseIcon?.[1],
                            iconColor:
                              openQuestionIndex != null &&
                              openQuestionIndex === index
                                ? consideration.rightIconColor || "black75"
                                : "black75",
                          } as any,
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
                    {isUpLg &&
                      openQuestionIndex != null &&
                      jsonData.considerationList[openQuestionIndex].bullets.map(
                        (bullet, index) => (
                          <Grid item key={index}>
                            <Box
                              sx={{
                                "& p": {
                                  margin: 0,
                                  fontSize: size.md,
                                  color: "text.secondary",
                                  textAlign: "justify",
                                  lineHeight: 1.6,
                                },
                                "& strong": {
                                  fontWeight: 600,
                                  color: "text.primary",
                                },
                                "& em": {
                                  fontStyle: "italic",
                                },
                                "& code": {
                                  backgroundColor: "grey.100",
                                  padding: "2px 6px",
                                  borderRadius: "4px",
                                  fontSize: "0.9em",
                                  fontFamily: "monospace",
                                },
                                "& a": {
                                  color: "primary.main",
                                  textDecoration: "none",
                                  "&:hover": {
                                    textDecoration: "underline",
                                  },
                                },
                              }}
                            >
                              <MKTypography
                                variant="subtitle1"
                                color="black75"
                                component="div"
                              >
                                <ReactMarkdown
                                  remarkPlugins={[remarkGfm]}
                                  rehypePlugins={[rehypeRaw]}
                                >
                                  {`${index + 1}. ${bullet}`}
                                </ReactMarkdown>
                              </MKTypography>
                            </Box>
                          </Grid>
                        )
                      )}
                  </Grid>
                  <Grid item className="ctaButton" pb={4} pt={4}>
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
};

function renderBulletList(consideration: ConsiderationItem) {
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
          <Box
            component="div"
            sx={{
              display: "inline",
              "& p": {
                display: "inline",
                margin: 0,
                fontSize: size.md,
                color: "text.secondary",
                lineHeight: 1.6,
              },
              "& strong": {
                fontWeight: 600,
                color: "text.primary",
              },
              "& em": {
                fontStyle: "italic",
              },
              "& code": {
                backgroundColor: "grey.100",
                padding: "2px 6px",
                borderRadius: "4px",
                fontSize: "0.9em",
                fontFamily: "monospace",
              },
              "& a": {
                color: "primary.main",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            }}
          >
            <MKTypography variant="subtitle1" color="black75" component="span">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {bullet}
              </ReactMarkdown>
            </MKTypography>
          </Box>
        </li>
      ))}
    </ul>
  );
}

export default Considerations;
