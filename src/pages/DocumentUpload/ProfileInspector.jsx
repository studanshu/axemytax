import { useEffect, useState } from "react";
import {
  Alert,
  Chip,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/Custom/SectionHeader";
import DropdownField from "components/Custom/Form/DropdownField";
import { getProfileCatalogue } from "api/documents/extractDocument";

function formatType(schema = {}) {
  if (schema.enum)
    return schema.enum.filter((value) => value != null).join(" / ");
  const types = Array.isArray(schema.type) ? schema.type : [schema.type];
  if (schema.properties?.amount) return "Amount + currency";
  if (types.includes("array")) return "List";
  if (types.includes("object")) return "Structured details";
  return types.filter((value) => value && value !== "null").join(" / ");
}

export default function ProfileInspector() {
  const [catalogue, setCatalogue] = useState(null);
  const [failed, setFailed] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("indian_passport");
  useEffect(() => {
    const controller = new AbortController();
    getProfileCatalogue(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setCatalogue(data);
      })
      .catch(() => {
        if (!controller.signal.aborted) setFailed(true);
      });
    return () => controller.abort();
  }, []);
  const profiles = catalogue?.profiles || [];
  const profile = profiles.find((item) => item.document_type === selected);
  const filtered = profiles.filter((item) =>
    `${item.label} ${item.document_type} ${item.category}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const options = Array.from(
    new Set(
      [profile?.label, ...filtered.map((item) => item.label)].filter(Boolean),
    ),
  );
  const required = profile?.required_paths || [];
  const paths = (profile?.field_paths || [])
    .slice()
    .sort(
      (a, b) =>
        Number(required.includes(b)) - Number(required.includes(a)) ||
        a.localeCompare(b),
    );
  return (
    <MKBox
      component="section"
      id="document-profiles"
      py={8}
      sx={{ scrollMarginTop: 100 }}
    >
      <Container>
        <MKBox px={{ xs: 2, md: 4 }}>
          <SectionHeader
            caption="Document field guide"
            title="What do we look for?"
            variant="h3"
            color="secondary"
            sx={{ mb: 4 }}
          />
          <MKTypography variant="body2" color="text" mb={3}>
            Check the fields available for each document. Required fields are
            our minimum extraction checks, not a legal checklist. Optional
            fields appear only when found.
          </MKTypography>
          {failed && (
            <Alert severity="error">
              The field guide could not load. Refresh to try again.
            </Alert>
          )}
          {!catalogue && !failed && (
            <MKTypography variant="body2">
              Loading document profiles…
            </MKTypography>
          )}
          {catalogue && (
            <>
              <MKBox
                display="grid"
                gap={2}
                sx={{ gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}
                mb={3}
              >
                <MKInput
                  fullWidth
                  label="Find a document"
                  placeholder="Search passport, PAN, ITR…"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <DropdownField
                  fullWidth
                  label="Document profile"
                  value={profile?.label || ""}
                  options={options}
                  onChange={(event) =>
                    setSelected(
                      profiles.find((item) => item.label === event.target.value)
                        ?.document_type || selected,
                    )
                  }
                />
              </MKBox>
              <MKTypography variant="caption" color="text">
                {filtered.length} matching profiles
              </MKTypography>
              {profile && (
                <>
                  <MKBox display="flex" flexWrap="wrap" gap={1} my={2}>
                    <Chip
                      label={`${paths.length} allowed fields`}
                      variant="outlined"
                    />
                    <Chip
                      label={`${required.length} required checks`}
                      color="info"
                      variant="outlined"
                    />
                    <Chip
                      label={
                        profile.coverage === "curated"
                          ? "Explicit document profile"
                          : "Conservative category profile"
                      }
                      variant="outlined"
                    />
                  </MKBox>
                  {!required.length && (
                    <Alert severity="info" sx={{ mb: 2 }}>
                      No minimum required fields are configured for this
                      profile. This does not establish complete extraction.
                    </Alert>
                  )}
                  {profile.coverage !== "curated" && (
                    <Alert severity="info" sx={{ mb: 2 }}>
                      This document currently uses a shared category profile.
                      Specialized form fields may not be extracted.
                    </Alert>
                  )}
                  <TableContainer
                    sx={{
                      border: "1px solid",
                      borderColor: "grey.300",
                      borderRadius: 2,
                      maxHeight: 560,
                    }}
                  >
                    <Table
                      size="small"
                      stickyHeader
                      aria-label="Document profile field requirements"
                    >
                      <TableHead>
                        <TableRow>
                          {["Field", "Requirement", "Format"].map((label) => (
                            <TableCell key={label}>{label}</TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paths.map((path) => (
                          <TableRow key={path}>
                            <TableCell>
                              <MKTypography
                                variant="body2"
                                sx={{ overflowWrap: "anywhere" }}
                              >
                                {path}
                              </MKTypography>
                            </TableCell>
                            <TableCell>
                              <MKTypography
                                variant="body2"
                                fontWeight={
                                  required.includes(path) ? "bold" : "regular"
                                }
                              >
                                {required.includes(path)
                                  ? "Required"
                                  : "Optional"}
                              </MKTypography>
                            </TableCell>
                            <TableCell>
                              <MKTypography variant="body2">
                                {formatType(
                                  catalogue.fields[path]?.json_schema,
                                )}
                              </MKTypography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )}
            </>
          )}
        </MKBox>
      </Container>
    </MKBox>
  );
}
