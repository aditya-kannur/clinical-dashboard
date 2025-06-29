const express = require('express');
const router = express.Router();
const {
  getTrials,
  createTrial,
  updateTrial,
  deleteTrial
} = require('../controllers/trialController');

router.get('/', getTrials);
router.post('/', createTrial);
router.put('/:id', updateTrial);
router.delete('/:id', deleteTrial);

module.exports = router;
