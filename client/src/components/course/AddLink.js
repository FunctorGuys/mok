import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { setAlert } from './../../actions/alert';
import { getCourses } from './../../actions/course';
import { addLink } from './../../actions/course';
import Spinner from '../layout/Spinner';

const AddLink = ({
  setAlert,
  getCourses,
  addLink,
  course: { courses, loading }
}) => {
  const [formData, setFormData] = useState({
    courseId: '',
    name: '',
    type: '',
    link: '',
    indexLink: '',
    subject: ''
  });

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const { courseId, name, type, link, subject, indexLink } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log('type:', type, ' indexLink:', indexLink);
    addLink({ courseId, type, link, name, indexLink, subject });
  };

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>הוספת לינקים לקורס</h2>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <select name="courseId" onChange={e => onChange(e)}>
                <option value="1" disabled selected>
                  בחר קורס
                </option>
                {courses.map(c => (
                  <Fragment>
                    <option key={c._id} value={c._id}>
                      {c.nameOfCourse}
                    </option>
                  </Fragment>
                ))}
              </select>
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="נושא "
                name="subject"
                value={subject}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <select name="type" onChange={e => onChange(e)}>
                <option value="video" disabled selected>
                  סוג לינק
                </option>
                <option value="video">mp4</option>
                <option value="pdf">pdf</option>
                <option value="showcase">showcase</option>
              </select>
            </div>{' '}
            <div className="row-1">
              <input
                type="text"
                placeholder="שם התרגיל "
                name="name"
                value={name}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="לינק "
                name="link"
                value={link}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="מיקום"
                name="indexLink"
                value={indexLink}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="button">
              <button type="submit" className="btn-submit">
                הוסף
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

AddLink.propTypes = {
  getCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setAlert: PropTypes.func.isRequired,
  course: state.course
});

export default connect(
  mapStateToProps,
  { setAlert, getCourses, addLink }
)(AddLink);
