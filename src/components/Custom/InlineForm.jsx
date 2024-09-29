import { Box, Grid } from "@mui/material";

import SectionHeader from "components/Custom/SectionHeader";
import PropTypes from "prop-types";
import CustomForm from "./Form/CustomForm";

const InlineForm = ({ FormJson, flexDirection }) => {
  return (
    <>
      <Grid container spacing={8} direction={flexDirection}>
        <Grid item xs={12} lg={6} p={0}>
          <Box display="flex" flexDirection="column" gap={6}>
            <SectionHeader
              caption={FormJson.caption}
              title={FormJson.title}
              variant="h2"
              color="secondary"
            />
            <CustomForm jsonData={FormJson} />
          </Box>
        </Grid>
        <Grid
          item
          diplsay="none"
          xs={12}
          lg={6}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          <img
            src={FormJson.image}
            alt="Form Image"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </>
  );
};

InlineForm.propTypes = {
  FormJson: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(URL)])
      .isRequired,
    inputs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        required: PropTypes.bool,
        isTextArea: PropTypes.bool,
      })
    ).isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
  flexDirection: PropTypes.oneOf(["row", "row-reverse"]),
};

InlineForm.defaultProps = {
  flexDirection: "row",
};

export default InlineForm;
