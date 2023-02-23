const express = require("express");
const connectToDb = require("./startup/db");
const app = express();
require("dotenv").config();
async function start() {
  try {
    await connectToDb(process.env.MONGO_URI);
    app.listen(3000, () => {
      console.log("listenning on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
}
start();
