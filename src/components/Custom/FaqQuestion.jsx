import { Collapse, Divider, Grid } from "@mui/material";
import colors from "assets/theme/base/colors";
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";
import { useState } from "react";
import FaqButton from "./FaqButton";

const FaqQuestion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <Grid container flexDirection="column" sx={{ gap: 2 }}>
          <Grid item>
            <FaqButton
              isOpen={isOpen}
              question={question}
              toggleAnswer={toggleAnswer}
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
            borderColor: colors.lightBlue.main,
            borderWidth: "0.12rem",
            borderRadius: "0.05rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

FaqQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqQuestion;
