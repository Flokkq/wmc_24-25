import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String, required: true },
  age: { type: Number, required: true },
  ranking: { type: Number, required: true },
});
const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
