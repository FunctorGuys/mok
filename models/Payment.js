const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  pay: [
    {
      course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
      },
      showcase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Showcase'
      },
      price: {
        type: Number
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Payment = mongoose.model('Payment', PaymentSchema);
