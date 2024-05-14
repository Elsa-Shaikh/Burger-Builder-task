import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DialogBox from "./DialogBox";
import Bacon from "../Assets/bacon.png";
import Salad from "../Assets/salad.jpg";
import Cheese from "../Assets/cheese.jpg";
import Meat from "../Assets/meat.jpg";
import Burger from "./Burger";

const Order = ({ ingredientsImages, setIngredientsImages ,order }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(5);
  const [salad, setSalad] = useState(0);
  const [meat, setMeat] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [bacon, setBacon] = useState(0);
  order = {
    bacon,
    cheese,
    meat,
    salad,
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIncrement = (ingredient, img) => {
    switch (ingredient) {
      case "salad":
        setSalad(salad + 1);
        setCurrent(current + 1);
        setIngredientsImages([...ingredientsImages, img]);
        break;
      case "meat":
        setMeat(meat + 1);
        setCurrent(current + 1);
        setIngredientsImages([...ingredientsImages, img]);
        break;
      case "cheese":
        setCheese(cheese + 1);
        setCurrent(current + 1);
        setIngredientsImages([...ingredientsImages, img]);
        break;
      case "bacon":
        setBacon(bacon + 1);
        setCurrent(current + 1);
        setIngredientsImages([...ingredientsImages, img]);
        break;
      default:
        break;
    }
  };

  const handleDecrement = (ingredient, img) => {
    switch (ingredient) {
      case "salad":
        if (salad > 0) {
          setSalad(salad - 1);
          setCurrent(current - 1);
          const saladIndex = ingredientsImages.indexOf(img);
          if (saladIndex !== -1) {
            const updatedImages = [...ingredientsImages];
            updatedImages.splice(saladIndex, 1);
            setIngredientsImages(updatedImages);
          }
        }
        break;
      case "meat":
        if (meat > 0) {
          setMeat(meat - 1);
          setCurrent(current - 1);
          const meatIndex = ingredientsImages.indexOf(img);
          if (meatIndex !== -1) {
            const updatedImages = [...ingredientsImages];
            updatedImages.splice(meatIndex, 1);
            setIngredientsImages(updatedImages);
          }
        }
        break;
      case "cheese":
        if (cheese > 0) {
          setCheese(cheese - 1);
          setCurrent(current - 1);
          const cheeseIndex = ingredientsImages.indexOf(img);
          if (cheeseIndex !== -1) {
            const updatedImages = [...ingredientsImages];
            updatedImages.splice(cheeseIndex, 1);
            setIngredientsImages(updatedImages);
          }
        }
        break;
      case "bacon":
        if (bacon > 0) {
          setBacon(bacon - 1);
          setCurrent(current - 1);
          const baconIndex = ingredientsImages.indexOf(img);
          if (baconIndex !== -1) {
            const updatedImages = [...ingredientsImages];
            updatedImages.splice(baconIndex, 1);
            setIngredientsImages(updatedImages);
          }
        }
        break;
      default:
        break;
    }
  };
  const isOrderEnabled = () => {
    return salad > 0 || meat > 0 || cheese > 0 || bacon > 0;
  };

  return (
    <>
      <Grid item xs={12} md={6} lg={6} sm={12} mt={3}>
        <Box p={2} width={"300px"} marginLeft={"auto"} marginRight={"auto"}>
          <Stack
            direction={"row"}
            spacing={2}
            p={2}
            boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
            justifyContent={"space-between"}
          >
            <Typography variant="body1" fontSize={"1.5rem"}>
              Salad
            </Typography>
            <Paper>
              <IconButton
                aria-label="Add"
                sx={{ color: "green" }}
                onClick={() => handleIncrement("salad", Salad)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                aria-label="Remove"
                sx={{ color: "red" }}
                disabled={salad === 0}
                onClick={() => handleDecrement("salad", Salad)}
              >
                <RemoveIcon />
              </IconButton>
            </Paper>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            p={2}
            boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
            justifyContent={"space-between"}
          >
            <Typography variant="body1" fontSize={"1.5rem"}>
              Cheese
            </Typography>
            <Paper>
              <IconButton
                aria-label="Add"
                sx={{ color: "green" }}
                onClick={() => handleIncrement("cheese", Cheese)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                aria-label="Remove"
                sx={{ color: "red" }}
                disabled={cheese === 0}
                onClick={() => handleDecrement("cheese", Cheese)}
              >
                <RemoveIcon />
              </IconButton>
            </Paper>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            p={2}
            boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
            justifyContent={"space-between"}
          >
            <Typography variant="body1" fontSize={"1.5rem"}>
              Bacon
            </Typography>
            <Paper>
              <IconButton
                aria-label="Add"
                sx={{ color: "green" }}
                onClick={() => handleIncrement("bacon", Bacon)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                aria-label="Remove"
                sx={{ color: "red" }}
                disabled={bacon === 0}
                onClick={() => handleDecrement("bacon", Bacon)}
              >
                <RemoveIcon />
              </IconButton>
            </Paper>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            p={2}
            boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
            justifyContent={"space-between"}
          >
            <Typography variant="body1" fontSize={"1.5rem"}>
              Meat
            </Typography>
            <Paper>
              <IconButton
                aria-label="Add"
                sx={{ color: "green" }}
                onClick={() => handleIncrement("meat", Meat)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                aria-label="Remove"
                sx={{ color: "red" }}
                disabled={meat === 0}
                onClick={() => handleDecrement("meat", Meat)}
              >
                <RemoveIcon />
              </IconButton>
            </Paper>
          </Stack>
          <Stack direction={"row"} p={3}>
            <Typography variant="body1" fontSize={"1.5rem"}>
              Current Price: {current}.00
            </Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"end"}>
            <Button
              variant="contained"
              disabled={!isOrderEnabled()}
              sx={{ backgroundColor: "tomato" }}
              onClick={handleClickOpen}
            >
              Order Now
            </Button>
          </Stack>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sm={12}
        borderLeft={"5px dotted grey"}
        mt={3}
      >
        <Burger ingredientsImages={ingredientsImages} />
      </Grid>
      <DialogBox open={open} handleClose={handleClose} order={order} />
    </>
  );
};

export default Order;
