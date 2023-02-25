const { where } = require("../models/owners");
const owners = require("../models/owners");
// get all owners data from database
const ownersData = async () => {
  return await owners.find().select("name national_code age total_toll_paid");
};
//get all owners data controller
const getAllOwners = async (req, res) => {
  try {
    const data = await ownersData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(err);
  }
};
//create owner data controller
const createOwner = async (req, res) => {
  //give all data from reqest body
  const { name, national_code, age, total_toll_paid } = req.body;

  try {
    const data = await ownersData();
    //check if new owner is allready in database
    data?.map((owner) => {
      if (owner.national_code === +national_code)
        throw "This owner is allready is in databace!";
    });
    // create a new owner and save it to database
    await new owners({
      name: name,
      national_code: national_code,
      age: age,
      total_toll_paid: total_toll_paid,
      ownerCar: [],
    })
      .save()
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(500).send(error);
  }
};
//get one owner by it's national code
const getOwnerByNationalCode = async (req, res) => {
  const national_code = req.params.national_code;
  try {
    await owners
      .find({ national_code: national_code })
      .select("name national_code age total_toll_paid")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(500).send(error);
  }
};
// filter owner by age
const getOwnerByAge = async (req, res) => {
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
        .select("name national_code age total_toll_paid")
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
        .select("name national_code age total_toll_paid")
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
        .select("name national_code age total_toll_paid")
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
  getAllOwners,
  createOwner,
  getOwnerByNationalCode,
  getOwnerByAge,
};
