import MKTypography from "components/MKTypography";

export const errorText = (message) => (
  <MKTypography variant="subtitle2" color="red">
    {message}
  </MKTypography>
);
