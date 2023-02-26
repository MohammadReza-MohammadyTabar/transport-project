const mongoose = require("mongoose");

const ownersSchema = new mongoose.Schema({
  name: String,
  national_code: Number,
  age: Number,
  total_toll_paid: Number,
  ownerCar: [],
});

module.exports = mongoose.model("owners", ownersSchema);
