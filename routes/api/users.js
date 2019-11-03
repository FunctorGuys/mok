const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const SES = require('./sesNotification');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

router.post(
  '/',
  [
    check('name', 'שם מלא חובה')
      .not()
      .isEmpty(),
    check('email', 'יש להזין דואר אלקטרוני חוקי').isEmail(),
    check('password', 'הסיסמה חייבת להכיל 6 תווים או יותר').isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, phone } = req.body;

    try {
      let user = await User.findOne({ email });
      // See if user exists
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'המשתמש כבר קיים' }] });
      }

      user = new User({
        name,
        email,
        password,
        phone
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;

          //async email
          const url = `http://mok.co.il/confirmation/${token}`;

          const design = `<div>
                          <h3 style='color:red;'>ברוכים הבאים לאתר M.o.K </h3>
                       </div>`;

          const reciver = user.email;
          SES.sendingEmail(reciver, design);
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
