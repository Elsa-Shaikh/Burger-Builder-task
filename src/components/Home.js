import { Grid } from "@mui/material";
import React from "react";
import Order from "./Order";

const Home = ({ ingredientsImages, setIngredientsImages,order }) => {
  return (
    <Grid container mt={8}>
      <Order
        ingredientsImages={ingredientsImages}
        setIngredientsImages={setIngredientsImages}
        order={order}
      />
    </Grid>
  );
};

export default Home;
