/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" pt={3} pb={8} mt={6}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={1350}
              suffix="+"
              title="Companies Registered"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
                count={3000}
                suffix="+"
                title="Audits Conducted"
              />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
                count={5000}
                suffix="+"
                title="Tax Returns Filed"
              />
          </Grid>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={135}
              suffix="+"
              title="Happy Clients"
            />
          </Grid>
          <Grid item mt={1} visibility="hidden" sx={{visibility: {md:"visible", xs:"hidden"} }}>
            <KeyboardDoubleArrowDownIcon color="grey" item fontSize="medium" />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
