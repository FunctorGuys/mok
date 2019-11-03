const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  nameOfCourse: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  owner: {
    type: String
  },
  fLine: {
    type: String
  },
  school: {
    type: String
  },
  grade: {
    type: String
  },
  group: {
    type: String
  },
  lUpdate: {
    type: String
  },
  price: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  links: [
    {
      name: {
        type: String
      },
      type: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      indexLink: {
        type: Number
      }
    }
  ]
});

module.exports = Course = mongoose.model('Course', CourseSchema);
