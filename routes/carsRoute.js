const express = require("express");
const {
  getAllCars,
  createCar,
  getCarByColorFilter,
} = require("../controllers/carsController");
const router = express.Router();
router.route("/").get(getAllCars);
router.route("/color/").get(getCarByColorFilter);
router.route("/add/:national_code").post(createCar);
module.exports = router;
