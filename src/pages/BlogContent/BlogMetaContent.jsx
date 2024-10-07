const { Grid } = require("@mui/material");
const { default: MKTypography } = require("components/MKTypography");
const PropTypes = require("prop-types");

const BlogMetaContent = ({ date, duration, author }) => {
  return (
    <Grid container sx={{ gap: 2 }}>
      <Grid item>
        <MKTypography variant="h6Light" color="primary">
          {date}
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="secondary">
          |
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="secondary">
          {duration}
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="secondary">
          |
        </MKTypography>
      </Grid>
      <Grid item>
        <MKTypography variant="h6Light" color="black75">
          {author}
        </MKTypography>
      </Grid>
    </Grid>
  );
};

BlogMetaContent.propTypes = {
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BlogMetaContent;
