import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { addShowB } from '../../actions/course';

const AddShowB = ({ setAlert, addShowB }) => {
  const [formData, setFormData] = useState({
    school: '',
    nameB: '',
    price: '',
    indexLink: '',
    imgB: '',
    lUpdate: '',
    author: '',
    title: '',
    titleB: '',
    titleC: '',
    owner: ''
  });

  const {
    school,
    nameB,
    price,
    indexLink,
    imgB,
    lUpdate,
    author,
    title,
    titleB,
    titleC,
    owner
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addShowB({
      school,
      nameB,
      price,
      indexLink,
      imgB,
      lUpdate,
      title,
      titleB,
      titleC,
      author,
      owner
    });
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>B צור קורס</h2>
          <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="row-1">
              <input
                type="text"
                placeholder=" A קוד הקורס"
                name="school"
                value={school}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder=" B שם הקורס"
                name="nameB"
                value={nameB}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder=" מחיר"
                name="price"
                value={price}
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

            <div className="row-1">
              <input
                type="text"
                placeholder="כותרת ראשית"
                name="title"
                value={title}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder="כותרת משנית"
                name="titleB"
                value={titleB}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <textarea
                placeholder="פיסקה"
                name="titleC"
                value={titleC}
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
                placeholder="מחבר הקורס"
                name="author"
                value={author}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder="בעלים"
                name="owner"
                value={owner}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder=" B תמונת הקורס"
                name="imgB"
                value={imgB}
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

AddShowB.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addShowB: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, addShowB }
)(AddShowB);
