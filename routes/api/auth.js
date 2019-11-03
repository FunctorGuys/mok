const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const SES = require('./sesNotification');

const User = require('../../models/User');

// @route  GET api/auth
// @desc   Test route
// @access Prviate
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/auth/admin
// @desc   check if admin login
// @access Private
router.get('/admin', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (user.role === 0) {
      return res
        .status(401)
        .json({ errors: [{ msg: 'משתמש זה לא מורשה להיכנס לפאנל ניהול' }] });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  PUT api/auth/updatePassword
// @desc   Confirmed email user
// @access Public
router.put(
  '/updatePassword',

  async (req, res) => {
    try {
      const { password, token } = req.body;

      const {
        user: { id }
      } = jwt.verify(token, config.get('jwtSecret'));

      const user = await User.findById(id);
      if (user) {
        // Encrypt password
        const salt = await bcrypt.genSalt(10);

        const newPassword = await bcrypt.hash(password, salt);

        user.password = newPassword;
        await user.save();

        return res.json(user);
      }
    } catch (error) {
      res.send('error');
    }
  }
);

// @route  GET api/auth/recovery
// @desc   recovery mail - check if the mail exist
// @access Prviate
router.post('/recovery', async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    // See if user exists
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'דואר אלקטרוני זה לא קיים במערכת' }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        //async email
        const url = `https://mok.co.il/recovery/${token}`;

        const design = `<div>
                         <h3 style='color:red;'>על מנת לאפס סיסמה יש ללחוץ על הקישור הבא: </h3>
                         <a href="${url}">${url}</a>
                      </div>`;
        const reciver = user.email;
        SES.sendingEmail(reciver, design);
        res.json({ token });
      }
    );
  } catch (err) {
    res.send('error');
  }
});

// @route  GET api/auth/confirmation/:token
// @desc   Confirmed user
// @access Public
router.get('/confirmation/:token', async (req, res) => {
  try {
    const {
      user: { id }
    } = jwt.verify(req.params.token, config.get('jwtSecret'));
    const user = await User.findById(id).select('-password');

    if (user) {
      await User.updateOne({ _id: id }, { confirmed: true });

      return res.json('update');
    }
  } catch (error) {
    res.send('error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token => login
// @access  Public
router.post(
  '/',
  [
    check('email', 'יש למלא כתובת דואר אלקטרוני תקינה').isEmail(),
    check('password', 'יש להזין סיסמה').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, ip } = req.body;
    try {
      let user = await User.findOne({ email });

      // See if user exists
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'פרטי ההתחברות שגויים' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'פרטי ההתחברות שגויים' }] });
      }

      //user need to conirm email
      /* if (!user.confirmed) {
        return res.status(400).json({
          errors: [
            {
              msg:
                'יש לאמת את החשבון באמצעות לחיצה על הקישור ששלחנו לכתובת הדואר האלקטרוני'
            }
          ]
        });
      }
	  */

      // if (user && user.ip.length == 0) {
      //   user.ip = ip;
      //   await user.save();
      // } else {
      //   let checkExist = false;
      //   if (user.ip.length > 0 && user.ip.length < 3) {
      //     for (let item of user.ip) {
      //       if (item === ip) {
      //         checkExist = true;
      //       }
      //     }
      //     if (!checkExist) {
      //       user.ip.push(ip);
      //       await user.save();
      //     }
      //   } else {
      //     let checkIPExist = false;
      //     if (user.ip.length > 0) {
      //       for (let item of user.ip) {
      //         if (item === ip) {
      //           checkIPExist = true;
      //         }
      //       }
      //       if (checkIPExist == false) {
      //         return res.status(400).json({
      //           errors: [{ msg: 'משתמש רשאי להתחבר מ-3 כתובות ip בלבד' }]
      //         });
      //       }
      //     }
      //   }
      // }

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
          res.json({ token });
        }
      );
      // Return jsonwebtoken
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
