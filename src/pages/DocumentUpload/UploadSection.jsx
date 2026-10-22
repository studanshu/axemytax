import PropTypes from "prop-types";
import { useRef, useState, useEffect } from "react";
import {
  Alert,
  Chip,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import FolderOutlined from "@mui/icons-material/FolderOutlined";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import extractDocument, {
  getDocumentTypes,
} from "api/documents/extractDocument";
import SectionHeader from "components/Custom/SectionHeader";
import DropdownField from "components/Custom/Form/DropdownField";
import ResultReview from "./ResultReview";
import borders from "assets/theme/base/borders";

export default function UploadSection({ c }) {
  const input = useRef(null);
  const urls = useRef(new Set());
  const requests = useRef(new Map());
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [review, setReview] = useState(false);
  const [catalogue, setCatalogue] = useState([]);
  const [includeTrace, setIncludeTrace] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    getDocumentTypes(controller.signal)
      .then((types) => {
        if (!controller.signal.aborted)
          setCatalogue(
            types.slice().sort((a, b) => a.label.localeCompare(b.label)),
          );
      })
      .catch(() => {
        /* Keep the local catalogue available while offline. */
      });
    return () => controller.abort();
  }, []);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    const active = urls.current;
    const activeRequests = requests.current;
    return () => {
      active.forEach((url) => URL.revokeObjectURL(url));
      activeRequests.forEach((controller) => controller.abort());
    };
  }, []);
  const add = (incoming) => {
    const next = [...files];
    const messages = new Set();
    Array.from(incoming).forEach((file) => {
      if (
        !["application/pdf", "image/jpeg", "image/png"].includes(file.type) ||
        file.size <= 0 ||
        file.size > 4 * 1024 * 1024
      ) {
        messages.add(c.invalid);
        return;
      }
      if (
        next.some(
          (item) =>
            item.file.name === file.name &&
            item.file.size === file.size &&
            item.file.lastModified === file.lastModified,
        )
      ) {
        messages.add(c.duplicate);
        return;
      }
      if (next.length >= 10) {
        messages.add(c.limit);
        return;
      }
      const url = URL.createObjectURL(file);
      urls.current.add(url);
      next.push({ id: url, url, file, type: c.types[0] });
    });
    setFiles(next);
    setError([...messages].join(" "));
    setReview(false);
  };
  const remove = (item) => {
    requests.current.get(item.id)?.abort();
    requests.current.delete(item.id);
    URL.revokeObjectURL(item.url);
    urls.current.delete(item.url);
    setFiles((old) => old.filter((f) => f.id !== item.id));
  };
  const clear = () => {
    requests.current.forEach((controller) => controller.abort());
    requests.current.clear();
    files.forEach((f) => {
      URL.revokeObjectURL(f.url);
      urls.current.delete(f.url);
    });
    setFiles([]);
    setReview(false);
    setError("");
  };
  const extract = async (item) => {
    if (requests.current.has(item.id)) return;
    const controller = new AbortController();
    requests.current.set(item.id, controller);
    const timeout = setTimeout(() => controller.abort(), 290000);
    const update = (patch) =>
      setFiles((old) =>
        old.map((f) => (f.id === item.id ? { ...f, ...patch } : f)),
      );
    update({ processing: true, extractionError: false });
    try {
      const requestedType = item.manualType
        ? catalogue.find((type) => type.label === item.type)?.type
        : undefined;
      if (item.manualType && !requestedType)
        throw new Error("PROFILE_UNAVAILABLE");
      const result = await extractDocument(
        item.file,
        controller.signal,
        requestedType,
        includeTrace,
      );
      if (!controller.signal.aborted)
        setFiles((old) =>
          old.map((f) =>
            f.id === item.id
              ? {
                  ...f,
                  result,
                  processing: false,
                  type: f.manualType
                    ? f.type
                    : result.document_type_label || c.types[0],
                }
              : f,
          ),
        );
    } catch {
      update({ processing: false, extractionError: true });
    } finally {
      clearTimeout(timeout);
      requests.current.delete(item.id);
    }
  };
  return (
    <MKBox component="section" py={8}>
      <Container>
        <MKBox px={{ xs: 2, md: 4 }}>
          <SectionHeader
            caption={c.sectionCaption}
            title={c.sectionTitle}
            variant="h3"
            color="secondary"
            sx={{ mb: 4 }}
          />
          <Alert severity="info" sx={{ mb: 4 }}>
            <strong>{c.preview}. </strong>
            {c.notice}
          </Alert>
          <MKBox mb={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={includeTrace}
                  onChange={(event) => setIncludeTrace(event.target.checked)}
                />
              }
              label={
                <MKTypography variant="body2">
                  Show extraction steps (includes document text)
                </MKTypography>
              }
            />
            <MKButton
              component="a"
              href="#document-profiles"
              variant="text"
              color="info"
            >
              View document fields and requirements
            </MKButton>
          </MKBox>
          <MKBox display="flex" gap={2} mb={4} flexWrap="wrap">
            {c.steps.map((step, i) => (
              <Chip
                key={step}
                label={`${i + 1}. ${step}`}
                color={i === (review ? 1 : 0) ? "info" : "default"}
                variant={i === (review ? 1 : 0) ? "filled" : "outlined"}
              />
            ))}
          </MKBox>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {!review && (
                <MKBox
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragging(false);
                    add(e.dataTransfer.files);
                  }}
                  sx={{
                    border: "2px dashed",
                    borderColor: dragging ? "info.main" : "grey.300",
                    borderRadius: borders.borderRadius.lg,
                    bgcolor: "light.main",
                    p: { xs: 3, md: 4 },
                    textAlign: "center",
                  }}
                >
                  <CloudUploadOutlined
                    sx={{ fontSize: 48, color: "info.main", mb: 2 }}
                  />
                  <MKTypography variant="h5" color="secondary">
                    {c.dropTitle}
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mt={1} mb={3}>
                    {c.dropDescription}
                  </MKTypography>
                  <input
                    ref={input}
                    type="file"
                    multiple
                    accept="application/pdf,image/jpeg,image/png"
                    hidden
                    onChange={(e) => {
                      add(e.target.files);
                      e.target.value = "";
                    }}
                  />
                  <MKButton color="info" onClick={() => input.current.click()}>
                    {c.choose}
                  </MKButton>
                  <MKTypography
                    variant="caption"
                    display="block"
                    mt={2}
                    color="text"
                  >
                    {c.formats}
                  </MKTypography>
                </MKBox>
              )}
              {review && (
                <MKBox mb={3}>
                  <MKTypography variant="h3" color="secondary">
                    {c.reviewTitle}
                  </MKTypography>
                  <MKTypography variant="body2" color="text" mt={1}>
                    {c.reviewNote}
                  </MKTypography>
                </MKBox>
              )}
              {error && (
                <Alert
                  severity="warning"
                  sx={{ mt: 2 }}
                  onClose={() => setError("")}
                >
                  {error}
                </Alert>
              )}
              <MKBox
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={4}
                mb={2}
              >
                <MKTypography variant="h5" color="secondary">
                  {c.queue} ({files.length})
                </MKTypography>
                {files.length > 0 && (
                  <MKButton variant="text" color="secondary" onClick={clear}>
                    {c.clear}
                  </MKButton>
                )}
              </MKBox>
              <MKBox aria-live="polite">
                {!files.length && (
                  <MKTypography variant="body2" color="text" py={4}>
                    {c.empty}
                  </MKTypography>
                )}
                {files.map((item) => (
                  <MKBox
                    key={item.id}
                    sx={{
                      border: "1px solid",
                      borderColor: "grey.300",
                      borderRadius: borders.borderRadius.lg,
                      p: 3,
                      mb: 2,
                    }}
                  >
                    <MKBox display="flex" gap={2} alignItems="center">
                      <DescriptionOutlined color="info" />
                      <MKBox sx={{ minWidth: 0, flex: 1 }}>
                        <MKTypography
                          variant="h6"
                          sx={{ overflowWrap: "anywhere" }}
                        >
                          {item.file.name}
                        </MKTypography>
                        <MKTypography variant="caption" color="text">
                          {(item.file.size / 1024 / 1024).toFixed(2)} MB ·{" "}
                          {c.status}
                        </MKTypography>
                      </MKBox>
                    </MKBox>
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      sx={{ mt: 1 }}
                    >
                      <Grid item xs={12} sm={7}>
                        <DropdownField
                          fullWidth
                          label={c.type}
                          options={Array.from(
                            new Set([
                              c.types[0],
                              ...catalogue.map((type) => type.label),
                              item.type,
                            ]),
                          )}
                          value={item.type}
                          disabled={item.processing}
                          onChange={(e) =>
                            setFiles((old) =>
                              old.map((f) =>
                                f.id === item.id
                                  ? {
                                      ...f,
                                      type: e.target.value,
                                      manualType: e.target.value !== c.types[0],
                                      result: null,
                                      extractionError: false,
                                    }
                                  : f,
                              ),
                            )
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <MKTypography variant="caption" color="text">
                          {item.manualType
                            ? c.manual
                            : item.result
                              ? c.autoDetected
                              : c.pending}
                        </MKTypography>
                      </Grid>
                    </Grid>
                    {item.result && <ResultReview result={item.result} c={c} />}
                    {item.extractionError && (
                      <Alert severity="error" sx={{ mt: 2 }}>
                        {c.extractionError}
                      </Alert>
                    )}
                    <MKBox display="flex" gap={1} mt={2} flexWrap="wrap">
                      <MKButton
                        variant="text"
                        color="info"
                        disabled={
                          item.processing ||
                          (!!item.result &&
                            (!includeTrace || !!item.result.trace))
                        }
                        onClick={() => extract(item)}
                      >
                        {item.processing
                          ? c.extracting
                          : item.result && includeTrace && !item.result.trace
                            ? "Extract with steps"
                            : item.result
                              ? c.extracted
                              : c.extract}
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="info"
                        onClick={() => setPreview(item)}
                        aria-label={`${c.previewFile} ${item.file.name}`}
                      >
                        {c.previewFile}
                      </MKButton>
                      <MKButton
                        variant="text"
                        color="secondary"
                        onClick={() => remove(item)}
                        aria-label={`${c.remove} ${item.file.name}`}
                      >
                        {c.remove}
                      </MKButton>
                    </MKBox>
                  </MKBox>
                ))}
              </MKBox>
              <MKBox display="flex" gap={2} mt={3} flexWrap="wrap">
                {review ? (
                  <>
                    <MKButton
                      variant="outlined"
                      color="info"
                      onClick={() => setReview(false)}
                    >
                      {c.back}
                    </MKButton>
                    <MKButton color="info" disabled>
                      {c.save}
                    </MKButton>
                  </>
                ) : (
                  <MKButton
                    color="info"
                    disabled={!files.length}
                    onClick={() => setReview(true)}
                  >
                    {c.review}
                  </MKButton>
                )}
              </MKBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MKBox
                sx={{
                  bgcolor: "light.main",
                  borderRadius: borders.borderRadius.lg,
                  p: 3,
                }}
              >
                <FolderOutlined
                  sx={{ fontSize: 36, color: "info.main", mb: 2 }}
                />
                <MKTypography variant="h5" color="secondary">
                  {c.storageTitle}
                </MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  {c.storageNote}
                </MKTypography>
                <MKBox
                  mt={3}
                  pt={3}
                  sx={{ borderTop: "1px solid", borderColor: "grey.300" }}
                >
                  <MKTypography variant="h6">{c.fields}</MKTypography>
                  <MKTypography variant="body2" color="text" mt={1}>
                    {c.fieldsNote}
                  </MKTypography>
                </MKBox>
              </MKBox>
            </Grid>
          </Grid>
          <Dialog
            open={!!preview}
            onClose={() => setPreview(null)}
            maxWidth="md"
            fullWidth
          >
            <DialogTitle sx={{ overflowWrap: "anywhere" }}>
              {preview?.file.name}
            </DialogTitle>
            <DialogContent>
              {preview &&
                (preview.file.type === "application/pdf" ? (
                  <iframe
                    title={preview.file.name}
                    src={preview.url}
                    style={{ width: "100%", height: "65vh", border: 0 }}
                  />
                ) : (
                  <img
                    src={preview.url}
                    alt={preview.file.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "65vh",
                      objectFit: "contain",
                    }}
                  />
                ))}
            </DialogContent>
            <DialogActions>
              <MKButton color="info" onClick={() => setPreview(null)}>
                {c.close}
              </MKButton>
            </DialogActions>
          </Dialog>
        </MKBox>
      </Container>
    </MKBox>
  );
}

