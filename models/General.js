const mongoose = require('mongoose');

const GeneralSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true,
    maxlength: 3
  }
});

module.exports = General = mongoose.model('general', GeneralSchema);
