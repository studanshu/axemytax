import { Grid, SvgIconProps } from "@mui/material";
import MKTypography from "components/MKTypography";
import { ComponentType, FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Reason {
  image?: string;
  icon?: ComponentType<SvgIconProps>;
  title?: string;
  des?: string;
}

interface ReasonCardsProps {
  reasons: Reason[];
}

const ReasonCards: FC<ReasonCardsProps> = ({ reasons }) => (
  <Grid container spacing={8} className="mainContent" justifyContent="center">
    {reasons.map((reason, index) => {
      const IconComponent = reason.icon;
      
      return (
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
            sx={{ gap: 1 }}
          >
            <Grid item className="icon">
              {reason.image ? (
                <LazyLoadImage
                  src={reason.image}
                  alt={reason.title}
                  effect="blur"
                  style={{ width: "90%", height: "100%" }}
                />
              ) : IconComponent ? (
                <IconComponent 
                  sx={{ 
                    fontSize: { xs: 80, lg: 100 },
                    color: "primary.main",
                    width: "4rem",
                    height: "auto"
                  }} 
                />
              ) : null}
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
                {reason.title ? reason.title : ""}
              </MKTypography>
              <MKTypography
                variant="subtitle1"
                color="black50"
                textAlign="center"
              >
                {reason.des ? reason.des : ""}
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      );
    })}
  </Grid>
);

export default ReasonCards;
