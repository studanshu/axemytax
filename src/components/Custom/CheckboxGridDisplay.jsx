import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import MKTypography from "components/MKTypography";

import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

const CheckboxGridDisplay = ({
  items,
  itemsPerColumn,
  sxGap = { xs: 2, md: 4 },
}) => {
  const numColumns = Math.ceil(items.length / itemsPerColumn);
  const { control } = useFormContext();
  return (
    <Grid
      container
      sx={{ gap: sxGap }}
      className="outer-grid-container-checkbox"
      alignItems="flex-start"
    >
      {[...Array(numColumns)].map((_, colIndex) => (
        <Grid item key={colIndex} className="outer-grid-item-checkbox">
          <Grid
            container
            sx={{ gap: sxGap }}
            flexDirection="column"
            alignItems="flex-start"
            className="single-column-container-checkbox"
          >
            {items
              .slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
              .map((item, rowIndex) => (
                <Grid item key={rowIndex} className="single-row-item-checkbox">
                  <Controller
                    control={control}
                    name={`checkboxCollection-${item}`}
                    defaultValue={false}
                    render={({ field }) => (
                      <FormControlLabel
                        {...field}
                        control={<Checkbox checked={field.value} />}
                        label={
                          <MKTypography variant="body1" color="black75">
                            {item}
                          </MKTypography>
                        }
                      />
                    )}
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

CheckboxGridDisplay.propTypes = {
  items: PropTypes.array.isRequired,
  itemsPerColumn: PropTypes.number.isRequired,
  sxGap: PropTypes.object,
};

export default CheckboxGridDisplay;
