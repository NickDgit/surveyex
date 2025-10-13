const Survey = require('../models/Survey');

// Δημιουργία survey
exports.createSurvey = async (req, res) => {
  try {
    const survey = await Survey.create(req.body);
    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Λήψη όλων των surveys
exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Λήψη ενός survey με id
exports.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.status(200).json(survey);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ενημέρωση survey
exports.updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.status(200).json(survey);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Διαγραφή survey
exports.deleteSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.status(200).json({ message: 'Survey deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
