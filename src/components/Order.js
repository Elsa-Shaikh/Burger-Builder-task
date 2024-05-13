import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DialogBox from "./DialogBox";

const Order = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            <IconButton aria-label="Add" sx={{ color: "green" }}>
              <AddIcon />
            </IconButton>
            <IconButton aria-label="Remove" sx={{ color: "red" }}>
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
            <IconButton aria-label="Add" sx={{ color: "green" }}>
              <AddIcon />
            </IconButton>
            <IconButton aria-label="Remove" sx={{ color: "red" }}>
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
            <IconButton aria-label="Add" sx={{ color: "green" }}>
              <AddIcon />
            </IconButton>
            <IconButton aria-label="Remove" sx={{ color: "red" }}>
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
            <IconButton aria-label="Add" sx={{ color: "green" }}>
              <AddIcon />
            </IconButton>
            <IconButton aria-label="Remove" sx={{ color: "red" }}>
              <RemoveIcon />
            </IconButton>
          </Paper>
        </Stack>
        <Stack direction={"row"} p={3}>
          <Typography variant="body1" fontSize={"1.5rem"}>
            Current Price: 5.00
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"end"}>
          <Button variant="contained" color="warning" onClick={handleClickOpen}>
            Order Now
          </Button>
        </Stack>
      </Box>
      <DialogBox open={open} handleClose={handleClose}/>
    </>
  );
};

export default Order;
