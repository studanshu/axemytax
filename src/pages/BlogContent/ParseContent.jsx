import Box from "@mui/material/Box";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

const ParseContent = ({ mainContent }) => {
  return (
    <>
      {mainContent.map((content, index) => {
        const commonProps = {
          key: index,
          color: content.color,
        };

        switch (content.type) {
          case "headingBig":
            return (
              <Box key={index} sx={{ mb: { xs: 2, lg: 4 } }}>
                <MKTypography variant="h4Light" {...commonProps}>
                  {content.value}
                </MKTypography>
              </Box>
            );
          case "bodyBig":
            return (
              <MKTypography
                variant="body1"
                sx={{ mb: { xs: 3, lg: 6 } }}
                {...commonProps}
              >
                {content.value}
              </MKTypography>
            );
          case "headingSmall":
            return (
              <Box key={index} mb={1}>
                <MKTypography variant="h5Light" {...commonProps}>
                  {content.value}
                </MKTypography>
              </Box>
            );
          case "bodySmall":
            return (
              <MKTypography
                variant="subtitle1"
                sx={{ mb: { xs: 2, lg: 4 } }}
                {...commonProps}
              >
                {content.value}
              </MKTypography>
            );
          case "img":
            return (
              <>
                <img key={index} src={content.value} alt={content.alt} />
                <br />
                <MKTypography variant="subtitle2" color="black50" mb={1}>
                  {content.label}
                </MKTypography>
              </>
            );
          case "break":
            return <br key={index} />;
          case "ul":
            return (
              <Box key={index} component="ul" sx={{ mb: { xs: 2, lg: 4 } }}>
                {content.value.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </Box>
            );
          case "ol":
            return (
              <Box key={index} component="ol" sx={{ mb: { xs: 2, lg: 4 } }}>
                {content.value.map((item, idx) => (
                  <li key={idx}>{item}</li>
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
ParseContent.propTypes = {
  mainContent: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
      color: PropTypes.string,
      alt: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
};

export default ParseContent;
