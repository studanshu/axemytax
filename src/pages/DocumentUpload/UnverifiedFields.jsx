import { useState } from "react";
import PropTypes from "prop-types";
import { Alert, Chip, MenuItem, Paper, TextField } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { suggestFields, reviewedResult } from "./unverifiedReview";

function Candidate({ candidate, allowed, currentData, onAccept }) {
  const suggestions = suggestFields(candidate.path, allowed);
  const [target, setTarget] = useState(
    allowed.includes(candidate.path) ? candidate.path : "",
  );
  const [value, setValue] = useState(
    typeof candidate.value === "object"
      ? JSON.stringify(candidate.value, null, 2)
      : String(candidate.value),
  );
  const [error, setError] = useState("");
  const current = target
    .split(".")
    .reduce((node, part) => node?.[part], currentData);
  const accept = () => {
    if (!allowed.includes(target)) {
      setError("Choose an allowed document field first.");
      return;
    }
    let parsed = value;
    if (typeof candidate.value !== "string") {
      try {
        parsed = JSON.parse(value);
      } catch {
        setError("Enter valid JSON matching the original value type.");
        return;
      }
    }
    onAccept(target, { value: parsed, originalPath: candidate.path });
    setError("");
  };
  return (
    <Paper
      variant="outlined"
      sx={{ p: 2, mb: 2, borderColor: "warning.main", borderRadius: 2 }}
    >
      <MKBox display="flex" gap={1} alignItems="center" flexWrap="wrap" mb={1}>
        <Chip
          label="Unverified"
          color="warning"
          size="small"
          variant="outlined"
        />
        <MKTypography variant="body2" sx={{ overflowWrap: "anywhere" }}>
          {candidate.path}
        </MKTypography>
      </MKBox>
      <MKTypography variant="caption" display="block" mb={2}>
        Reason: {(candidate.reason || "requires_review").replace(/_/g, " ")}
      </MKTypography>
      <TextField
        fullWidth
        multiline
        minRows={2}
        label={`Candidate value: ${candidate.path}`}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        sx={{ mb: 2 }}
      />
      <MKTypography variant="caption" display="block">
        Likely field matches (key similarity only)
      </MKTypography>
      <MKBox display="flex" gap={1} flexWrap="wrap" my={1}>
        {suggestions.map((suggestion) => (
          <Chip
            key={suggestion.key}
            label={suggestion.key}
            variant={target === suggestion.key ? "filled" : "outlined"}
            color="info"
            onClick={() => setTarget(suggestion.key)}
          />
        ))}
      </MKBox>
      <TextField
        select
        fullWidth
        label={`Map ${candidate.path} to`}
        value={target}
        onChange={(event) => setTarget(event.target.value)}
        InputLabelProps={{ shrink: true }}
        SelectProps={{ displayEmpty: true }}
        sx={{
          my: 2,
          "& .MuiOutlinedInput-root": { minHeight: 52 },
          "& .MuiSelect-select": {
            py: "14px !important",
            minHeight: "1.4em",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <MenuItem value="">Choose a field</MenuItem>
        {allowed.map((key) => (
          <MenuItem key={key} value={key}>
            {key}
          </MenuItem>
        ))}
      </TextField>
      {current != null && (
        <Alert severity="info" sx={{ my: 1 }}>
          Current source-checked value:{" "}
          {typeof current === "object"
            ? JSON.stringify(current)
            : String(current)}
          . Adding this candidate replaces it only in your local reviewed
          result.
        </Alert>
      )}
      {candidate.source && (
        <MKBox component="details" my={1}>
          <MKTypography component="summary" variant="caption">
            Model-supplied source (unverified)
          </MKTypography>
          <MKBox
            component="pre"
            sx={{
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              fontSize: 12,
            }}
          >
            {JSON.stringify(candidate.source, null, 2)}
          </MKBox>
        </MKBox>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      <MKButton
        color="warning"
        variant="outlined"
        disabled={!target}
        onClick={accept}
      >
        Add to reviewed result
      </MKButton>
    </Paper>
  );
}
Candidate.propTypes = {
  candidate: PropTypes.object.isRequired,
  allowed: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentData: PropTypes.object,
  onAccept: PropTypes.func.isRequired,
};

export default function UnverifiedFields({
  candidates = [],
  allowed = [],
  accepted = {},
  rawOutput,
}) {
  const [decisions, setDecisions] = useState({});
  const [ignored, setIgnored] = useState([]);
  if (!candidates.length && rawOutput == null) return null;
  const result = reviewedResult(accepted, decisions, allowed);
  const exportResult = () => {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(result, null, 2)], { type: "application/json" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "reviewed-extraction.json";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <MKBox mt={4}>
      <MKTypography variant="h6" color="secondary" mb={1}>
        Unverified extracted fields
      </MKTypography>
      <Alert severity="warning" sx={{ mb: 2 }}>
        These model values failed checks. Compare them with the original, edit
        if needed, then explicitly map and add them. Key similarity is a
        suggestion, not evidence that a value is correct.
      </Alert>
      {candidates.map((candidate, index) =>
        ignored.includes(index) ? null : (
          <MKBox key={`${index}-${candidate.path}`}>
            <Candidate
              candidate={candidate}
              allowed={allowed}
              currentData={accepted}
              onAccept={(path, decision) =>
                setDecisions((old) => ({ ...old, [path]: decision }))
              }
            />
            <MKButton
              variant="text"
              color="secondary"
              onClick={() => setIgnored((old) => [...old, index])}
            >
              Dismiss candidate
            </MKButton>
          </MKBox>
        ),
      )}
      {rawOutput != null && (
        <MKBox component="details" mt={2}>
          <MKTypography component="summary" variant="body2">
            Full unverified model output
          </MKTypography>
          <MKBox
            component="pre"
            sx={{
              maxHeight: 360,
              overflow: "auto",
              whiteSpace: "pre-wrap",
              overflowWrap: "anywhere",
              fontSize: 12,
            }}
          >
            {JSON.stringify(rawOutput, null, 2)}
          </MKBox>
        </MKBox>
      )}
      {Object.keys(decisions).length > 0 && (
        <Paper
          variant="outlined"
          sx={{ mt: 3, p: 2, borderColor: "info.main" }}
        >
          <MKTypography variant="h6">Reviewed result (local)</MKTypography>
          <Alert severity="info" sx={{ my: 1 }}>
            Your selections remain marked user-accepted and unverified. Original
            source-checked results are unchanged. This result is kept only in
            this page unless you download it.
          </Alert>
          {Object.keys(decisions).map((path) => (
            <MKBox
              key={path}
              p={2}
              my={1}
              sx={{ bgcolor: "light.main", borderRadius: 1 }}
            >
              <Chip
                label={`${path} · user accepted`}
                onDelete={() =>
                  setDecisions((old) => {
                    const next = { ...old };
                    delete next[path];
                    return next;
                  })
                }
                sx={{
                  mb: 1,
                  maxWidth: "100%",
                  "& .MuiChip-label": {
                    whiteSpace: "normal",
                    overflowWrap: "anywhere",
                  },
                  height: "auto",
                  minHeight: 32,
                }}
              />
              <MKTypography
                variant="body2"
                sx={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}
              >
                {typeof decisions[path].value === "object"
                  ? JSON.stringify(decisions[path].value, null, 2)
                  : String(decisions[path].value)}
              </MKTypography>
            </MKBox>
          ))}
          <MKBox component="details" my={2}>
            <MKTypography
              component="summary"
              variant="body2"
              sx={{ cursor: "pointer" }}
            >
              Reviewed JSON
            </MKTypography>
            <MKBox
              component="pre"
              sx={{
                maxHeight: 360,
                overflow: "auto",
                whiteSpace: "pre-wrap",
                overflowWrap: "anywhere",
                fontSize: 12,
              }}
            >
              {JSON.stringify(result, null, 2)}
            </MKBox>
          </MKBox>
          <MKButton color="info" onClick={exportResult}>
            Download reviewed JSON
          </MKButton>
        </Paper>
      )}
    </MKBox>
  );
}
UnverifiedFields.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.object),
  allowed: PropTypes.arrayOf(PropTypes.string),
  accepted: PropTypes.object,
  rawOutput: PropTypes.any,
};
