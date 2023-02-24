const owners = require("../models/owners");
//get all cars
const getAllCars = (req, res) => {
  owners
    .find()
    .then((data) => {
      let cars = data?.map((ele) => ele.ownerCar);
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
//get cars by filter of color in queries
const getCarByColorFilter = async (req, res) => {
  let colors;
  // put query data in colors array
  typeof req.query.color === "object"
    ? (colors = req.query.color)
    : (colors = [req.query.color]);
  const cars = [];
  try {
    // get cars and filter it push to an array
    const data = await owners.find();
    function filterCars() {
      for (const elements of data) {
        for (const color of colors) {
          for (const car of elements.ownerCar) {
            car.color === color.toLowerCase() && cars.push(car);
          }
        }
      }
    }
    await filterCars();
    //send response to client
    function sendResponse() {
      res.status(200).json(cars);
    }
    await sendResponse();
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCar = (req, res) => {
  res.status(201).send(req.body);
};

module.exports = { getAllCars, createCar, getCarByColorFilter };
