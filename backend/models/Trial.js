const mongoose = require('mongoose');

const trialSchema = new mongoose.Schema({
  name: String,
  phase: String,
  location: String,
  status: String
});

module.exports = mongoose.model('Trial', trialSchema);
