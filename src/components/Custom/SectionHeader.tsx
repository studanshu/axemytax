import { Grid, SxProps, Theme } from "@mui/material";
import { FC } from "react";
import MKTypography from "../MKTypography";

interface SectionHeaderProps {
  caption: string;
  title: string;
  alignItems?: string;
  variant?: string;
  color?: string;
  sx?: SxProps<Theme>;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  caption,
  title,
  alignItems = "flex-start",
  variant = "h3",
  color = "secondary",
  sx,
}) => {
  return (
    <Grid
      container
      alignItems={alignItems}
      display="flex"
      flexDirection="column"
      sx={sx}
    >
      <Grid
        item
        display="flex"
        flexDirection="column"
        sx={{ gap: 1 }}
        alignItems={alignItems}
      >
        <MKTypography variant="caption" color="info">
          {caption ? caption : ""}
        </MKTypography>
        <MKTypography variant={variant as any} color={color as any}>
          {title ? title : ""}
        </MKTypography>
      </Grid>
    </Grid>
  );
};

export default SectionHeader;
