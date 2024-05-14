const mongoose = require("mongoose");

const burgerSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Name is required!"],
    },
    email: {
      type: String,
      required: [true, "Email Address is required!"],
    },
    city: {
      type: String,
      required: [true, "City is required!"],
    },
    postalCode: {
      type: String,
      required: [true, "Postal Code is required!"],
    },
    delivery: {
      type: String,
      enum: ["fastest", "cheapest"],
      required: [true, "Delivery method is required!"],
    },
    order: {
      type: {
        bacon: {
          type: Number,
          default: 0,
        },
        salad: {
          type: Number,
          default: 0,
        },
        meat: {
          type: Number,
          default: 0,
        },
        cheese: {
          type: Number,
          default: 0,
        },
      },
      required: [true, "Order is required!"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Burger", burgerSchema);
