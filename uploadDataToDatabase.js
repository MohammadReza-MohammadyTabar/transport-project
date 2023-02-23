const connectToDb = require("./startup/db");
const mongoose = require("mongoose");
const { readFileSync } = require("fs");
require("dotenv").config();

const ownersRowData = readFileSync("./owners.json");
const ownersData = JSON.parse(ownersRowData);

const nodesRowData = readFileSync("./all_nodes.json");
const nodesData = JSON.parse(nodesRowData);

const roadsRowData = readFileSync("./roads.json");
const roadsData = JSON.parse(roadsRowData);

const tollStationsRowData = readFileSync("./tollStations.json");
const tollStationsData = JSON.parse(tollStationsRowData);

async function start() {
  try {
    await connectToDb(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
}
start();
const ownersSchema = new mongoose.Schema({
  name: String,
  national_code: Number,
  age: Number,
  total_toll_paid: Number,
  ownerCar: [],
});
const owners = mongoose.model("owners", ownersSchema);
// let x;

// ownersData.forEach(async (element) => {
//   x = new owners({
//     name: element.name,
//     national_code: element.national_code,
//     age: element.age,
//     ownerCar: element.ownerCar.map((car) => ({
//       id: car.id,
//       type: car.type,
//       color: car.color,
//       length: car.length,
//       load_valume: car.load_valume,
//     })),
//   });
//   try {
//     await x.save();
//   } catch (error) {}
// });
const nodesSchema = new mongoose.Schema({
  car: Number,
  location: String,
  date: String,
});
const nodes = mongoose.model("nodes", nodesSchema);

// nodesData.forEach(async (element) => {

//   await new nodes({
//     car: element.car,
//     location: element.location,
//     date: element.date,
//   }).save();
// });

const roadsSchema = new mongoose.Schema({
  name: String,
  width: Number,
  geom: String,
});
const roads = mongoose.model("roads", roadsSchema);

// roadsData.forEach(async (element) => {

//   await new roads({
//     name: element.name,
//     width: element.width,
//     geom: element.geom,
//   }).save();
// });
const tollStationsSchema = new mongoose.Schema({
  name: String,
  toll_per_cross: Number,
  location: String,
});
const tollStations = mongoose.model("tollStations", tollStationsSchema);

// tollStationsData.forEach(async (element) => {

//   await new tollStations({
//     name: element.name,
//     toll_per_cross: element.total_toll_paid,
//     location: element.location,
//   }).save();
// });
