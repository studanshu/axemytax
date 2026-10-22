import {
  Alert,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { selectProfileData } from "./reviewData";
import ExtractionTrace from "./ExtractionTrace";
import borders from "assets/theme/base/borders";

function humanize(value) {
  return value
    .replace(/_/g, " ")
    .replace(/^./, (letter) => letter.toUpperCase());
}

function entries(value, labels, prefix = "") {
  return Object.entries(value || {}).flatMap(([key, item]) => {
    if (
      item == null ||
      item === "" ||
      [
        "id",
        "scope",
        "reconciliation",
        "review_required",
        "extraction_scope",
        "warnings",
        "transactions",
        "unparsed_rows",
        "layout_validation",
        "validation",
        "schedules_parsed",
      ].includes(key)
    )
      return [];
    const path = prefix ? `${prefix}.${key}` : key;
    const label = labels[path] || labels[key] || humanize(key);
    if (Array.isArray(item))
      return item.flatMap((element, index) =>
        element && typeof element === "object"
          ? entries(element, labels, `${path}.${index + 1}`)
          : [{ key: `${path}.${index}`, label, value: String(element) }],
      );
    if (typeof item === "object") {
      if ("amount" in item) {
        if (item.amount == null) return [];
        let formatted = String(item.amount);
        try {
          formatted = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: item.currency || "INR",
          }).format(item.amount);
        } catch {
          /* Preserve an amount with an unknown currency code. */
        }
        return [{ key: path, label, value: formatted }];
      }
      return entries(item, labels, path);
    }
    return [{ key: path, label, value: String(item) }];
  });
}

