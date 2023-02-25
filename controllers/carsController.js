const owners = require("../models/owners");
//get all data from databse
const carData = async () => {
  return await owners.find();
};
//get all cars
const getAllCars = async (req, res) => {
  try {
    const data = await carData();
    let cars = data?.map((ele) => ele.ownerCar);
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).send(err);
  }
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
    const data = await carData();
    function filterCars() {
      //for every owner in owners collection
      for (const elements of data) {
        //for every color in query url
        for (const color of colors) {
          //for every car in all owners
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

const createCar = async (req, res) => {
  // national code of a owner in collection
  const national_code = req.params.national_code;
  // all data of client send
  // data should contain this data
  const { id, type, color, length, load_valume } = req.body;

  try {
    const data = await carData();
    // push data to owner's Car array
    function pushToCars() {
      owners.findOneAndUpdate(
        {
          national_code: national_code,
        },
        {
          $push: {
            ownerCar: {
              id: id,
              type: type,
              color: color,
              length: length,
              load_valume: load_valume,
            },
          },
        },
        (error, seccess) => {
          !error ? res.status(200).send(seccess) : res.send(error);
        }
      );
    }
    // check if the type of car is big and this owner has a big car already yet or not
    // if it has a big car and new car is bit too it wont add to this owner
    if (type === "big") {
      data?.map((owner) => {
        if (owner.national_code === +national_code) {
          owner.ownerCar.map((car) => {
            if (car.type === "big") throw `This owner have a big car already!`;
          });
          pushToCars();
        }
      });
    } else {
      pushToCars();
    }
  } catch (error) {
    res.send(error);
  }
};

const getCarByOwnerAge = async (req, res) => {
  const operators = req.query;

  try {
    // if query is between two numer of age this run
    if (operators.less && operators.great) {
      owners
        .find({
          $and: [
            { age: { $gt: +operators.great } },
            { age: { $lt: +operators.less } },
          ],
        })
        .select("ownerCar")
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          throw err;
        });
    }
    //if query has just less than a number for filter
    else if (operators.less) {
      owners
        .find({ age: { $lt: +operators.less } })
        .select("ownerCar")
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          throw err;
        });
    }
    //if query has just grater than a number for filter
    else {
      owners
        .find({ age: { $gt: +operators.great } })
        .select("ownerCar")
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          throw err;
        });
    }
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getAllCars,
  createCar,
  getCarByColorFilter,
  getCarByOwnerAge,
};
