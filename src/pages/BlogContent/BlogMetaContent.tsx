import { Grid } from "@mui/material";
import MKTypography from "components/MKTypography";
import { FC } from "react";

interface BlogMetaContentProps {
  date: string;
  duration: string;
  author: string;
}

const BlogMetaContent: FC<BlogMetaContentProps> = ({ date, duration, author }) => {
  return (
    <Grid container sx={{ gap: 2 }}>
      <Grid item>
        <MKTypography variant="h6" color="primary">
          {date}
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6" color="secondary">
          |
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6" color="secondary">
          {duration}
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6" color="secondary">
          |
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6" color="black75">
          {author}
        </MKTypography>
      </Grid>
    </Grid>
  );
};

export default BlogMetaContent;
