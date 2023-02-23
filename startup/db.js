const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

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
