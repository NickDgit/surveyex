const express = require('express');
const router = express.Router();
const surveysController = require('../controllers/surveysController');

// CRUD routes
router.post('/', surveysController.createSurvey);
router.get('/', surveysController.getSurveys);
router.get('/:id', surveysController.getSurveyById);
router.put('/:id', surveysController.updateSurvey);
router.delete('/:id', surveysController.deleteSurvey);

module.exports = router;
