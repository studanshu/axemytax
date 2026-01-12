import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MKTypography from "@mui/material/Typography";
import { FC, ComponentType } from "react";

interface IconConfig {
  openIcon?: ComponentType;
  iconColor?: string;
  closeIcon?: ComponentType;
}

interface IconDictConfig {
  left?: IconConfig;
  right: {
    openIcon: ComponentType;
    iconColor: string;
    closeIcon: ComponentType;
  };
}

interface FaqButtonProps {
  isOpen: boolean;
  question: string;
  toggleAnswer: () => void;
  variant?: string;
  color?: string;
  iconDict?: IconDictConfig;
}

const FaqButton: FC<FaqButtonProps> = ({
  isOpen = false,
  question = "",
  toggleAnswer = () => {},
  variant = "body1",
  color = "black75",
  iconDict = {
    left: {
      openIcon: undefined,
      iconColor: undefined,
      closeIcon: undefined,
    },
    right: {
      openIcon: RemoveCircleOutlineIcon,
      iconColor: "primary",
      closeIcon: AddCircleOutlineIcon,
    },
  },
}) => {
  const {
    left: {
      openIcon: LeftOpenIcon,
      iconColor: leftIconColor,
      closeIcon: LeftCloseIcon,
    } = {},
    right: {
      openIcon: RightOpenIcon = RemoveCircleOutlineIcon,
      iconColor: rightIconColor = "primary",
      closeIcon: RightCloseIcon = AddCircleOutlineIcon,
    } = { openIcon: RemoveCircleOutlineIcon, iconColor: "primary", closeIcon: AddCircleOutlineIcon },
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
          <IconButton color={leftIconColor as any} aria-label="left icon">
            {isOpen ? <LeftOpenIcon /> : LeftCloseIcon && <LeftCloseIcon />}
          </IconButton>
        )}
        <MKTypography
          variant={variant as any}
          color={color as any}
          onClick={toggleAnswer}
          sx={{ cursor: "pointer" }}
        >
          {question}
        </MKTypography>
      </Grid>
      <IconButton
        color={rightIconColor as any}
        aria-label="toggle question"
        onClick={toggleAnswer}
      >
        {isOpen ? <RightOpenIcon /> : <RightCloseIcon />}
      </IconButton>
    </Grid>
  );
};

export default FaqButton;
