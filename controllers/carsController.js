const owners = require("../models/owners");

const getAllCars = (req, res) => {
  owners
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const createCar = (req, res) => {
  res.status(201).send(req.body);
};

module.exports = { getAllCars, createCar };
