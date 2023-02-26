const mongoose = require("mongoose");

const roadsSchema = new mongoose.Schema({
  name: String,
  width: Number,
  geom: String,
});

module.exports = mongoose.model("roads", roadsSchema);
