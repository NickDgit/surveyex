const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  questions: [
    {
      questionText: String,
      options: [String],
      answers: [String]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Survey', SurveySchema);
