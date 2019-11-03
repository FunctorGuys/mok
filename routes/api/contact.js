const express = require('express');
const router = express.Router();

const SES = require('./sesNotification');

const { check, validationResult } = require('express-validator/check');

// @route  GET api/contact
// @desc   recovery mail - check if the mail exist
// @access Public
router.post(
  '/',
  [
    check('email', 'בבקשה מלא כתובות מייל תקינה').isEmail(),
    check('name', 'עליך למלא את השם המלא').exists()
  ],

  async (req, res) => {
    console.log('contact back');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, text } = req.body;
    try {
      const design = `<div>
                         <h3>name: ${name} email: ${email} </h3>
                         <h3> text: ${text}</h3>
                      </div>`;
      const reciver = 'nirdahan@gmail.com';
      SES.sendingEmail(reciver, design);

      res.json('send email');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
