import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const OrderForm = ({ order, setIngredientsImages }) => {
  const { orderBurger } = useContext(AuthContext);
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    postalCode: "",
    delivery: "",
    order: {
      bacon: order.bacon || 0,
      salad: order.salad || 0,
      meat: order.meat || 0,
      cheese: order.cheese || 0,
    },
    amount: order.current || 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await orderBurger(formData);
      if (response.success) {
        toast.success("Order Placed Successfully!");
        setIngredientsImages([]);
        navigate("/orders");
      } else {
        toast.error("Something Went Wrong!");
        setIngredientsImages([]);
        navigate("/");
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Order Cancel!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={{ xs: "100%", sm: "100%", md: "40%", lg: "40%" }}
          p={{ md: 3, sm: 0 }}
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
              name="name"
              onChange={handleChange}
            />
            <TextField
              id="email"
              type="email"
              label="Email"
              variant="outlined"
              placeholder="Please Enter Your Email Address"
              fullWidth
              name="email"
              onChange={handleChange}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              placeholder="Please Enter Your City"
              fullWidth
              name="city"
              onChange={handleChange}
            />
            <TextField
              id="postal"
              label="Postal Code"
              variant="outlined"
              placeholder="Please Enter Your Postal Code"
              fullWidth
              name="postalCode"
              onChange={handleChange}
            />
            <Select
              value={formData?.delivery}
              name="delivery"
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Select delivery option" }}
            >
              <MenuItem value="" disabled>
                Please choose delivery option
              </MenuItem>
              <MenuItem value="fastest">Fastest</MenuItem>
              <MenuItem value="cheapest">Cheapest</MenuItem>
            </Select>
            <Button
              variant="contained"
              sx={{ backgroundColor: "tomato" }}
              type="submit"
            >
              Place Order
            </Button>
          </Stack>
        </Box>
      </form>
    </>
  );
};

export default OrderForm;
