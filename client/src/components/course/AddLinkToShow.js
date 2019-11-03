import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { addLinkToShow } from '../../actions/course';

const AddLinkToShow = ({ setAlert, addLinkToShow }) => {
  const [formData, setFormData] = useState({
    school: '',
    idB: '',
    idC: '',
    idD: '',
    name: '',
    type: '',
    link: '',
    indexLink: '',
    subject: ''
  });

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
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    addLinkToShow({
      school,
      idB,
      idC,
      idD,
      name,
      type,
      link,
      indexLink,
      subject
    });
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>הוסף לינק ל Show </h2>
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
                placeholder=" B קוד הקורס"
                name="idB"
                value={idB}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder=" C קוד הקורס"
                name="idC"
                value={idC}
                onChange={e => onChange(e)}
              />
            </div>
            <div className="row-1">
              <input
                type="text"
                placeholder=" D קוד הקורס"
                name="idD"
                value={idD}
                onChange={e => onChange(e)}
              />
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
                <option value="video">video</option>
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

AddLinkToShow.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addLinkToShow: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, addLinkToShow }
)(AddLinkToShow);
