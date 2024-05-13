import { Grid } from "@mui/material";
import React from "react";
import Order from "./Order";
import Burger from "./Burger";

const Home = () => {
  return (
    <Grid container mt={8}>
      <Grid item xs={12} md={6} lg={6} sm={12} mt={3}>
        <Order />
      </Grid>
      <Grid item xs={12} md={6} lg={6} sm={12} borderLeft={"5px dotted grey"}>
        <Burger />
      </Grid>
    </Grid>
  );
};

export default Home;
