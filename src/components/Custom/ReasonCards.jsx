import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import MKTypography from "components/MKTypography";

const ReasonCards = ({ reasons }) => (
  <Grid container spacing={2} className="mainContent" justifyContent="center">
    {reasons.map((reason, index) => (
      <Grid
        item
        xs={12} // Full width on extra-small screens
        lg={4} // Three cards per row on medium and larger screens
        key={`reason-${index}`}
        className="singleContent"
        sx={{ mx: { xs: 4, lg: 0 } }}
      >
        <Grid
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ gap: { xs: 1, lg: 4 } }}
        >
          <Grid item className="icon">
            <img
              src={reason.image}
              alt={reason.title}
              style={{ width: "90%", height: "100%" }}
            />
          </Grid>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ gap: { xs: 1, lg: 2 } }}
            className="textContent"
          >
            <MKTypography variant="h5" color="black75">
              {reason.title}
            </MKTypography>
            <MKTypography
              variant="subtitle1"
              color="black50"
              textAlign="center"
            >
              {reason.des}
            </MKTypography>
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
);

ReasonCards.propTypes = {
  reasons: PropTypes.array.isRequired,
};

export default ReasonCards;
