import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
} from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

export default function ExtractionTrace({ trace }) {
  if (!trace?.steps) return null;
  return (
    <MKBox mt={4}>
      <MKTypography variant="h6" color="secondary" mb={2}>
        Extraction steps
      </MKTypography>
      <Alert severity="info" sx={{ mb: 2 }}>
        These steps include document text and personal details. They show what
        happened in this request; they do not prove that the extracted values
        are correct.
      </Alert>
      {trace.steps.map((step, index) => (
        <Accordion key={step.step} disableGutters>
          <AccordionSummary aria-controls={`trace-step-${step.step}`}>
            <MKTypography variant="body2" fontWeight="medium">
              {index + 1}. {step.title}
            </MKTypography>
          </AccordionSummary>
          <AccordionDetails id={`trace-step-${step.step}`}>
            <MKBox
              component="pre"
              m={0}
              p={2}
              sx={{
                bgcolor: "light.main",
                fontSize: "0.75rem",
                whiteSpace: "pre-wrap",
                overflowWrap: "anywhere",
                maxHeight: 480,
                overflow: "auto",
              }}
            >
              {JSON.stringify(step.output, null, 2)}
            </MKBox>
          </AccordionDetails>
        </Accordion>
      ))}
    </MKBox>
  );
}

ExtractionTrace.propTypes = {
  trace: PropTypes.shape({
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        step: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        output: PropTypes.any,
      }),
    ),
  }),
};
