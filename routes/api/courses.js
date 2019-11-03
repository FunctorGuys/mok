const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const refactoring = require("../../utils/refactoring");
const auth = require("../../middleware/auth");
const Course = require("../../models/Course");
const Payment = require("../../models/Payment");

// @route  POST api/courses/addCourse
// @desc   Creata a Course
// @access Private
router.post(
  "/addCourse",
  [
    auth,
    [
      check("nameOfCourse", "Name of the course is required")
        .not()
        .isEmpty(),
      check("price", "Price is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }

    const { nameOfCourse, school, grade, group,lUpdate,author,fLine, price, img, owner} = req.body;

    

    //Build course
    const courseDetails = {};
    if (nameOfCourse) courseDetails.nameOfCourse = nameOfCourse;
    if (school) courseDetails.school = school;
    if (grade) courseDetails.grade = grade;
    if (group) courseDetails.group = group;
    if (lUpdate) courseDetails.lUpdate = lUpdate;
    if (author) courseDetails.author = author;
    if (fLine) courseDetails.fLine = fLine;
    if (price) courseDetails.price = price;
    if (img) courseDetails.img = img;
    if (owner) courseDetails.owner = owner;
    


    try {
      //create
      course = new Course(courseDetails);
      let newCourse = await course.save();
      if (!!newCourse) res.json({ data: newCourse, status: 200 });
      else res.json({ message: "not added", status: 400 });
    } catch (err) {
      console.error(err.message);
      res.send({message:"Server Error",status:500});
    }
  }
);



// @route  PUT api/courses/updateCourse
// @desc   Update a Course
// @access Private
router.put(
  "/updateCourse",
  [
    auth,
    [
      check("id", "id of the course is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(), status: 400 });
    }

    const { id,nameOfCourse, school, grade, group,lUpdate,author,fLine, price, img, owner} = req.body;

    try {
      const course = await Course.findById(id);


      //Build course
      const courseDetails = {};
      if (nameOfCourse) course.nameOfCourse = nameOfCourse;
      if (school) course.school = school;
      if (grade) course.grade = grade;
      if (group) course.group = group;
      if (lUpdate) course.lUpdate = lUpdate;
      if (author) course.author = author;
      if (fLine) course.fLine = fLine;
      if (price) course.price = price;
      if (img) course.img = img;
      if (owner) course.owner = owner;

      let newCourse = await course.save();
      if (!!newCourse) res.json({ data: newCourse, status: 200 });
      else res.json({ message: "not update", status: 400 });
    } catch (err) {
      console.error(err.message);
      res.send({message:"Server Error",status:500});
    }
  }
);


// @route  GET api/courses/:school
// @desc   Get all courses
// @access Public
router.get("/by/:school", async (req, res) => {
  try {
    const school = req.params.school;

    const courses = await Course.find({ school }).sort({ data: -1 });
    if (!!courses) {
      let allCourses = refactoring(courses);
      res.json({ data: allCourses, status: 200 });
    } else {
      res.send({ message: "No courses", status: 400 });
    }
  } catch (err) {
    res.send({ message: "Server error", status: 500 });
  }
});

// @route  GET api/courses
// @desc   Get all courses
// @access Public
router.get("/", auth, async (req, res) => {
  try {
    const courses = await Course.find().sort({ data: -1 });
    if (!!courses) {
      let allCourses = refactoring(courses);
      res.json({ data: allCourses, status: 200 });
    } else {
      res.send({ message: "No courses", status: 400 });
    }
  } catch (err) {
    res.send({ message: "Server error", status: 500 });
  }
});

// @route  GET api/courses/:id
// @desc   Get course by id
// @access Public
router.get("/:id", auth, async (req, res) => {
  try {
    let { id } = req.user;
    let { params } = req;
    let userPayment = await Payment.findOne({ user: id });

    const course = await Course.findById(params.id);
    if (course && course.price==='0'){
      let getCourse = refactoring([course]);
      res.json({ data: getCourse[0], status: 200 });
    } else{
      if (userPayment) {
        let { pay } = userPayment;
        let paid=0;
        for (let i=0;i<pay.length;i++){
            if (typeof pay[i].course !=='undefined'){
              if (pay[i].course.toString()===params.id.toString())
                paid++;
              }
        }
        if (paid) {
          let getCourse = refactoring([course]);
          res.json({ data: getCourse[0], status: 200 });
        } else {
          res.json({
            message: "You should pay it firstly",
            status: 400
          });
        } 

      } else {
        res.json({
          message: "You should pay it firstly",
          status: 400
        });
      }
    }
  } catch (err) {
    return res.json({ message: "Server error", status: 500 });
  }
});

// @route  GET api/course/specific/:id
// @desc   Get course by id
// @access Public
router.get("/specific/:courseID", auth, async (req, res) => {
  try {
        const course = await Course.findById(req.params.courseID);
        let getCourse = refactoring([course]);
        res.json({ data: getCourse[0], status: 200 });
  } catch (err) {
    return res.json({ message: "Server error", status: 500 });
  }
});

// @route  GET api/courses/:id/:link
// @desc   Get course by id
// @access Public
router.get("/:id/:link", auth ,async (req, res) => {
  try {
    let 
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.json({ message: "Course not found",status:400 });
    }
    const link = course.links.filter(item => item._id === req.params.link);
    if (!!link.length) {
      let courseLinks = refactoring(link, false);
      res.json({data:courseLinks,status:200});
    } else {
      res.json({message:"No videos",status:400});
    }
  } catch (err) {
      return res.json({ message:"server error",status:400 });
  }
});

// @route Post api/courses/link/:id
// @desc Add link to course
// @access Private
router.post(
  "/link/:id",
  [
    auth,
    [
      check("link", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array(),status:400 });
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
      const course = await Course.findById(req.params.id);
      
      course.links.unshift(newLink);
      
      let newVideo=await course.save();
      res.json({data:newVideo,status:200});
      // console.log("newVideo",newVideo);
      // let videos=refactoring(newVideo.links, false)
      // console.log("video",videos);
      // res.json({data:videos,status:200});
    } catch (err) {
      res.send({ message: "Server Error", status: 500 });
    }
  }
);

module.exports = router;
