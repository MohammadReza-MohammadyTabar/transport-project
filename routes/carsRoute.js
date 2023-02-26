const express = require("express");

const {
  getAllCars,
  createCar,
  getCarByColorFilter,
  getCarByOwnerAge,
} = require("../controllers/carsController");

const router = express.Router();
router.route("/").get(getAllCars);
router.route("/colorfilter/").get(getCarByColorFilter);
router.route("/agefilter").get(getCarByOwnerAge);
router.route("/addcarto/:national_code").post(createCar);

module.exports = router;
