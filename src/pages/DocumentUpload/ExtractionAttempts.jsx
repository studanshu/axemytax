import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
} from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import ExtractionTrace from "./ExtractionTrace";

export default function ExtractionAttempts({
  attempts = [],
  processing = false,
}) {
  if (!attempts.length) return null;
  return (
    <MKBox mt={3}>
      <MKTypography variant="h6">Extraction attempts</MKTypography>
      <MKTypography variant="caption">
        Last five attempts stay in this page until you remove the document or
        reload.
      </MKTypography>
      {processing && (
        <Alert severity="info" role="status" sx={{ my: 1 }}>
          Upload sent. Waiting for the server trace. The active server step is
          not available yet.
        </Alert>
      )}
      {[...attempts].reverse().map((attempt) => (
        <Accordion key={attempt.id} defaultExpanded disableGutters>
          <AccordionSummary aria-controls={`attempt-${attempt.id}`}>
            <MKTypography variant="body2">
              Attempt {attempt.number} · {attempt.status} ·{" "}
              {new Date(attempt.startedAt).toLocaleTimeString()}
            </MKTypography>
          </AccordionSummary>
          <AccordionDetails id={`attempt-${attempt.id}`}>
            {attempt.httpStatus != null && (
              <MKTypography variant="caption">
                HTTP {attempt.httpStatus}
              </MKTypography>
            )}
            {attempt.error && <Alert severity="error">{attempt.error}</Alert>}
            {attempt.trace ? (
              <ExtractionTrace trace={attempt.trace} attemptId={attempt.id} />
            ) : attempt.status !== "Waiting" ? (
              <Alert severity="warning">
                No server trace was returned. Server progress cannot be
                determined from this attempt.
              </Alert>
            ) : null}
          </AccordionDetails>
        </Accordion>
      ))}
    </MKBox>
  );
}
ExtractionAttempts.propTypes = {
  processing: PropTypes.bool,
  attempts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      startedAt: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      httpStatus: PropTypes.number,
      error: PropTypes.string,
      trace: PropTypes.object,
    }),
  ),
};
