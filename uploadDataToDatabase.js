//I just use this app to upload all data in jsons to my database

const connectToDb = require("./startup/db");
const mongoose = require("mongoose");
const { readFileSync } = require("fs");
require("dotenv").config();
const owners = require("./models/owners");
const nodes = require("./models/nodes");
const roads = require("./models/roads");
const tollStations = require("./models/tollStations");

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

// nodesData.forEach(async (element) => {

//   await new nodes({
//     car: element.car,
//     location: element.location,
//     date: element.date,
//   }).save();
// });

// roadsData.forEach(async (element) => {

//   await new roads({
//     name: element.name,
//     width: element.width,
//     geom: element.geom,
//   }).save();
// });

// tollStationsData.forEach(async (element) => {

//   await new tollStations({
//     name: element.name,
//     toll_per_cross: element.total_toll_paid,
//     location: element.location,
//   }).save();
// });
