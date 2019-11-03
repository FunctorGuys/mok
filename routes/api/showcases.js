const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Course = require('../../models/Course');
const Payment = require('../../models/Payment');
const Showcase = require('../../models/Showcase');

// @route DELETE api/showcases/:id
// @desc DELETE a post
// @access Private
router.delete('/:id', async (req, res) => {
  try {
    const course = await Showcase.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ msg: 'course not found' });
    }

    await course.remove();
    res.json({ data: course, status: 200, msg: 'course removed ' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'course not found' });
    }

    res.status(500).send('Server Error');
  }
});

// @route DELETE api/showcase/:show_a_id/:show_b_id
// @desc Delete on a comment
// @access Private
router.delete('/:idA/:idB', async (req, res) => {
  try {
    const course = await Showcase.findById(req.params.idA);
    //Pull out comment
    let removeIndex = null;
    for (var i = 0; i < course.nameOfCourseB.length; i++) {
      if (course.nameOfCourseB[i]._id == req.params.idB) {
        removeIndex = i;
      }
    }

    let courseB = course.nameOfCourseB[removeIndex];

    //Make sure comment exists
    if (!courseB) {
      return res.status(404).json({ msg: 'courseB does not exist' });
    }

    course.nameOfCourseB.splice(removeIndex, 1);

    await course.save();

    res.json({ data: course.nameOfCourseB, status: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/showcase/:show_a_id/:show_b_id/:show_c_id
// @desc Delete on a comment
// @access Private
router.delete('/:idA/:idB/:idC', async (req, res) => {
  try {
    const course = await Showcase.findById(req.params.idA);

    //Pull out comment
    let removeIndex = null;
    let courseB = null;
    for (var i = 0; i < course.nameOfCourseB.length; i++) {
      if (course.nameOfCourseB[i]._id == req.params.idB) {
        courseB = course.nameOfCourseB[i];

        for (var j = 0; j < courseB.nameOfCourseC.length; j++) {
          if (courseB.nameOfCourseC[j]._id == req.params.idC) {
            removeIndex = j;
          }
        }
      }
    }

    //Make sure comment exists
    if (!courseB) {
      return res.status(404).json({ msg: 'courseB does not exist' });
    }
    if (removeIndex == null)
      return res.status(404).json({ msg: 'courseC does not exist' });

    courseB.nameOfCourseC.splice(removeIndex, 1);

    await course.save();

    res.json({ data: course.nameOfCourseB, status: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/showcase/:show_a_id/:show_b_id/:show_c_id/:show_d_id
// @desc Delete on a comment
// @access Private
router.delete('/:idA/:idB/:idC/:idD', async (req, res) => {
  try {
    const course = await Showcase.findById(req.params.idA);

    //Pull out comment
    let removeIndex = null;
    let courseB = null;
    let courseC = null;
    for (var i = 0; i < course.nameOfCourseB.length; i++) {
      if (course.nameOfCourseB[i]._id == req.params.idB) {
        courseB = course.nameOfCourseB[i];
        for (var j = 0; j < courseB.nameOfCourseC.length; j++) {
          if (courseB.nameOfCourseC[j]._id == req.params.idC) {
            courseC = courseB.nameOfCourseC[j];
            for (var z = 0; z < courseC.nameOfCourseD.length; z++) {
              if (courseC.nameOfCourseD[z]._id == req.params.idD) {
                removeIndex = z;
              }
            }
          }
        }
      }
    }

    //Make sure comment exists
    if (!courseB) {
      return res.status(404).json({ msg: 'courseB does not exist' });
    }
    if (!courseC) {
      return res.status(404).json({ msg: 'courseC does not exist' });
    }
    if (removeIndex == null)
      return res.status(404).json({ msg: 'courseC does not exist' });

    courseC.nameOfCourseD.splice(removeIndex, 1);

    await course.save();

    res.json({ data: courseB.nameOfCourseC, status: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route DELETE api/showcase/:idA/:idB/:idC/:idD/:idLink
// @desc Delete on a comment
// @access Private
router.delete('/:idA/:idB/:idC/:idD/:idLink', async (req, res) => {
  try {
    const course = await Showcase.findById(req.params.idA);

    //Pull out comment
    let removeIndex = null;
    let courseB = null;
    let courseC = null;
    let courseD = null;
    for (var i = 0; i < course.nameOfCourseB.length; i++) {
      if (course.nameOfCourseB[i]._id == req.params.idB) {
        courseB = course.nameOfCourseB[i];
        for (var j = 0; j < courseB.nameOfCourseC.length; j++) {
          if (courseB.nameOfCourseC[j]._id == req.params.idC) {
            courseC = courseB.nameOfCourseC[j];
            for (var z = 0; z < courseC.nameOfCourseD.length; z++) {
              if (courseC.nameOfCourseD[z]._id == req.params.idD) {
                courseD = courseC.nameOfCourseD[z];
                for (var w = 0; w < courseD.links.length; w++) {
                  if (courseD.links[w]._id == req.params.idLink) {
                    removeIndex = w;
                  }
                }
              }
            }
          }
        }
      }
    }

    //Make sure comment exists
    if (!courseB) {
      return res.status(404).json({ msg: 'courseB does not exist' });
    }
    if (!courseC) {
      return res.status(404).json({ msg: 'courseC does not exist' });
    }
    if (!courseD) {
      return res.status(404).json({ msg: 'courseD does not exist' });
    }
    if (removeIndex == null)
      return res.status(404).json({ msg: 'courseD does not exist' });

    courseD.links.splice(removeIndex, 1);

    await course.save();

    res.json({ data: courseD.links, status: 200 });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/showcases/by/:school
// @desc   Get all showcases
// @access Public
router.get('/by/:school', async (req, res) => {
  try {
    const nameOfCourseA = req.params.school;
    const courses = await Showcase.find({ nameOfCourseA }).sort({ data: -1 });
    if (courses) {
      res.json({ data: courses, status: 200 });
    } else {
      res.send({ message: 'No courses', status: 400 });
    }
  } catch (err) {
    res.send({ message: 'Server error', status: 500 });
  }
});

// @route  POST api/showcase/addShowD
// @desc   Creata a Course
// @access Private
router.post(
  '/addLinkToShow',
  [
    check('school', 'school is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const {
      school,
      idB,
      idC,
      idD,
      name,
      type,
      link,
      indexLink,
      subject
    } = req.body;

    //Build course
    const newLink = {};
    if (name) newLink.name = name;
    if (link) newLink.link = link;
    if (type) newLink.type = type;
    if (subject) newLink.subject = subject;
    if (indexLink) newLink.indexLink = indexLink;

    try {
      const courseA = await Showcase.findById(school);

      for (var i = 0; i < courseA.nameOfCourseB.length; i++) {
        if (courseA.nameOfCourseB[i]._id == idB) {
          for (
            var j = 0;
            j < courseA.nameOfCourseB[i].nameOfCourseC.length;
            j++
          ) {
            if (courseA.nameOfCourseB[i].nameOfCourseC[j]._id == idC) {
              for (
                var z = 0;
                z <
                courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD.length;
                z++
              ) {
                if (
                  courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD[z]
                    ._id == idD
                ) {
                  courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD[
                    z
                  ].links.unshift(newLink);
                }
              }
            }
          }
        }
      }

      let newCourse = await courseA.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route  POST api/showcase/addShowD
// @desc   Creata a Course
// @access Private
router.post(
  '/addShowD',
  [
    check('school', 'school is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const { nameD, imgD, idB, indexLink, details, school, idC } = req.body;

    //Build course
    const newD = {};
    if (nameD) newD.nameD = nameD;
    if (imgD) newD.imgD = imgD;
    if (indexLink) newD.indexLink = indexLink;
    if (details) newD.details = details;

    try {
      const courseA = await Showcase.findById(school);

      for (var i = 0; i < courseA.nameOfCourseB.length; i++) {
        if (courseA.nameOfCourseB[i]._id == idB) {
          newD.nameB = courseA.nameOfCourseB[i].nameB;
          newD.priceB = courseA.nameOfCourseB[i].price;
          for (
            var j = 0;
            j < courseA.nameOfCourseB[i].nameOfCourseC.length;
            j++
          ) {
            if (courseA.nameOfCourseB[i].nameOfCourseC[j]._id == idC) {
              courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD.unshift(
                newD
              );
            }
          }
        }
      }

      let newCourse = await courseA.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route  POST api/showcase/addShowC
// @desc   Creata a Course
// @access Private
router.post(
  '/addShowC',
  [
    check('school', 'school is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const { nameC, imgC, idB, indexLink, school } = req.body;

    //Build course
    const newC = {};
    if (nameC) newC.nameC = nameC;
    if (imgC) newC.imgC = imgC;
    if (indexLink) newC.indexLink = indexLink;

    try {
      const courseA = await Showcase.findById(school);
      for (var i = 0; i < courseA.nameOfCourseB.length; i++) {
        if (courseA.nameOfCourseB[i]._id == idB) {
          courseA.nameOfCourseB[i].nameOfCourseC.unshift(newC);
        }
      }

      let newCourse = await courseA.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route  POST api/showcase/addShowB
// @desc   Creata a Course
// @access Private
router.post(
  '/addShowB',
  [
    check('school', 'school is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }
    const {
      school,
      nameB,
      imgB,
      indexLink,
      price,
      lUpdate,
      title,
      titleB,
      titleC,
      author,
      owner
    } = req.body;
    //Build course
    const newB = {};
    if (nameB) newB.nameB = nameB;
    if (price) newB.price = price;
    if (imgB) newB.imgB = imgB;
    if (indexLink) newB.indexLink = indexLink;
    if (lUpdate) newB.lUpdate = lUpdate;
    if (title) newB.title = title;
    if (titleB) newB.titleB = titleB;
    if (titleC) newB.titleC = titleC;
    if (author) newB.author = author;
    if (owner) newB.owner = owner;

    try {
      const course = await Showcase.findById(school);

      course.nameOfCourseB.unshift(newB);
      let newCourse = await course.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route  POST api/showcase/updateShowB
// @desc   Creata a Course
// @access Private
router.put(
  '/updateShowB',
  [
    check('school', 'Id showA is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }
    const {
      school,
      nameB,
      imgB,
      indexLink,
      price,
      lUpdate,
      title,
      titleB,
      titleC,
      author,
      owner,
      idB
    } = req.body;

    try {
      let showB;
      const show = await Showcase.findById(school);
      for (let i = 0; i < show.nameOfCourseB.length; i++) {
        if (show.nameOfCourseB[i]._id.toString() === idB) {
          showB = show.nameOfCourseB[i];
        }
      }

      if (nameB) showB.nameB = nameB;
      if (price) showB.price = price;
      if (imgB) showB.imgB = imgB;
      if (indexLink) showB.indexLink = indexLink;
      if (lUpdate) showB.lUpdate = lUpdate;
      if (title) showB.title = title;
      if (titleB) showB.titleB = titleB;
      if (titleC) showB.titleC = titleC;
      if (author) showB.author = author;
      if (owner) showB.owner = owner;

      let newShow = await show.save();

      res.json({ data: newShow, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route  POST api/showcase/add
// @desc   Creata a Course
// @access Private
router.post(
  '/add',
  [
    check('nameOfCourseA', 'Name of the course is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }

    const { nameOfCourseA, titleA } = req.body;

    //Build course
    const courseDetails = {};
    if (nameOfCourseA) courseDetails.nameOfCourseA = nameOfCourseA;
    if (titleA) courseDetails.titleA = titleA;

    try {
      //create
      showcase = new Showcase(courseDetails);
      let newShowcase = await showcase.save();
      if (!!newShowcase) res.json({ data: newShowcase, status: 200 });
      else res.json({ message: 'not added', status: 400 });
    } catch (err) {
      console.error(err.message);
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route Post api/showcases/B/:id
// @desc Add link to course
// @access Private
router.post(
  '/B/:id',
  [
    check('nameB', 'Text is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }
    const { nameB, price, imgB } = req.body;

    //Build course
    const newB = {};
    if (nameB) newB.nameB = nameB;
    if (price) newB.price = price;
    if (imgB) newB.imgB = imgB;

    try {
      const course = await Showcase.findById(req.params.id);

      course.nameOfCourseB.unshift(newB);
      let newCourse = await course.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route Post api/showcases/C/:idA/:idB
// @desc Add link to course
// @access Private
router.post(
  '/C/:idA/:idB',
  [
    check('nameC', 'Text is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }
    const { nameC, imgC } = req.body;

    //Build course
    const newC = {};
    if (nameC) newC.nameC = nameC;
    if (imgC) newC.imgC = imgC;

    try {
      const courseA = await Showcase.findById(req.params.idA);

      for (var i = 0; i < courseA.nameOfCourseB.length; i++) {
        if (courseA.nameOfCourseB[i]._id == req.params.idB) {
          courseA.nameOfCourseB[i].nameOfCourseC.unshift(newC);
        }
      }

      let newCourse = await courseA.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route Post api/showcases/D/:idA/:idB/:idC
// @desc Add link to course
// @access Private
router.post(
  '/D/:idA/:idB/:idC',
  [
    check('nameD', 'Text is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }
    const { nameD, imgD } = req.body;

    //Build course
    const newD = {};
    if (nameD) newD.nameD = nameD;
    if (imgD) newD.imgD = imgD;

    try {
      const courseA = await Showcase.findById(req.params.idA);

      for (var i = 0; i < courseA.nameOfCourseB.length; i++) {
        if (courseA.nameOfCourseB[i]._id == req.params.idB) {
          newD.nameB = courseA.nameOfCourseB[i].nameB;
          newD.priceB = courseA.nameOfCourseB[i].price;
          for (
            var j = 0;
            j < courseA.nameOfCourseB[i].nameOfCourseC.length;
            j++
          ) {
            if (
              courseA.nameOfCourseB[i].nameOfCourseC[j]._id == req.params.idC
            ) {
              courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD.unshift(
                newD
              );
            }
          }
        }
      }

      let newCourse = await courseA.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route Post api/showcases/link/:idA/:idB/:idC/:idD
// @desc Add link
// @access Private
router.post(
  '/link/:idA/:idB/:idC/:idD',
  [
    check('link', 'is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }
    const { link, type, name, subject, indexLink } = req.body;

    //Build course
    const newLink = {};
    if (name) newLink.name = name;
    if (link) newLink.link = link;
    if (type) newLink.type = type;
    if (subject) newLink.subject = subject;
    if (indexLink) newLink.indexLink = indexLink;

    try {
      const courseA = await Showcase.findById(req.params.idA);

      for (var i = 0; i < courseA.nameOfCourseB.length; i++) {
        if (courseA.nameOfCourseB[i]._id == req.params.idB) {
          for (
            var j = 0;
            j < courseA.nameOfCourseB[i].nameOfCourseC.length;
            j++
          ) {
            if (
              courseA.nameOfCourseB[i].nameOfCourseC[j]._id == req.params.idC
            ) {
              for (
                var z = 0;
                z <
                courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD.length;
                z++
              ) {
                if (
                  courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD[z]
                    ._id == req.params.idD
                ) {
                  courseA.nameOfCourseB[i].nameOfCourseC[j].nameOfCourseD[
                    z
                  ].links.unshift(newLink);
                }
              }
            }
          }
        }
      }

      let newCourse = await courseA.save();
      res.json({ data: newCourse, status: 200 });
    } catch (err) {
      res.send({ message: 'Server Error', status: 500 });
    }
  }
);

// @route  GET api/showcases/by/:school/:idB
// @desc   Get all showcases
// @access Public
router.get('/by/:school/:idB', async (req, res) => {
  try {
    const nameOfCourseA = req.params.school;
    const idB = req.params.idB;
    const courseA = await Showcase.find({ nameOfCourseA });
    if (courseA) {
      for (var i = 0; i < courseA[0].nameOfCourseB.length; i++) {
        if (courseA[0].nameOfCourseB[i]._id == idB) {
          var courseB = courseA[0].nameOfCourseB[i];
        }
      }

      res.json({ data: courseB, status: 200 });
    } else {
      res.send({ message: 'No courses', status: 400 });
    }
  } catch (err) {
    res.send({ message: 'Server error', status: 500 });
  }
});

// @route  GET api/showcases/by/:school/:idB/:idC
// @desc   Get all showcases
// @access Public
router.get('/by/:school/:idB/:idC', async (req, res) => {
  try {
    const nameOfCourseA = req.params.school;
    const idB = req.params.idB;
    const idC = req.params.idC;
    const courseA = await Showcase.find({ nameOfCourseA });
    if (courseA) {
      for (var i = 0; i < courseA[0].nameOfCourseB.length; i++) {
        if (courseA[0].nameOfCourseB[i]._id == idB) {
          var courseB = courseA[0].nameOfCourseB[i];

          if (courseB) {
            for (var j = 0; j < courseB.nameOfCourseC.length; j++) {
              if (courseB.nameOfCourseC[j]._id == idC) {
                var courseC = courseB.nameOfCourseC[j];
                res.json({ data: courseC, status: 200 });
              }
            }
          } else {
            res.send({ message: 'No courses', status: 400 });
          }
        }
      }
    } else {
      res.send({ message: 'No courses', status: 400 });
    }
  } catch (err) {
    res.send({ message: 'Server error', status: 500 });
  }
});

// @route  GET api/showcases/specific/:school/:idB/:idC/:idD
// @desc   Get course by id
// @access Public
router.get('/specific/:school/:idB/:idC/:idD', auth, async (req, res) => {
  try {
    let nameOfCourseA = req.params.school;
    let idB = req.params.idB;
    let idC = req.params.idC;
    let idD = req.params.idD;
    const courseA = await Showcase.find({ nameOfCourseA });
    if (courseA) {
      for (var i = 0; i < courseA[0].nameOfCourseB.length; i++) {
        if (courseA[0].nameOfCourseB[i]._id == idB) {
          var courseB = courseA[0].nameOfCourseB[i];
          if (courseB) {
            for (var j = 0; j < courseB.nameOfCourseC.length; j++) {
              if (courseB.nameOfCourseC[j]._id == idC) {
                var courseC = courseB.nameOfCourseC[j];
                if (courseC) {
                  for (var z = 0; z < courseC.nameOfCourseD.length; z++) {
                    if (courseC.nameOfCourseD[z]._id == idD) {
                      var courseD = courseC.nameOfCourseD[z];
                      res.json({ data: courseD, status: 200 });
                    }
                  }
                } else {
                  res.send({ message: 'No courses', status: 400 });
                }
              }
            }
          } else {
            res.send({ message: 'No courses', status: 400 });
          }
        }
      }
    } else {
      res.send({ message: 'No courses', status: 400 });
    }
  } catch (err) {
    return res.json({ message: 'Server error', status: 500 });
  }
});

// @route  GET api/showcases/by/:school/:idB/:idC/:idD
// @desc   Get course by id
// @access Public
router.get('/by/:school/:idB/:idC/:idD', auth, async (req, res) => {
  try {
    let { id } = req.user;
    let nameOfCourseA = req.params.school;
    let idB = req.params.idB;
    let idC = req.params.idC;
    let idD = req.params.idD;
    let userPayment = await Payment.findOne({ user: id });
    const courseA = await Showcase.find({ nameOfCourseA });

    if (courseA) {
      for (var i = 0; i < courseA[0].nameOfCourseB.length; i++) {
        if (courseA[0].nameOfCourseB[i]._id == idB) {
          if (courseA[0].nameOfCourseB[i].price === '0') {
            var courseB = courseA[0].nameOfCourseB[i];

            if (courseB) {
              for (var j = 0; j < courseB.nameOfCourseC.length; j++) {
                if (courseB.nameOfCourseC[j]._id == idC) {
                  var courseC = courseB.nameOfCourseC[j];
                  if (courseC) {
                    for (var z = 0; z < courseC.nameOfCourseD.length; z++) {
                      if (courseC.nameOfCourseD[z]._id == idD) {
                        var courseD = courseC.nameOfCourseD[z];
                        res.json({ data: courseD, status: 200 });
                      }
                    }
                  } else {
                    res.send({ message: 'No courses', status: 400 });
                  }
                }
              }
            } else {
              res.send({ message: 'No courses', status: 400 });
            }
          } else {
            if (userPayment) {
              let { pay } = userPayment;
              let paid = 0;
              for (var k = 0; k < pay.length; k++) {
                if (typeof pay[k].showcase !== 'undefined') {
                  if (pay[k].showcase.toString() === idB.toString()) {
                    paid++;
                  }
                }
              }
              if (paid) {
                var courseB = courseA[0].nameOfCourseB[i];
                if (courseB) {
                  for (var j = 0; j < courseB.nameOfCourseC.length; j++) {
                    if (courseB.nameOfCourseC[j]._id == idC) {
                      var courseC = courseB.nameOfCourseC[j];
                      if (courseC) {
                        for (var z = 0; z < courseC.nameOfCourseD.length; z++) {
                          if (courseC.nameOfCourseD[z]._id == idD) {
                            var courseD = courseC.nameOfCourseD[z];

                            res.json({ data: courseD, status: 200 });
                          }
                        }
                      } else {
                        res.send({ message: 'No courses', status: 400 });
                      }
                    }
                  }
                } else {
                  res.send({ message: 'No courses', status: 400 });
                }
              } else {
                res.json({
                  message: 'You should pay it firstly',
                  status: 400
                });
              }
            } else {
              res.json({
                message: 'You should pay it firstly',
                status: 400
              });
            }
          }
        }
      }
    } else {
      res.send({ message: 'No courses', status: 400 });
    }
  } catch (err) {
    return res.json({ message: 'Server error', status: 500 });
  }
});

module.exports = router;
