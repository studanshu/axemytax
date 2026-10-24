import {
  Alert,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { extractionOverview } from "./extractionOverview";

const reasons = {
  missing_or_invalid_source_quote:
    "Supporting source text could not be verified.",
  issuer_not_explicit_in_source:
    "The source does not explicitly identify the issuer.",
  identifier_not_in_source_quote:
    "The identifier does not appear in the cited source.",
  full_name_missing_printed_components:
    "The name omits a printed given name or surname.",
  requires_deterministic_verification:
    "This calculation needs a separate verification step.",
};
export default function ExtractionOverview({ result, trace }) {
  const overview = extractionOverview(result, trace);
  return (
    <Paper
      variant="outlined"
      sx={{
        mt: 2,
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        borderColor: overview.needsReview ? "warning.main" : "divider",
      }}
    >
      <MKTypography variant="h6" color="secondary">
        Extraction summary
      </MKTypography>
      <Alert
        severity={overview.needsReview ? "warning" : "info"}
        sx={{ my: 2 }}
      >
        {trace?.status === "failed"
          ? overview.extracted
            ? "Extraction stopped. Results below are from documents that completed validation; remaining documents need review."
            : "Extraction stopped before any fields completed validation. Available processing metadata is shown below. Rejected model values are not accepted results."
          : overview.needsReview
            ? "Some details need review. Source-checked values are shown below; unsupported values are withheld."
            : "Extracted values passed the available source checks. Review them against the original document."}
      </Alert>
      <MKBox display="flex" gap={1} flexWrap="wrap" mb={2}>
        <Chip
          label={`${overview.extracted} source-checked`}
          color="success"
          variant="outlined"
        />
        <Chip
          label={`${overview.withheld} withheld`}
          color="warning"
          variant="outlined"
        />
        <Chip label={`${overview.notFound} not found`} variant="outlined" />
      </MKBox>
      {overview.metadata.length > 0 && (
        <>
          <MKTypography variant="subtitle2" mb={1}>
            Processing metadata
          </MKTypography>
          <MKBox
            component="dl"
            m={0}
            display="grid"
            sx={{
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: 2,
            }}
          >
            {overview.metadata.map(([label, value]) => (
              <MKBox
                key={label}
                sx={{
                  minWidth: 0,
                  p: 1.5,
                  bgcolor: "light.main",
                  borderRadius: 1,
                }}
              >
                <MKTypography component="dt" variant="caption" color="text">
                  {label}
                </MKTypography>
                <MKTypography
                  component="dd"
                  variant="body2"
                  m={0}
                  sx={{ overflowWrap: "anywhere" }}
                >
                  {String(value)}
                </MKTypography>
              </MKBox>
            ))}
          </MKBox>
        </>
      )}
      {overview.fields.length > 0 && (
        <MKBox component="details" mt={2}>
          <MKTypography
            component="summary"
            variant="body2"
            sx={{ cursor: "pointer" }}
          >
            Field status and review reasons ({overview.fields.length})
          </MKTypography>
          <TableContainer sx={{ mt: 1 }}>
            <Table
              size="small"
              aria-label="Extracted and withheld field status"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Review details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {overview.fields.map((field, index) => (
                  <TableRow key={`${index}-${field.path}`}>
                    <TableCell sx={{ overflowWrap: "anywhere", maxWidth: 220 }}>
                      <MKTypography variant="caption" display="block">
                        {field.document}
                      </MKTypography>
                      {field.path}
                      {field.required ? " (required)" : ""}
                    </TableCell>
                    <TableCell>
                      <Chip
                        size="small"
                        label={
                          field.status === "extracted"
                            ? "Source-checked"
                            : field.status === "invalid"
                              ? "Withheld"
                              : "Not found"
                        }
                        color={
                          field.status === "extracted"
                            ? "success"
                            : field.status === "invalid"
                              ? "warning"
                              : "default"
                        }
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell>
                      {field.reasons
                        .map((code) => reasons[code] || code.replace(/_/g, " "))
                        .join(" ") ||
                        (field.status === "not_found"
                          ? "No supported value was returned."
                          : "Check the original document.")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MKBox>
      )}
    </Paper>
  );
}
ExtractionOverview.propTypes = {
  result: PropTypes.object,
  trace: PropTypes.object,
};
