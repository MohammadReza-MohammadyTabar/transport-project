const express = require("express");
const router = express.Router();
const {
  createOwner,
  getAllOwners,
  getOwnerByNationalCode,
  getOwnerByAge,
  violationOwners,
} = require("../controllers/ownersController");

router.route("/").get(getAllOwners).post(createOwner);
router.route("/agefilter/").get(getOwnerByAge);
router.route("/violationowners").get(violationOwners);
router.route("/:national_code").get(getOwnerByNationalCode);

module.exports = router;
