const Prospect = require("../models/Prospect");

// Create prospect
const createProspect = async (req, res) => {
  try {
    const newProspect = new Prospect(req.body); // use 'new' keyword
    const prospect = await newProspect.save();
    res.status(201).json(prospect);
  } catch (error) {
    res.status(500).json({ message: "Error creating prospect", error });
  }
};

// Get all Prospects
const getAllProspects = async (req, res) => {
  try {
    const prospects = await Prospect.find().sort({ createdAt: -1 });
    res.status(200).json(prospects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching prospects", error });
  }
};

// Update prospect
const updateProspect = async (req, res) => {
  try {
    const updatedProspect = await Prospect.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProspect); // use status 200 for update
  } catch (error) {
    res.status(500).json({ message: "Error updating prospect", error });
  }
};

// Get one prospect
const getOneProspect = async (req, res) => {
  try {
    const prospect = await Prospect.findById(req.params.id);
    if (!prospect) {
      return res.status(404).json({ message: "Prospect not found" });
    }
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json({ message: "Error fetching prospect", error });
  }
};

// Delete prospect
const deleteProspect = async (req, res) => {
  try {
    const prospect = await Prospect.findByIdAndDelete(req.params.id);
    if (!prospect) {
      return res.status(404).json({ message: "Prospect not found" });
    }
    res.status(200).json({ message: "Prospect deleted successfully" }); // use status 200 for delete
  } catch (error) {
    res.status(500).json({ message: "Error deleting prospect", error });
  }
};

module.exports = {
  createProspect,
  getAllProspects,
  updateProspect,
  getOneProspect,
  deleteProspect,
};
