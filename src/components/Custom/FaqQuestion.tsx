import { Collapse, Divider, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import MKTypography from "components/MKTypography";
import { FC, ComponentType } from "react";
import FaqButton from "./FaqButton";
import { useInteractionTracking } from "hooks/useInteractionTracking";

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

interface FaqQuestionProps {
  question?: string;
  answer?: string;
  isOpen: boolean;
  toggleAnswer: () => void;
  iconDict?: IconDictConfig;
  variant?: string;
  color?: string;
}

const FaqQuestion: FC<FaqQuestionProps> = ({
  question = "",
  answer = "",
  isOpen,
  toggleAnswer,
  ...FaqButtonProps
}) => {
  const { trackFaqExpand } = useInteractionTracking();

  const handleToggle = () => {
    if (!isOpen) {
      trackFaqExpand(question);
    }
    toggleAnswer();
  };

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <Grid container flexDirection="column" sx={{ gap: 2 }}>
          <Grid item>
            <FaqButton
              isOpen={isOpen}
              question={question}
              toggleAnswer={handleToggle}
              variant={isOpen ? "body2" : "body1"}
              color={isOpen ? "secondary" : "black75"}
              {...FaqButtonProps}
            />
          </Grid>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <Grid item px={1}>
              <MKTypography variant="subtitle1" color="black50">
                {answer}
              </MKTypography>
            </Grid>
          </Collapse>
        </Grid>
      </Grid>
      <Grid item>
        <Divider
          sx={{
            borderColor: colors.secondary.main,
            borderWidth: isOpen ? "0.24rem" : "0.12rem",
            borderRadius: "10.05rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default FaqQuestion;