UploadSection.propTypes = {
  c: PropTypes.shape({
    back: PropTypes.string.isRequired,
    choose: PropTypes.string.isRequired,
    clear: PropTypes.string.isRequired,
    close: PropTypes.string.isRequired,
    dropDescription: PropTypes.string.isRequired,
    dropTitle: PropTypes.string.isRequired,
    duplicate: PropTypes.string.isRequired,
    empty: PropTypes.string.isRequired,
    extract: PropTypes.string.isRequired,
    extracting: PropTypes.string.isRequired,
    extracted: PropTypes.string.isRequired,
    extractionError: PropTypes.string.isRequired,
    detected: PropTypes.string.isRequired,
    fields: PropTypes.string.isRequired,
    fieldsNote: PropTypes.string.isRequired,
    formats: PropTypes.string.isRequired,
    invalid: PropTypes.string.isRequired,
    limit: PropTypes.string.isRequired,
    manual: PropTypes.string.isRequired,
    notice: PropTypes.string.isRequired,
    pending: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    previewFile: PropTypes.string.isRequired,
    queue: PropTypes.string.isRequired,
    remove: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    reviewNote: PropTypes.string.isRequired,
    reviewTitle: PropTypes.string.isRequired,
    save: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    steps: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    storageNote: PropTypes.string.isRequired,
    storageTitle: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    autoDetected: PropTypes.string.isRequired,
    sectionCaption: PropTypes.string.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};
