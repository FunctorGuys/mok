const config = require('../config/default.json');
const secretLinkKey = config.linkSecret;
const encrypt = require('./encrypt');

const refactoring = (coursesORLinks, isCourse = true) => {
  if (isCourse)
    return coursesORLinks.map(item => {
      let {
        links,
        _id,
        nameOfCourse,
        school,
        grade,
        fLine,
        author,
        group,
        lUpdate,
        price,
        img
      } = item;

      let encryptLinks = links.map(item => {
        let { _id, name, link, type, subject, indexLink } = item;
        let encryptLink = encrypt(link, secretLinkKey);
        return {
          _id,
          name,
          link: encryptLink,
          type,
          subject,
          indexLink
        };
      });
      return {
        _id,
        nameOfCourse,
        school,
        grade,
        group,
        lUpdate,
        fLine,
        author,
        price,
        img,
        links: encryptLinks
      };
    });
  else
    return links.map(item => {
      let { _id, name, link, type, subject, indexLink } = item;
      let encryptLink = encrypt(link, secretLinkKey);
      return {
        _id,
        name,
        link: encryptLink,
        type,
        subject,
        indexLink
      };
    });
};

module.exports = refactoring;
