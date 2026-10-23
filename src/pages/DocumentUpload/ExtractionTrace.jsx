import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Chip,
} from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const statuses = {
  completed: { label: "Completed", color: "success" },
  failed: { label: "Failed", color: "error" },
  skipped: { label: "Not run", color: "default" },
  not_started: { label: "Not started", color: "default" },
  running: { label: "Running", color: "info" },
};

export default function ExtractionTrace({ trace, attemptId = "current" }) {
  if (!trace?.steps) return null;
  return (
    <MKBox mt={2}>
      <MKTypography variant="h6" color="secondary" mb={1}>
        Extraction path
      </MKTypography>
      {trace.trace_id && (
        <MKTypography
          variant="caption"
          display="block"
          sx={{ overflowWrap: "anywhere" }}
        >
          Request: {trace.trace_id}
        </MKTypography>
      )}
      <Alert
        severity={trace.status === "failed" ? "warning" : "info"}
        sx={{ my: 2 }}
      >
        {trace.includes_document_contents
          ? "Details include document text and personal information. Keep them private."
          : "Showing step status. Enable Show extraction steps before extracting to include OCR text, prompts and model responses."}{" "}
        Steps are reported when the request finishes; they do not prove that
        extracted values are correct.
      </Alert>
      <MKBox component="ol" m={0} p={0} sx={{ listStyle: "none" }}>
        {trace.steps.map((step, index) => {
          const status = statuses[step.status] || statuses.completed;
          const detailId = `trace-${attemptId}-${index}`;
          return (
            <MKBox component="li" key={step.step} mb={1}>
              <Accordion disableGutters>
                <AccordionSummary
                  id={`${detailId}-heading`}
                  aria-controls={detailId}
                >
                  <MKBox
                    display="flex"
                    alignItems="center"
                    gap={1}
                    flexWrap="wrap"
                  >
                    <Chip
                      size="small"
                      label={status.label}
                      color={status.color}
                    />
                    <MKTypography variant="body2" fontWeight="medium">
                      {index + 1}. {step.title}
                    </MKTypography>
                    {step.duration_ms != null && (
                      <MKTypography variant="caption">
                        {step.duration_ms} ms
                      </MKTypography>
                    )}
                  </MKBox>
                </AccordionSummary>
                <AccordionDetails id={detailId}>
                  {step.status === "failed" && (
                    <Alert severity="error" sx={{ mb: 1 }}>
                      This step stopped. A rejected model response may be
                      unavailable; no output is invented for it.
                    </Alert>
                  )}
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
                    {JSON.stringify(
                      {
                        summary: step.summary,
                        error: step.error,
                        events: step.events,
                        ...step.details,
                        output: step.output,
                      },
                      null,
                      2,
                    )}
                  </MKBox>
                </AccordionDetails>
              </Accordion>
            </MKBox>
          );
        })}
      </MKBox>
    </MKBox>
  );
}

ExtractionTrace.propTypes = {
  attemptId: PropTypes.string,
  trace: PropTypes.shape({
    trace_id: PropTypes.string,
    status: PropTypes.string,
    includes_document_contents: PropTypes.bool,
    steps: PropTypes.arrayOf(
      PropTypes.shape({
        step: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        status: PropTypes.string,
        duration_ms: PropTypes.number,
        summary: PropTypes.any,
        error: PropTypes.object,
        events: PropTypes.array,
        details: PropTypes.object,
        output: PropTypes.any,
      }),
    ),
  }),
};
