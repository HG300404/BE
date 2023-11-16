const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: false },
    phone: { type: Number },
    address: { type: String },
    avatar: { type: String },
    access_token: { type: String, required: false },
    refresh_token: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
