const Trial = require('../models/Trial');

// Get all trials
exports.getTrials = async (req, res) => {
  const trials = await Trial.find();
  res.json(trials);
};

// Create new trial
exports.createTrial = async (req, res) => {
  const newTrial = new Trial(req.body);
  await newTrial.save();
  res.status(201).json(newTrial);
};

// Update trial
exports.updateTrial = async (req, res) => {
  const updated = await Trial.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete trial
exports.deleteTrial = async (req, res) => {
  await Trial.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
