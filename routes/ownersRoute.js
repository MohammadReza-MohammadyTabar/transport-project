const express = require("express");
const router = express.Router();
const {
  createOwner,
  getAllOwners,
  getOwnerByNationalCode,
} = require("../controllers/ownersController");
router.route("/").get(getAllOwners).post(createOwner);
router.route("/:national_code").get(getOwnerByNationalCode);
module.exports = router;
