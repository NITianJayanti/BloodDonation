const Donor = require("../models/Donor");

// Create donor
const createDonor = async (req, res) => {
  try {
    const newDonor = new Donor(req.body); // use 'new' keyword
    const donor = await newDonor.save();
    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json({ message: "Error creating donor", error });
  }
};

// Get all donors
const getAllDonors = async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donors", error });
  }
};

// Update donor
const updateDonor = async (req, res) => {
  try {
    const updatedDonor = await Donor.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDonor); // use status 200 for update
  } catch (error) {
    res.status(500).json({ message: "Error updating donor", error });
  }
};

// Get one donor
const getOneDonor = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }
    res.status(200).json(donor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donor", error });
  }
};

// Delete donor
const deleteDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndDelete(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: "Donor not found" });
    }
    res.status(200).json({ message: "Donor deleted successfully" }); // use status 200 for delete
  } catch (error) {
    res.status(500).json({ message: "Error deleting donor", error });
  }
};

// Get donor statistics
const getDonorsStats = async (req, res) => {
  try {
    const stats = await Donor.aggregate([
      {
        $group: {
          _id: "$bloodgroup",
          count: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donor statistics", error });
  }
};

module.exports = {
  createDonor,
  getAllDonors,
  updateDonor,
  getOneDonor,
  deleteDonor,
  getDonorsStats,
};
