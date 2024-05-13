import { Button, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import Burger from "./Burger";
import OrderForm from "./OrderForm";

const PlaceOrder = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
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
          <Burger />
          <Stack
            spacing={1}
            marginBottom={5}
            boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
            direction={"row"}
            mt={5}
            justifyContent={"center"}
          >
            <Button variant="outlined" color="error">
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
          <OrderForm />
        </Grid>
      </Grid>
    </>
  );
};

export default PlaceOrder;
