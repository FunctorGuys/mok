import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { updateCourse } from '../../actions/course';

const UpdateCourse = ({ setAlert, updateCourse }) => {
  const [formData, setFormData] = useState({
    id: '',
    nameOfCourse: '',
    school: '',
    grade: '',
    group: '',
    lUpdate: '',
    fLine: '',
    price: '',
    img: '',
    owner: ''
  });

  const {
    id,
    nameOfCourse,
    school,
    grade,
    group,
    lUpdate,
    author,
    fLine,
    price,
    img,
    owner
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    updateCourse({
      id,
      nameOfCourse,
      school,
      grade,
      author,
      group,
      fLine,
      lUpdate,
      price,
      img,
      owner
    });
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>ערוך קורס</h2>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="text"
                placeholder="קוד הקורס"
                name="id"
                value={id}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="שם הקורס"
                name="nameOfCourse"
                value={nameOfCourse}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="שייך את הקורס"
                name="school"
                value={school}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="מחבר הקורס"
                name="author"
                value={author}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="בעלי הקורס"
                name="owner"
                value={owner}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="כותרת ראשית"
                name="fLine"
                value={fLine}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="כותרת משנית"
                name="grade"
                value={grade}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <textarea
                placeholder="פיסקה"
                name="group"
                value={group}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="עדכון אחרון"
                name="lUpdate"
                value={lUpdate}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="מחיר"
                name="price"
                value={price}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="תמונה"
                name="img"
                value={img}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="button">
              <button type="submit" className="btn-submit">
                ערוך
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

UpdateCourse.propTypes = {
  setAlert: PropTypes.func.isRequired,
  updateCourse: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, updateCourse }
)(UpdateCourse);