export default function ResultReview({ result, c }) {
  const data = selectProfileData(result);
  const transactions = data.banking?.transactions || [];
  const warnings = result.validation?.warnings || [];
  const missing = result.validation?.missing_required_fields || [];
  const displayMoney = (value) =>
    value?.amount == null
      ? "—"
      : new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: value.currency || "INR",
        }).format(value.amount);
  const groups = Object.entries(data)
    .map(([key, value]) => ({
      key,
      label: c.groupLabels[key] || humanize(key),
      rows: entries(value, c.fieldLabels),
    }))
    .filter((group) => group.rows.length);
  return (
    <MKBox mt={3}>
      {result.documents?.length ? (
        <>
          <MKTypography variant="body2" color="secondary" fontWeight="medium">
            {result.documents.length} document
            {result.documents.length === 1 ? "" : "s"} identified
          </MKTypography>
          {result.documents.map((document) => (
            <MKBox key={document.document_id} mb={4}>
              <MKTypography variant="caption" color="text">
                Source pages: {document.source_pages.join(", ")}
              </MKTypography>
              <ResultReview result={document} c={c} />
            </MKBox>
          ))}
        </>
      ) : (
        <>
          <MKTypography variant="body2" color="info" fontWeight="medium">
            {result.classification?.source === "user"
              ? "Selected document type"
              : c.detected}
            : {result.document_type_label || result.document_type}
          </MKTypography>
          <MKTypography variant="body2" color="text" mt={1}>
            {c.resultNote}
          </MKTypography>
          {warnings.length > 0 && (
            <Alert severity="warning" sx={{ mt: 2 }}>
              {warnings.join(" ")}
            </Alert>
          )}
          {missing.length > 0 && (
            <Alert severity="info" sx={{ mt: 2 }}>
              Please check missing required details:{" "}
              {missing
                .map((path) => humanize(path.split(".").pop()))
                .join(", ")}
              .
            </Alert>
          )}
          {data.banking?.reconciliation && (
            <Alert
              severity={
                data.banking.reconciliation.passed ? "success" : "warning"
              }
              sx={{ mt: 2 }}
            >
              {data.banking.reconciliation.passed
                ? "Running balances match the parsed transactions. Check the original for completeness."
                : "Some statement balances or rows need review against the original."}
            </Alert>
          )}
          {transactions.length > 0 && (
            <MKBox mt={3}>
              <MKTypography variant="h6" color="secondary" mb={2}>
                Statement transactions
              </MKTypography>
              <TableContainer
                component={Paper}
                variant="outlined"
                sx={{ maxHeight: 480 }}
              >
                <Table
                  size="small"
                  stickyHeader
                  aria-label="Extracted bank statement transactions"
                >
                  <TableHead>
                    <TableRow>
                      {[
                        "Date",
                        "Description",
                        "Debit",
                        "Credit",
                        "Balance",
                      ].map((label) => (
                        <TableCell key={label}>
                          <MKTypography variant="caption" fontWeight="bold">
                            {label}
                          </MKTypography>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((row, index) => (
                      <TableRow key={`${row.source_line}-${index}`}>
                        {[
                          row.transaction_date,
                          row.description || "—",
                          displayMoney(row.debit),
                          displayMoney(row.credit),
                          displayMoney(row.balance),
                        ].map((value, cell) => (
                          <TableCell key={cell}>
                            <MKTypography variant="body2">{value}</MKTypography>
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </MKBox>
          )}
          {!groups.length && (
            <MKTypography variant="body2" color="text" mt={2}>
              {c.noFields}
            </MKTypography>
          )}
          {groups.map((group) => (
            <MKBox key={group.key} mt={3}>
              <MKTypography variant="h6" color="secondary" mb={2}>
                {group.label}
              </MKTypography>
              <MKBox
                component="dl"
                m={0}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                  },
                  gap: 2,
                }}
              >
                {group.rows.map((row) => (
                  <MKBox
                    key={row.key}
                    sx={{
                      minWidth: 0,
                      bgcolor: "light.main",
                      p: 2,
                      borderRadius: borders.borderRadius.lg,
                    }}
                  >
                    <MKTypography component="dt" variant="caption" color="text">
                      {row.label}
                    </MKTypography>
                    <MKTypography
                      component="dd"
                      variant="body2"
                      color="black"
                      m={0}
                      sx={{ overflowWrap: "anywhere" }}
                    >
                      {row.value}
                    </MKTypography>
                  </MKBox>
                ))}
              </MKBox>
            </MKBox>
          ))}
          {result.evidence?.field_evidence &&
            Object.keys(result.evidence.field_evidence).length > 0 && (
              <MKBox component="details" mt={3}>
                <MKTypography
                  component="summary"
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                >
                  Check source text for extracted values
                </MKTypography>
                {Object.entries(result.evidence.field_evidence).map(
                  ([path, source]) => (
                    <MKBox key={path} my={2}>
                      <MKTypography variant="caption">
                        {humanize(path)} · Page {source.page}
                      </MKTypography>
                      <MKTypography
                        variant="body2"
                        sx={{
                          whiteSpace: "pre-wrap",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {source.quote}
                      </MKTypography>
                    </MKBox>
                  ),
                )}
              </MKBox>
            )}
        </>
      )}
      <ExtractionTrace trace={result.trace} />
    </MKBox>
  );
}

ResultReview.propTypes = {
  result: PropTypes.shape({
    classification: PropTypes.shape({ source: PropTypes.string }),
    data: PropTypes.object.isRequired,
    profile: PropTypes.shape({
      field_paths: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    validation: PropTypes.shape({
      warnings: PropTypes.arrayOf(PropTypes.string),
      missing_required_fields: PropTypes.arrayOf(PropTypes.string),
    }),
    document_type: PropTypes.string.isRequired,
    document_type_label: PropTypes.string,
    trace: PropTypes.object,
    documents: PropTypes.arrayOf(
      PropTypes.shape({
        document_id: PropTypes.string.isRequired,
        source_pages: PropTypes.arrayOf(PropTypes.number).isRequired,
      }),
    ),
    evidence: PropTypes.shape({
      field_evidence: PropTypes.objectOf(
        PropTypes.shape({
          page: PropTypes.number.isRequired,
          quote: PropTypes.string.isRequired,
        }),
      ),
    }),
  }).isRequired,
  c: PropTypes.shape({
    detected: PropTypes.string.isRequired,
    resultNote: PropTypes.string.isRequired,
    noFields: PropTypes.string.isRequired,
    groupLabels: PropTypes.objectOf(PropTypes.string).isRequired,
    fieldLabels: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};
