import { lazy, Suspense } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

//json
import CounterJson from "assets/data/LandingPage/Counters"
const renderLoader = () => <p>Loading</p>;

function Counters() {
  return (
    <MKBox component="section" mt={8} id="counters">
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          {
            CounterJson.map((c, _) => (
              <Suspense fallback={renderLoader()}>
                <Grid item xs={12} md={3}>
                  <DefaultCounterCard
                    count={c.count}
                    suffix="+"
                    title={c.name}
                  />
                </Grid>
              </Suspense>
            ))
          }
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
