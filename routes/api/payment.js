const express = require('express');
const router = express.Router();
const Payment = require('../../models/Payment');
const auth = require('../../middleware/auth');

// @route POST api/payment/course
// @desc Test route
// @access Public
router.post('/course', auth, async (req, res) => {
  try {
    const { userId, courseId, price } = req.body;
    let userPayment = await Payment.findOne({ user: userId });
    if (!userPayment) {
      let payment = await new Payment({
        user: userId,
        pay: [
          {
            course: courseId,
            price
          }
        ]
      }).save();
      return res.json({ data: payment, status: 200 });
    } else {
      let courseAlreadyExist = userPayment.pay.findIndex(
        p => p.course == courseId
      );
      if (courseAlreadyExist > -1) {
        return res.json({ message: 'Course already exists', status: 400 });
      } else {
        userPayment.pay.push({ course: courseId, price });
        let courseAppended = await userPayment.save();
        res.json({ data: courseAppended, status: 200 });
      }
    }
  } catch (err) {
    res.send({ message: 'Server Error', status: 500 });
  }
});

// @route POST api/payment/showcase
// @desc Test route
// @access Public
router.post('/showcase', auth, async (req, res) => {
  try {
    const { userId, showcaseId, price } = req.body;
    console.log('price', price);
    let userPayment = await Payment.findOne({ user: userId });
    if (!userPayment) {
      let payment = await new Payment({
        user: userId,
        pay: [
          {
            showcase: showcaseId,
            price
          }
        ]
      }).save();
      return res.json({ data: payment, status: 200 });
    } else {
      let courseAlreadyExist = userPayment.pay.findIndex(
        p => p.showcase == showcaseId
      );
      if (courseAlreadyExist > -1) {
        return res.json({ message: 'Showcase already exists', status: 400 });
      } else {
        console.log('price2', price);
        userPayment.pay.push({ showcase: showcaseId, price });
        console.log('userPayment', userPayment);
        let courseAppended = await userPayment.save();
        res.json({ data: courseAppended, status: 200 });
      }
    }
  } catch (err) {
    res.send({ message: 'Server Error', status: 500 });
  }
});

// @route  GET api/payment/me
// @desc   Get current users payment
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const payment = await Payment.findOne({ user: req.user.id });

    if (!payment) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
