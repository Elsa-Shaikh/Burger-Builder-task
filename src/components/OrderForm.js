import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const OrderForm = ({order}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Box
        width={{ xs: "80%", sm: "80%", md: "40%", lg: "40%" }}
        p={3}
        sx={{ marginLeft: "auto", marginRight: "auto" }}
        boxShadow={`0px 4px 8px rgba(0, 0, 0, 0.1)`}
      >
        <Stack spacing={3}>
          <Typography variant="h4" fontWeight={"bold"}>
            Place Your Order
          </Typography>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            placeholder="Please Enter Your Name"
            fullWidth
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            variant="outlined"
            placeholder="Please Enter Your Email Address"
            fullWidth
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            placeholder="Please Enter Your City"
            fullWidth
          />
          <TextField
            id="postal"
            label="Postal Code"
            variant="outlined"
            placeholder="Please Enter Your Postal Code"
            fullWidth
          />
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            displayEmpty
            inputProps={{ "aria-label": "Select delivery option" }}
          >
            <MenuItem value="" disabled>
              Please choose delivery option
            </MenuItem>
            <MenuItem value="fastest">Fastest</MenuItem>
            <MenuItem value="cheapest">Cheapest</MenuItem>
          </Select>
          <Button variant="contained" sx={{ backgroundColor: "tomato" }}>
            Place Order
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default OrderForm;
