const express = require("express");
const router = express.Router();
const {
  createDonor,
  getAllDonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorsStats,
} = require("../controllers/donor");
const { verifyTokenAndAuthorization } = require("../middlewares/verifyToken");
// add donor

router.post("/", verifyTokenAndAuthorization, createDonor);
// get all dnors
router.get("/", getAllDonors);
// update donor
router.put("/:id", updateDonor);

// get one donor
router.get("/find/:id", getOneDonor);
// delete donor
router.delete("/:id", deleteDonor);
// donor stats
router.get("/stats", getDonorsStats);

module.exports = router;
