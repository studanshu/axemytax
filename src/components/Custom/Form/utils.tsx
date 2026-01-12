import { ReactNode } from "react";
import MKTypography from "components/MKTypography";

export const errorText = (message: string | undefined): ReactNode => {
  if (!message) return null;
  
  return (
    <MKTypography variant="subtitle2" color="error">
      {message}
    </MKTypography>
  );
};
