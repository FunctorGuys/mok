const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  ip: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: Number,
    default: 0
  }
});

module.exports = User = mongoose.model('user', UserSchema);
