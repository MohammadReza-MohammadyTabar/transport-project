const express = require("express");
const { getAllCars, createCar } = require("../controllers/carsController");
const router = express.Router();

router.route("/").get(getAllCars);
router.route("/add/:national_code").post(createCar);
module.exports = router;
