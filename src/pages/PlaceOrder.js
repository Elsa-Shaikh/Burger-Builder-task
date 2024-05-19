import { Button, Grid, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import Burger from "../components/Burger";
import OrderForm from "../components/OrderForm";
import { useNavigate } from "react-router-dom";
import UnAuthorized from "./UnAuthorized";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const PlaceOrder = ({ ingredientsImages, order, setIngredientsImages }) => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  let navigate = useNavigate();
  const handleCancel = () => {
    navigate("/home");
    setIngredientsImages([]);
  };

  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <Grid container mt={2} p={6}>
          <Grid
            item
            xs={12}
            md={open ? 6 : 12}
            lg={open ? 6 : 12}
            sm={12}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Burger
              ingredientsImages={ingredientsImages}
              title="Hope You Will Like The Taste"
            />
            <Stack
              spacing={1}
              marginBottom={5}
              boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
              direction={"row"}
              mt={5}
              justifyContent={"center"}
            >
              <Button variant="outlined" color="error" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={() => setOpen(true)}
              >
                Continue
              </Button>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sm={12}
            display={open ? "block" : "none"}
          >
            <OrderForm
              order={order}
              setIngredientsImages={setIngredientsImages}
            />
          </Grid>
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

export default PlaceOrder;
