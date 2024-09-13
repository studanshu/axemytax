import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MKTypography from "@mui/material/Typography";
import PropTypes from "prop-types";

const FaqButton = ({
  isOpen,
  question,
  toggleAnswer,
  variant,
  color,
  iconDict,
}) => {
  const {
    left: {
      openIcon: LeftOpenIcon,
      iconColor: leftIconColor,
      closeIcon: LeftCloseIcon,
    } = {},
    right: {
      openIcon: RightOpenIcon,
      iconColor: rightIconColor,
      closeIcon: RightCloseIcon,
    } = {},
  } = iconDict || {};

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      flexWrap="nowrap"
    >
      <Grid container alignItems="center" gap={4} flexWrap="nowrap">
        {LeftOpenIcon && (
          <IconButton color={leftIconColor} aria-label="left icon">
            {isOpen ? <LeftOpenIcon /> : <LeftCloseIcon />}
          </IconButton>
        )}
        <MKTypography
          variant={variant}
          color={color}
          onClick={toggleAnswer}
          sx={{ cursor: "pointer" }}
        >
          {question}
        </MKTypography>
      </Grid>
      <IconButton
        color={rightIconColor}
        aria-label="toggle question"
        onClick={toggleAnswer}
      >
        {isOpen ? <RightOpenIcon /> : <RightCloseIcon />}
      </IconButton>
    </Grid>
  );
};

FaqButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  toggleAnswer: PropTypes.func.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  iconDict: PropTypes.shape({
    left: PropTypes.shape({
      openIcon: PropTypes.elementType,
      iconColor: PropTypes.string,
      closeIcon: PropTypes.elementType,
    }),
    right: PropTypes.shape({
      openIcon: PropTypes.elementType.isRequired,
      iconColor: PropTypes.string.isRequired,
      closeIcon: PropTypes.elementType.isRequired,
    }).isRequired,
  }).isRequired,
};

FaqButton.defaultProps = {
  variant: "body1",
  color: "black75",
  iconDict: {
    right: {
      openIcon: RemoveCircleOutlineIcon,
      iconColor: "primary",
      closeIcon: AddCircleOutlineIcon,
    },
  },
};

export default FaqButton;
