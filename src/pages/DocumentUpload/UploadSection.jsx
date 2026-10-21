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
  MenuItem,
  TextField,
} from "@mui/material";
import CloudUploadOutlined from "@mui/icons-material/CloudUploadOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import FolderOutlined from "@mui/icons-material/FolderOutlined";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

export default function UploadSection({ c }) {
  const input = useRef(null);
  const urls = useRef(new Set());
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [review, setReview] = useState(false);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    const active = urls.current;
    return () => active.forEach((url) => URL.revokeObjectURL(url));
  }, []);
  const add = (incoming) => {
    const next = [...files];
    const messages = new Set();
    Array.from(incoming).forEach((file) => {
      if (
        !["application/pdf", "image/jpeg", "image/png"].includes(file.type) ||
        file.size <= 0 ||
        file.size > 10 * 1024 * 1024
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
    URL.revokeObjectURL(item.url);
    urls.current.delete(item.url);
    setFiles((old) => old.filter((f) => f.id !== item.id));
  };
  const clear = () => {
    files.forEach((f) => {
      URL.revokeObjectURL(f.url);
      urls.current.delete(f.url);
    });
    setFiles([]);
    setReview(false);
    setError("");
  };
  return (
    <MKBox component="section" py={6}>
      <Container>
        <MKBox px={{ xs: 1, md: 4 }}>
          <Alert severity="info" sx={{ mb: 4 }}>
            <strong>{c.preview}. </strong>
            {c.notice}
          </Alert>
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
                    border: `2px dashed ${dragging ? "#0288d1" : "#bacbd9"}`,
                    borderRadius: 4,
                    bgcolor: dragging ? "#e0f2fe" : "#f8fbff",
                    p: { xs: 3, md: 5 },
                    textAlign: "center",
                  }}
                >
                  <CloudUploadOutlined
                    sx={{ fontSize: 52, color: "#0288d1", mb: 2 }}
                  />
                  <MKTypography variant="h4">{c.dropTitle}</MKTypography>
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
                  <MKTypography variant="h4">{c.reviewTitle}</MKTypography>
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
                <MKTypography variant="h5">
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
                      border: "1px solid #e0e7ee",
                      borderRadius: 3,
                      p: { xs: 2, md: 3 },
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
                        <TextField
                          fullWidth
                          select
                          label={c.type}
                          size="small"
                          value={item.type}
                          onChange={(e) =>
                            setFiles((old) =>
                              old.map((f) =>
                                f.id === item.id
                                  ? { ...f, type: e.target.value }
                                  : f,
                              ),
                            )
                          }
                        >
                          {c.types.map((type) => (
                            <MenuItem key={type} value={type}>
                              {type}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={5}>
                        <MKTypography variant="caption" color="text">
                          {item.type === c.types[0] ? c.pending : c.manual}
                        </MKTypography>
                      </Grid>
                    </Grid>
                    <MKBox display="flex" gap={1} mt={1}>
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
              <MKBox sx={{ bgcolor: "#f5f8fc", borderRadius: 4, p: 3 }}>
                <FolderOutlined
                  sx={{ fontSize: 36, color: "#0288d1", mb: 2 }}
                />
                <MKTypography variant="h5">{c.storageTitle}</MKTypography>
                <MKTypography variant="body2" color="text" mt={2}>
                  {c.storageNote}
                </MKTypography>
                <MKBox mt={3} pt={3} sx={{ borderTop: "1px solid #dce5ef" }}>
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
