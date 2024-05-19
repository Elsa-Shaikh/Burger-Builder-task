import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Order from "../components/Order";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import UnAuthorized from "./UnAuthorized";

const Home = ({ ingredientsImages, setIngredientsImages, order, setOrder }) => {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <Grid container mt={{ md: 8, sm: 8, xs: 2 }}>
          <Order
            ingredientsImages={ingredientsImages}
            setIngredientsImages={setIngredientsImages}
            order={order}
            setOrder={setOrder}
          />
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <UnAuthorized />
      </>
    );
  }
};

export default Home;
