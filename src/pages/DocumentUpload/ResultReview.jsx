import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
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
      ["review_required", "extraction_scope", "warnings"].includes(key)
    )
      return [];
    const path = prefix ? `${prefix}.${key}` : key;
    const label = labels[path] || labels[key] || humanize(key);
    if (Array.isArray(item))
      return item.length ? [{ key: path, label, value: item.join(", ") }] : [];
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
  const groups = Object.entries({
    ...result.fields,
    document_specific: result.document_specific || {},
  })
    .map(([key, value]) => ({
      key,
      label: c.groupLabels[key] || humanize(key),
      rows: entries(value, c.fieldLabels),
    }))
    .filter((group) => group.rows.length);
  return (
    <MKBox mt={3}>
      <MKTypography variant="body2" color="info" fontWeight="medium">
        {c.detected}: {result.document_type_label || result.document_type}
      </MKTypography>
      <MKTypography variant="body2" color="text" mt={1}>
        {c.resultNote}
      </MKTypography>
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
    </MKBox>
  );
}

ResultReview.propTypes = {
  result: PropTypes.shape({
    fields: PropTypes.object.isRequired,
    document_specific: PropTypes.object,
    document_type: PropTypes.string.isRequired,
    document_type_label: PropTypes.string,
  }).isRequired,
  c: PropTypes.shape({
    detected: PropTypes.string.isRequired,
    resultNote: PropTypes.string.isRequired,
    noFields: PropTypes.string.isRequired,
    groupLabels: PropTypes.objectOf(PropTypes.string).isRequired,
    fieldLabels: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};
