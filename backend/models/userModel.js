const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],
    },
    email: {
      type: String,
      required: [true, "Email Address is required!"],
      unique: [true, "Email Address Already Taken!"],
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
