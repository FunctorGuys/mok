import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from './../../actions/alert';
import PropTypes from 'prop-types';
import { addShowD } from '../../actions/course';

const AddShowD = ({ setAlert, addShowD }) => {
  const [formData, setFormData] = useState({
    school: '',
    idB: '',
    idC: '',
    nameD: '',
    indexLink: '',
    details: '',
    imgD: ''
  });

  const { school, idB, idC, nameD, indexLink, details, imgD } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    addShowD({ school, idB, idC, nameD, indexLink, details, imgD });
  };

  return (
    <Fragment>
      <div className="sign_up-content">
        <div className="sign_up-right">
          <h2>D צור קורס</h2>
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
                placeholder="שם הקורס D"
                name="nameD"
                value={nameD}
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
                placeholder="פירוט נושאים"
                name="details"
                value={details}
                onChange={e => onChange(e)}
              />
            </div>

            <div className="row-1">
              <input
                type="text"
                placeholder=" D תמונת הקורס"
                name="imgD"
                value={imgD}
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

AddShowD.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addShowD: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, addShowD }
)(AddShowD);
