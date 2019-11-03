const mongoose = require('mongoose');

const ShowcaseSchema = new mongoose.Schema({
  nameOfCourseA: {
    type: String
  },
  titleA: {
    type: String
  },
  nameOfCourseB: [
    {
      nameB: {
        type: String
      },
      price: {
        type: String
      },
      title: {
        type: String
      },
      titleB: {
        type: String
      },
      titleC: {
        type: String
      },
      lUpdate: {
        type: String
      },
      author: {
        type: String
      },
      owner: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },
      indexLink: {
        type: Number
      },
      imgB: {
        type: String
      },
      nameOfCourseC: [
        {
          nameC: {
            type: String
          },
          date: {
            type: Date,
            default: Date.now
          },
          indexLink: {
            type: Number
          },
          imgC: {
            type: String
          },
          nameOfCourseD: [
            {
              nameD: {
                type: String
              },
              imgD: {
                type: String
              },
              date: {
                type: Date,
                default: Date.now
              },
              indexLink: {
                type: Number
              },
              details: {
                type: String
              },
              nameB: {
                type: String
              },
              priceB: {
                type: String
              },
              links: [
                {
                  name: {
                    type: String
                  },
                  type: {
                    type: String
                  },
                  link: {
                    type: String
                  },
                  subject: {
                    type: String
                  },
                  indexLink: {
                    type: Number
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

module.exports = Showcase = mongoose.model('Showcase', ShowcaseSchema);
