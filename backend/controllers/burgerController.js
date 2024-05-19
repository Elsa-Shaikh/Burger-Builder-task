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
    success: true,
    message: "Order has been placed successfully!",
    data: burger_data,
  });
});

//@desc Get Order Burger Details
//@route GET /api/burger/read
//@access private

const readOrders = asyncHandler(async (req, res) => {
  try {
    const order_data = await Burger.find({ user_id: req.user.id }).sort({
      createdAt: -1,
    });
    const order_count = await Burger.countDocuments({ user_id: req.user.id });

    // Check if order_data is not empty
    if (order_data.length > 0) {
      res.status(200).json({
        success: true,
        message: "Orders have been fetched successfully!",
        count: order_count,
        data: order_data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No orders found for this user.",
        count: 0,
        data: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
});

module.exports = {
  orderBurger,
  readOrders,
};
