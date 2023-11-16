const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    platform: { type: String, require: true },
    releasedDate: { type: Date, required: false},
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
