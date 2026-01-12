import Box from "@mui/material/Box";
import colors from "assets/theme/base/colors";
import MKTypography from "components/MKTypography";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ContentItem {
  type: string;
  value: string | string[];
  color?: string;
  alt?: string;
  label?: string;
}

interface ParseContentProps {
  mainContent: ContentItem[];
}

const ParseContent: FC<ParseContentProps> = ({ mainContent }) => {
  return (
    <>
      {mainContent.map((content, index) => {
        switch (content.type) {
          case "headingBig":
            return (
              <Box key={index} sx={{ mb: { xs: 2, lg: 4 } }}>
                <MKTypography variant="h4" color={content.color as any} textAlign="justify">
                  {content.value}
                </MKTypography>
              </Box>
            );
          case "bodyBig":
            return (
              <MKTypography
                key={index}
                variant="body1"
                color={content.color as any}
                textAlign="justify"
                sx={{ mb: { xs: 3, lg: 6 } }}
              >
                {content.value}
              </MKTypography>
            );
          case "headingSmall":
            return (
              <Box key={index} mb={1}>
                <MKTypography variant="h5" color={content.color as any} textAlign="justify">
                  {content.value}
                </MKTypography>
              </Box>
            );
          case "bodySmall":
            return (
              <MKTypography
                key={index}
                variant="subtitle1"
                color={content.color as any}
                textAlign="justify"
                sx={{ mb: { xs: 2, lg: 4 } }}
              >
                {content.value}
              </MKTypography>
            );
          case "img":
            return (
              <Box key={index}>
                <LazyLoadImage
                  src={content.value as string}
                  alt={content.alt || ""}
                  effect="blur"
                />
                <br />
                <MKTypography variant="subtitle2" color="black50" mb={1}>
                  {content.label}
                </MKTypography>
              </Box>
            );
          case "break":
            return <br key={index} />;
          case "ul":
            return (
              <Box
                key={index}
                component="ul"
                sx={{ 
                  mb: { xs: 2, lg: 4 },
                  color: content.color ? (colors as any)[content.color]?.main : colors.dark.main,
                  listStylePosition: "inside",
                  textAlign: "justify"
                }}
              >
                {(content.value as string[]).map((item, idx) => (
                  <li key={idx}>
                    {item}
                  </li>
                ))}
              </Box>
            );
          case "ol":
            return (
              <Box
                key={index}
                component="ol"
                sx={{ 
                  mb: { xs: 2, lg: 4 },
                  color: content.color ? (colors as any)[content.color]?.main : colors.dark.main,
                  listStylePosition: "inside",
                  textAlign: "justify"
                }}
              >
                {(content.value as string[]).map((item, idx) => (
                  <li key={idx}>
                    {item}
                  </li>
                ))}
              </Box>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default ParseContent;
