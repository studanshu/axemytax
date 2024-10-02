import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { forwardRef, useImperativeHandle, useState } from "react";

const CustomSnackbar = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  useImperativeHandle(ref, () => ({
    showSnackbar(msg, sev) {
      setMessage(msg);
      setSeverity(sev);
      setOpen(true);
    },
  }));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      {...props}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
});

CustomSnackbar.displayName = "CustomSnackbar";

export default CustomSnackbar;
