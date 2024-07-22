const express = require("express");
const router = express.Router();
const {
  createProspect,
  getAllProspects,
  updateProspect,
  getOneProspect,
  deleteProspect,
} = require("../controllers/prospect");
// add prospect
router.post("/", createProspect);

// get all prospect
router.get("/", getAllProspects);
// update prospect
router.put("/:id", updateProspect);
// delete prospect
router.delete("/:id", deleteProspect);

// get one prospect
router.post("/find/:id", getOneProspect);

module.exports = router;
