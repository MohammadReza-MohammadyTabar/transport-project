const express = require("express");
const connectToDb = require("./startup/db");
const ownersRoute = require("./routes/ownersRoute");
const carRoute = require("./routes/carsRoute");
const errors = require("./middleware/errors");
require("dotenv").config();

const app = express();

//defults
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/owners", ownersRoute);
app.use("/cars", carRoute);
app.all("*", errors);

async function start() {
  const port = process.env.PORT || 3000;
  try {
    await connectToDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listenning on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
