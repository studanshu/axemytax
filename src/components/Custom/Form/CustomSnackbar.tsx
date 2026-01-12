import Alert, { AlertColor } from "@mui/material/Alert";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface CustomSnackbarHandle {
  showSnackbar: (msg: string, sev: AlertColor) => void;
}

type CustomSnackbarProps = Omit<SnackbarProps, 'open'>;

const CustomSnackbar = forwardRef<CustomSnackbarHandle, CustomSnackbarProps>((props, ref) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  useImperativeHandle(ref, () => ({
    showSnackbar(msg: string, sev: AlertColor) {
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
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      {...props}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
});

CustomSnackbar.displayName = "CustomSnackbar";

export default CustomSnackbar;
