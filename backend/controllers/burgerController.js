const asyncHandler = require("express-async-handler");
const Burger = require("../models/burgerModel");

//@desc Order Burger
//@route POST /api/burger/order
//@access private

const orderBurger = asyncHandler(async (req, res) => {
  const { name, email, city, delivery, postalCode, amount, order } = req.body;
  if (
    !name ||
    !email ||
    !city ||
    !postalCode ||
    !delivery ||
    !amount ||
    !order
  ) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  // Check if delivery is one of the allowed values
  if (!["fastest", "cheapest"].includes(delivery)) {
    res.status(400);
    throw new Error(
      "Invalid delivery option! Allowed options are 'fastest' and 'cheapest'."
    );
  }
  const burger_data = await Burger.create({
    name,
    email,
    city,
    postalCode,
    delivery,
    order,
    amount,
    user_id: req.user.id,
  });
  res.status(201).json({
    message: "Order has been placed successfully!",
    data: burger_data,
  });
});

module.exports = {
  orderBurger,
};
