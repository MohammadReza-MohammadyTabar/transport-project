const mongoose = require("mongoose");

const tollStationsSchema = new mongoose.Schema({
  name: String,
  toll_per_cross: Number,
  location: String,
});
module.exports = mongoose.model("tollStations", tollStationsSchema);
