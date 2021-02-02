const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  name: String,
  description: String,
  type: { type: String, default: "dummy_car" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Car", CarSchema);
