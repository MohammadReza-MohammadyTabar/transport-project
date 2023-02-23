const mongoose = require("mongoose");

const nodesSchema = new mongoose.Schema({
  car: Number,
  location: String,
  date: String,
});
module.exports = mongoose.model("nodes", nodesSchema);
