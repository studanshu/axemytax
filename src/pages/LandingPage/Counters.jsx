import { Suspense } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

//json
import CounterJson from "assets/data/LandingPage/Counters";
const renderLoader = () => <></>;

function Counters() {
  return (
    <MKBox component="section" mt={8} id="counters" px={4}>
      <Container>
        <Grid container justifyContent="space-around" textAlign="center">
          {CounterJson.map((c, index) => (
            <Grid item key={index}>
              <Suspense fallback={renderLoader()}>
                <DefaultCounterCard count={c.count} suffix="+" title={c.name} />
              </Suspense>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
