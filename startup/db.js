const dotenv = require("dotenv");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
async function connectToDb(url) {
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectToDb;
